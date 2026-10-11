// @ts-check
import { defineConfig } from 'astro/config';
import measuremysite from 'astro-measuremysite';

// https://astro.build/config
export default defineConfig({
  // Analytics: reads PUBLIC_MEASUREMYSITE_KEY (see .env.example). Only built pages are tracked, not `astro dev`.
  integrations: [measuremysite()],
});
