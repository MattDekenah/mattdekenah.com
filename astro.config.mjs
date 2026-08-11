// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://mattdekenah.com",
  trailingSlash: "ignore",
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes("/thanks"),
    }),
  ],
});
