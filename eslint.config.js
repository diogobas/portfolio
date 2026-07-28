import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['.astro/', 'dist/', 'node_modules/', 'playwright-report/', 'test-results/', 'specs/'],
  },
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
);
