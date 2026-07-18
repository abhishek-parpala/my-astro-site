import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://abhishekparpala.com',
  integrations: [sitemap()],
});