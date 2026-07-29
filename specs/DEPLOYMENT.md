# Cloudflare Pages deployment

The production site is deployed from the `master` branch at <https://diogobastos.pages.dev/>.

## Pages configuration

- Framework preset: Astro
- Production branch: `master`
- Build command: `pnpm build`
- Build output directory: `dist`
- Root directory: repository root
- Environment variables:
  - `NODE_VERSION=22` for Production and Preview
  - `PUBLIC_SITE_URL=https://diogobastos.pages.dev` for Production

Cloudflare Pages creates a production deployment when changes are merged to `master` and a preview deployment for pull requests. The `public/_headers` file applies cache and browser-security headers to the deployed static files.

## Release check

1. Open the Pages preview deployment from the pull request.
2. Run the repository checks: `pnpm check && pnpm lint && pnpm test && pnpm build`.
3. After merging, verify `/`, `/projects/`, `/resume/`, `/sitemap.xml`, and the résumé PDF on production.
4. If a custom domain is added later, update `PUBLIC_SITE_URL` in Cloudflare Pages and trigger a deployment.
