# Portfolio Increment Plan

## Objective

Expand the published portfolio with a fuller career history, selected personal work, and richer visual context for public product work while retaining the current fast, accessible static site.

## Scope and decisions

### Full résumé

The currently deployed résumé is intentionally sanitized. The source PDF contains a phone number, so it must **not** be copied to `public/` without an explicit confirmation to disclose that information.

Default implementation: create a fuller public résumé from the source content, preserving the existing professional contact policy (email, LinkedIn, GitHub only). If the original PDF must be downloadable verbatim, the owner must explicitly approve publication of its phone number first.

### Earlier career history

Add the following roles from the supplied résumé, using conservative summaries:

- PPI-Multitask — Senior Java Developer, 2016–2017 (with the documented part-time overlap).
- Dexco (formerly Duratex) — System Analyst, 2012–2016.
- Earlier Java / Associate Developer roles at Indra, Otimize-TI, and Sistema FIEG — 2007–2012, presented as an accurate grouped entry unless exact dates and employers are confirmed.

The home timeline will remain focused on 2017 onward; the expanded résumé will carry the complete chronology to avoid making the home page overly dense.

### Product imagery

Use a project-image manifest with a source URL, usage status, meaningful alt text, and image credit/permission note. For Pearson, HMH, and Neovation work:

- Prefer public official screenshots or owner-provided screenshots that are approved for publication.
- Do not copy screenshots from a colleague’s portfolio as production assets without permission.
- Remove or reject images containing student/customer data, credentials, internal URLs, analytics, or non-public product information.
- Keep the existing original abstract covers as the safe fallback if an approved product image is unavailable.

## Personal projects

Add each project to the searchable archive with a GitHub link. Feature a small curated subset on the home page only after confirming which best represents current work.

| Project | Planned description source | Initial technology evidence | Placement |
| --- | --- | --- | --- |
| Cappella Mosaico | organization/repository and owner notes required | to be confirmed | archive after confirmation |
| Luncheon | repository access or owner notes required | to be confirmed | archive after confirmation |
| Etikagis | repository inspection / owner notes required | to be confirmed | archive after confirmation |
| SGS | repository inspection / owner notes required | to be confirmed | archive after confirmation |
| LojaVirtual | repository inspection / owner notes required | to be confirmed | archive after confirmation |
| TaskFlow Fullstack | repository README | React, TypeScript, Node.js, AWS, DynamoDB, PostgreSQL | candidate featured project |
| JSON Transformer API | repository README | Node.js, TypeScript, Express, Jest, Supertest | archive |
| Deck Game | repository README | Java, Spring Boot, React, TypeScript, Material UI | candidate featured project |

Every card will identify the work as a personal project or an open-source contribution when appropriate. The copy will not infer authorship, completion, deployment status, or business outcomes beyond the repository evidence or owner confirmation.

## Delivery plan

### Phase 6 — Content expansion

Branch: `phase-6-content-expansion`

1. Extend the typed content model to distinguish professional, personal, and open-source projects.
2. Build the expanded public résumé route and add earlier roles.
3. Add confirmed personal project cards, repository links, technologies, and filters.
4. Add a separate `projectImages` manifest and wire only approved visual assets.
5. Update the home featured-work selection after confirmation.
6. Add unit and end-to-end coverage for the new content, filters, external links, résumé privacy, image alts, keyboard navigation, and responsive layouts.

### Acceptance criteria

- The original phone number is absent from all public assets unless explicitly approved for release.
- All repository and public product links resolve successfully.
- Every non-decorative image has accurate alt text; decorative artwork remains empty-alt.
- The archive remains searchable by company/type/technology and URL query parameters continue to work.
- `pnpm check`, `pnpm lint`, `pnpm test`, `pnpm build`, and `CI=true pnpm test:e2e` pass.
- Production audit remains at least 95 Accessibility/SEO and 90 Performance, with LCP below 2.5 seconds and CLS below 0.1.

## Inputs required before implementation

1. Confirm whether “original résumé” means the verbatim PDF with the phone number, or the expanded sanitized public résumé (recommended).
2. Provide or approve the exact public screenshots/images for Pearson, HMH, and Neovation work, plus their source/permission context.
3. Confirm the exact Cappella Mosaico repository or public URL, and the current availability/visibility of Luncheon.
4. Choose up to three personal projects to feature on the home page; the recommended initial candidates are TaskFlow Fullstack, Deck Game, and JSON Transformer API.
