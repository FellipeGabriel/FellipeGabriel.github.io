import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fellipegabriel.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: { responsiveStyles: false },
});
