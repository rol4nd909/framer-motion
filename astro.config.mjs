import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://rol4nd909.github.io',
  // update the `base` to your needs
  base: '/framer-motion/',
  scopedStyleStrategy: "where",
  integrations: [tailwind({
    applyBaseStyles: false,
    config: './tailwind.config.ts',
    nesting: true
  }), icon(), react()]
});