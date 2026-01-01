# Academic blog template (Astro + MDX + React + MathJax)

This template is meant to live as a subsite. It gives you:
- MDX for writing
- React components for interactive figures
- Math via MathJax (SVG output)
- BibTeX citations + references section

## Quick start

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

By default, output goes to `dist/`. When you are ready to publish it as a subsite,
set `outDir` in `astro.config.mjs` to a path like `../../public/blogs`.

## Citations

- Add BibTeX entries in `src/bib/references.bib`.
- Use citations like `[@doe2020]` in MDX.
- Keep a `## References` heading with `<div id="refs"></div>` in your page.

## Math

Use `$...$` for inline and `$$...$$` for display math.

If you want HTML MathJax output instead of SVG, switch the import to
`rehype-mathjax/chtml` in `astro.config.mjs`.
