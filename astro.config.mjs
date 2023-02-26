import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

console.log({ env: process.env.NODE_ENV })
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});