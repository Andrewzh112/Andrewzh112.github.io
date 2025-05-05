#!/usr/bin/env python
import json
import os
from tqdm import tqdm
import numpy as np
import umap
import argparse

def load_data(input_path, task_type, max_steps=200):
    """Load data from a JSONL file and filter by steps."""
    print(f"Reading {input_path}...")
    
    # Read the data
    data = []
    embeddings = []
    
    # Count lines first for progress bar
    with open(input_path, 'r') as f:
        line_count = sum(1 for _ in f)
    
    # Read the data
    filtered_count = 0
    with open(input_path, 'r') as f:
        for line in tqdm(f, total=line_count, desc=f"Reading {task_type} data"):
            if not line.strip():
                continue
                
            item = json.loads(line)
            
            # Check if steps are less than or equal to max_steps
            steps_field = 'input_steps' if task_type == 'Abduction' else 'output_steps'
            steps = item.get(steps_field, None)
            
            # Skip items with steps > max_steps or missing steps
            if steps is None or steps > max_steps:
                filtered_count += 1
                continue
            
            # Add task type information
            item['task_type'] = task_type
            
            # Rename steps field for consistency
            if task_type == 'Abduction':
                item['steps'] = item.pop('input_steps', None)
            else:
                item['steps'] = item.pop('output_steps', None)
                
            data.append(item)
            embeddings.append(item['embedding'])
    
    print(f"Loaded {len(data)} items from {input_path} (filtered out {filtered_count} items with steps > {max_steps})")
    return data, embeddings

def process_model(model, base_dir, output_dir, max_steps=200, n_neighbors=15, min_dist=0.1):
    """Process input and output files for a model together using UMAP."""
    print(f"\n{'='*50}\nProcessing model: {model}\n{'='*50}")
    
    # Load input data (Abduction)
    input_file = os.path.join(base_dir, f"{model}_input.jsonl")
    input_data, input_embeddings = load_data(input_file, "Abduction", max_steps)
    
    # Load output data (Deduction)
    output_file = os.path.join(base_dir, f"{model}_output.jsonl")
    output_data, output_embeddings = load_data(output_file, "Deduction", max_steps)
    
    # Skip if either input or output data is empty
    if len(input_data) == 0 or len(output_data) == 0:
        print(f"Skipping model {model} due to empty input or output data")
        return 0
    
    # Combine data and embeddings
    all_data = input_data + output_data
    all_embeddings = input_embeddings + output_embeddings
    
    print(f"Combined data: {len(all_data)} items ({len(input_data)} input, {len(output_data)} output)")
    print(f"Applying UMAP to combined embeddings...")
    
    # Convert to numpy array
    embeddings_array = np.array(all_embeddings)
    
    # Apply UMAP to combined data
    reducer = umap.UMAP(n_neighbors=n_neighbors, 
                      min_dist=min_dist, 
                      n_components=2, 
                      metric='cosine',
                      random_state=42)
    
    embeddings_2d = reducer.fit_transform(embeddings_array)
    
    print(f"Adding 2D coordinates to data...")
    
    # Create separate input and output datasets with 2D coordinates
    processed_input_data = []
    processed_output_data = []
    light_input_data = []
    light_output_data = []
    
    # Add 2D coordinates to the data
    for i, item in enumerate(all_data):
        # Add 2D coordinates
        item['x'] = float(embeddings_2d[i, 0])
        item['y'] = float(embeddings_2d[i, 1])
        
        # Create a lightweight version with only necessary fields
        light_item = {
            'snippet': item['snippet'],
            'input': item['input'],
            'output': item['output'],
            'task_type': item['task_type'],
            'steps': item['steps'],
            'x': item['x'],
            'y': item['y']
        }
        
        # Sort into input and output datasets
        if item['task_type'] == 'Abduction':
            processed_input_data.append(item)
            light_input_data.append(light_item)
        else:
            processed_output_data.append(item)
            light_output_data.append(light_item)
    
    # Write processed input data (with embeddings)
    input_processed_path = os.path.join(output_dir, f"{model}_input_processed.jsonl")
    print(f"Writing processed input data to {input_processed_path}...")
    with open(input_processed_path, 'w') as f:
        for item in processed_input_data:
            f.write(json.dumps(item) + '\n')
    
    # Write processed output data (with embeddings)
    output_processed_path = os.path.join(output_dir, f"{model}_output_processed.jsonl")
    print(f"Writing processed output data to {output_processed_path}...")
    with open(output_processed_path, 'w') as f:
        for item in processed_output_data:
            f.write(json.dumps(item) + '\n')
    
    # Write lightweight input data (without embeddings)
    light_input_path = os.path.join(output_dir, f"{model}_input_processed_light.jsonl")
    print(f"Writing lightweight input data to {light_input_path}...")
    with open(light_input_path, 'w') as f:
        for item in light_input_data:
            f.write(json.dumps(item) + '\n')
    
    # Write lightweight output data (without embeddings)
    light_output_path = os.path.join(output_dir, f"{model}_output_processed_light.jsonl")
    print(f"Writing lightweight output data to {light_output_path}...")
    with open(light_output_path, 'w') as f:
        for item in light_output_data:
            f.write(json.dumps(item) + '\n')
    
    # Write combined data (with embeddings)
    combined_path = os.path.join(output_dir, f"{model}_combined.jsonl")
    print(f"Writing combined data to {combined_path}...")
    with open(combined_path, 'w') as f:
        for item in all_data:
            f.write(json.dumps(item) + '\n')
    
    # Write lightweight combined data (without embeddings)
    light_combined_path = os.path.join(output_dir, f"{model}_combined_light.jsonl")
    print(f"Writing lightweight combined data to {light_combined_path}...")
    with open(light_combined_path, 'w') as f:
        for item in light_input_data + light_output_data:
            f.write(json.dumps(item) + '\n')
    
    print(f"Done processing model {model}!")
    return len(all_data)

