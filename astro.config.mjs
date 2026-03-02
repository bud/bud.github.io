import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const onPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://bud.github.io',
  base: '/',
  integrations: [tailwind()],
  output: 'static'
});
