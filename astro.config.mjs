import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [storyblok({
    accessToken: env.STORYBLOK_AUTH_TOKEN,
    enableFallbackComponent: true,
    bridge: env.STORYBLOK_VERSION === 'draft',
    components: {
      "default-page": "components/storyblok/Page",
      "hero-section": 'components/storyblok/Hero',
      "grid-section": 'components/storyblok/Grid',
      "grid-card": 'components/storyblok/GridCard',
      "list": 'components/storyblok/List',
      "teaser": 'components/storyblok/Teaser',
    }
  }), 
  tailwind({
    applyBaseStyles: false,
  }),
  react()],
  adapter: netlify()
});