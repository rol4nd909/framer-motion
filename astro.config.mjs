import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://rol4nd909.github.io',
  
  // update the `base` to your needs
  base: '/astro-cube-tw-boilerplate/',
  
  scopedStyleStrategy: "where",
  integrations: [tailwind({
    applyBaseStyles: false,
    config: './tailwind.config.mjs',
    nesting: true,
  }), icon()],
});