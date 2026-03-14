# On-Policy Distillation Adventures - Blog

A premium, research-quality blog for documenting on-policy distillation experiments.

## 🎨 Design Features

- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body, JetBrains Mono for code
- **Colors**: Clean, minimal palette with blue-to-purple accents
- **Equations**: MathJax-rendered LaTeX
- **Interactive Elements**: Chart.js widgets for parameter exploration
- **Tables**: Styled data tables with semantic color coding
- **Figures**: Optimized for matplotlib PDF embedding

## 📁 Directory Structure

```
opd_adventures/
├── index.html          # Main blog file
├── README.md           # This file
├── plots/              # Generated matplotlib PDFs
│   ├── mixing_comparison.pdf
│   ├── oracle_scaling.pdf
│   ├── reward_comparison.pdf
│   ├── stability_analysis.pdf
│   └── seq_vs_kl.pdf
└── images/             # Static images, diagrams, etc.
```

## 📊 Generating Plots

The blog expects PDF plots generated from your CSV data. Here's a template Python script:

```python
import pandas as pd
import matplotlib.pyplot as plt
from pathlib import Path

# Load data
DATA_DIR = Path("../../on-policy-distillation-adventures/results/run_data")
PLOT_DIR = Path("plots")
PLOT_DIR.mkdir(exist_ok=True)

# Set up matplotlib for beautiful PDFs
plt.rcParams.update({
    'font.family': 'serif',
    'font.serif': ['Times New Roman'],
    'font.size': 11,
    'axes.labelsize': 12,
    'axes.titlesize': 13,
    'figure.dpi': 150,
    'savefig.dpi': 300,
    'savefig.bbox': 'tight',
    'axes.spines.top': False,
    'axes.spines.right': False,
})

# Example: Mixing strategies comparison
def plot_mixing_strategies():
    strategies = ['arithmetic_mean', 'geometric_mean', 'hard_switch', 'soft_switch', 'random']
    fig, axes = plt.subplots(2, 3, figsize=(14, 8))
    axes = axes.flatten()
    
    for i, strategy in enumerate(strategies):
        try:
            df = pd.read_csv(DATA_DIR / 'mixing_strategies' / f'{strategy}.csv', skiprows=1)
            ax = axes[i]
            
            # Plot reward
            if 'val-core/aime25/reward/best@8/mean' in df.columns:
                ax.plot(df['_step'], df['val-core/aime25/reward/best@8/mean'], 
                       label='Reward', color='#2563eb', linewidth=2)
            
            ax.set_title(f'{strategy.replace("_", " ").title()}')
            ax.set_xlabel('Step')
            ax.set_ylabel('Reward')
            ax.grid(alpha=0.3)
        except Exception as e:
            print(f"Error loading {strategy}: {e}")
    
    plt.tight_layout()
    plt.savefig(PLOT_DIR / 'mixing_comparison.pdf', format='pdf')
    plt.close()

# Generate all plots
if __name__ == '__main__':
    plot_mixing_strategies()
    # Add more plot functions...
```

## 🔧 Key Metrics to Plot

From your CSV files, these columns are particularly interesting:

### Reward Metrics
- `val-core/aime25/reward/best@8/mean` - Main performance metric
- `val-core/avg/reward/mean@8` - Average across tasks
- `val-aux/*/reward/*` - Auxiliary task performance

### Distillation Metrics
- `distill/teacher_kl` - KL divergence from teacher
- `rollout_corr/*` - Various correlation metrics
- `training/rollout_probs_diff_*` - Probability distribution alignment

### Training Metrics
- `actor/pg_loss` - Policy gradient loss
- `actor/entropy` - Policy entropy
- `actor/grad_norm` - Gradient norm (stability indicator)
- `perf/max_memory_allocated_gb` - Memory usage
- `perf/throughput` - Training speed

### Response Quality
- `response_length/mean` - Average response length
- `response_length_non_aborted/mean` - Length excluding failures
- `response/aborted_ratio` - Failure rate

## 🚀 Serving the Blog

### Option 1: Python HTTP Server (Simple)
```bash
cd public/opd_adventures
python -m http.server 8000
# Open http://localhost:8000
```

### Option 2: Node.js (if using this repo's structure)
```bash
npm run serve
# Or place in public/ folder and run the main app
```

## 📝 Adding New Sections

1. Add a new `<section id="your-section">` in `index.html`
2. Add corresponding nav link in the header
3. Create your matplotlib PDF in `plots/`
4. Embed using the `<figure class="pdf-embed">` pattern

## 🎯 Customization Tips

### Colors
Edit the CSS variables in `:root`:
```css
--accent-primary: #2563eb;    /* Change to your brand color */
--accent-secondary: #7c3aed;
--accent-tertiary: #059669;
```

### Fonts
Modify Google Fonts link and CSS font-family declarations.

### Plot Size
PDF plots are displayed at 500px height by default. Adjust in CSS:
```css
figure.pdf-embed iframe {
    height: 600px;  /* Change as needed */
}
```

## 📚 MathJax Tips

Inline math: `$E = mc^2$`

Display math:
```latex
$$\mathcal{L}_{\text{total}} = \alpha \mathcal{L}_{\text{RL}} + (1-\alpha) \mathcal{L}_{\text{distill}}$$
```

## 🔗 External Dependencies

- Google Fonts (Playfair Display, Inter, JetBrains Mono)
- MathJax 3 (for LaTeX rendering)
- Chart.js (for interactive widgets)

All loaded via CDN - no local installation needed!

## 📱 Responsive Design

The blog is fully responsive:
- Desktop: Full layout with side-by-side elements
- Tablet: Adjusted spacing
- Mobile: Single column, hamburger menu (optional)

## ✨ Premium Features

1. **Smooth scroll** navigation
2. **Back-to-top** functionality (add if needed)
3. **Print styles** for PDF generation
4. **Dark mode ready** (add `prefers-color-scheme` media query)
5. **SEO optimized** with proper meta tags

---

Happy distilling! 🧪