def main():
    parser = argparse.ArgumentParser(description="Process embeddings with UMAP")
    parser.add_argument("--base-dir", default="/Users/andrewzhao/Documents/Andrewzh112.github.io/public/assets/absolute-zero-reasoner", 
                       help="Directory containing the JSONL files")
    parser.add_argument("--output-dir", default="/Users/andrewzhao/Documents/Andrewzh112.github.io/public/assets/absolute-zero-reasoner/processed", 
                       help="Directory to save processed JSONL files")
    parser.add_argument("--max-steps", type=int, default=200,
                       help="Maximum number of steps to include (default: 200)")
    parser.add_argument("--n-neighbors", type=int, default=15,
                       help="UMAP n_neighbors parameter (default: 15)")
    parser.add_argument("--min-dist", type=float, default=0.1,
                       help="UMAP min_dist parameter (default: 0.1)")
    args = parser.parse_args()
    
    # Create output directory if it doesn't exist
    os.makedirs(args.output_dir, exist_ok=True)
    
    models = [
        "azr_base_7b",
        "azr_base_14b",
        "azr_coder_14b",
        "azr_coder_7b"
    ]
    
    total_processed = 0
    
    # Process all models
    for model in models:
        count = process_model(
            model=model,
            base_dir=args.base_dir,
            output_dir=args.output_dir,
            max_steps=args.max_steps,
            n_neighbors=args.n_neighbors,
            min_dist=args.min_dist
        )
        total_processed += count
    
    print(f"\nTotal processed: {total_processed} items")
    print(f"Processed files saved to {args.output_dir}")
    print(f"Lightweight files (without embeddings) are also available with '_light' suffix")
    print(f"Note: Only included entries with steps ≤ {args.max_steps}")
    print(f"Note: Input and output data were combined before UMAP processing for each model")

if __name__ == "__main__":
    main() 