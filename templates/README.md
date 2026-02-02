# Blog Template

A premium, editorial-style research blog template. Elegant typography, dynamic margin notes, and immersive section scrolling.

## Quick Start

```bash
# Copy template to public (publishes to your site)
cp -r templates/blog public/my_blog

# Edit content in public/my_blog/index.html
# Visit: https://yourdomain.com/my_blog
```

## Features

- **Editorial Typography**: Playfair Display headlines, Source Serif 4 body text
- **Dynamic Margin Notes**: Footnotes appear in right sidebar as you scroll
- **Hierarchical TOC**: Numbered sections (1, 2.1, 2.2) with scroll-spy
- **Section Scrolling**: Each section fills viewport, smooth transitions
- **Optional Cover Photo**: Forbes/WSJ-style hero with background image
- **Interactive Elements**: Sliders, charts, syntax-highlighted code
- **Responsive**: Clean reading experience on all devices

## Customization

### Basic Info

Edit these sections in `index.html`:

```html
<!-- Title & Subtitle -->
<h1 class="hero-title">Your Title Here</h1>
<p class="hero-subtitle">Your subtitle here</p>

<!-- Author -->
<div class="author-name">
    <a href="https://yoursite.com">Your Name</a>
</div>
<div class="author-affiliation">Your Affiliation</div>

<!-- Resources (Website, X, Data, etc.) -->
<div class="resources-grid">
    <a href="..." class="resource-item">...</a>
</div>
```

### Adding Sections

Each major section follows this pattern:

```html
<section id="your-section">
    <div class="section-header">
        <div class="section-number">§ 7</div>
        <h2>Section Title</h2>
        <p>Section description</p>
    </div>
    
    <!-- Content here -->
    <p>Your text with footnotes<span class="margin-marker" data-note="1">1</span>.</p>
</section>
```

### Subsections

```html
<h3 id="subsection-id">
    <span class="subsection-number">2.3</span>Subsection Title
</h3>
```

### Footnotes (Margin Notes)

1. **Add marker in text**:
   ```html
   <span class="margin-marker" data-note="1">1</span>
   ```

2. **Add content in JavaScript**:
   ```javascript
   const marginNotesData = {
       1: { text: 'Your footnote text with <a href="...">links</a>.' },
       2: { text: 'Math works too: $\\alpha = 0.5$' }
   };
   ```

### Cover Photo (Optional)

To enable a full-bleed hero image like Forbes/WSJ:

```css
/* Add to CSS */
.hero-section.hero-with-image {
    background-image: url('your-image.jpg');
}
```

```html
<!-- Add class to hero -->
<section id="hero" class="hero-section hero-with-image">
```

Without the class, you get the clean elegant background.

## File Structure

```
blog/
├── index.html          # Main blog file (edit this)
├── images/             # Store images here
├── plots/              # Charts, figures
└── README.md           # This file
```

## Tips

- **Line length**: Keep paragraphs at ~65 characters for readability
- **Images**: Use high-resolution images for cover photos
- **Math**: Use `$...$` for inline, `$$...$$` for display equations
- **Code**: Wrap in `<pre><code>` with syntax highlighting classes
- **Charts**: Use Chart.js (already included) for interactive plots

## Publishing

Only files in `public/` are served. To publish:

```bash
# Copy to public
cp -r templates/blog_template public/my_research

# Push to GitHub
git add public/my_research
git commit -m "Add new research blog"
git push
```

Your blog will be live at: `https://yourdomain.com/my_research`
