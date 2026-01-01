import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/svg';
import rehypeCitation from 'rehype-citation';

export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeMathjax,
        [
          rehypeCitation,
          {
            bibliography: ['src/bib/references.bib'],
            linkCitations: true
          }
        ]
      ]
    })
  ]
});
