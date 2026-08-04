# Portfolio Increment Plan

## Objective

Expand the published portfolio with a fuller career history, selected personal work, and richer visual context for public product work while retaining the current fast, accessible static site.

## Scope and decisions

### Full résumé

The owner supplied an updated PDF that contains no phone number. Publish that original, full public PDF as the downloadable résumé and retain the existing HTML résumé route for accessible, indexable content.

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

| Project              | Planned description source                                     | Initial technology evidence                                    | Placement                                                        |
| -------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- |
| Cappella Mosaico     | owner-provided product history and approved mobile screenshots | to be confirmed                                                | featured after asset review; label as archived/discontinued      |
| Luncheon             | owner notes and public release when available                  | Python APIs: Rogers API and Triangle API                       | do not feature until the app or repository is publicly available |
| Etikagis             | repository inspection / owner notes required                   | to be confirmed                                                | archive after confirmation                                       |
| SGS                  | repository inspection / owner notes required                   | to be confirmed                                                | archive after confirmation                                       |
| LojaVirtual          | repository inspection / owner notes required                   | to be confirmed                                                | archive after confirmation                                       |
| GymRats              | repository README                                              | Python, FastAPI, React, Vite, TypeScript, GitHub Pages         | recommended featured project                                     |
| ILPN.ca              | public website and owner confirmation                          | Planning Center / Church Center configuration and integrations | archive; approved screenshot requested during implementation     |
| TaskFlow Fullstack   | repository README                                              | React, TypeScript, Node.js, AWS, DynamoDB, PostgreSQL          | archive; explicitly label as a learning project                  |
| JSON Transformer API | repository README                                              | Node.js, TypeScript, Express, Jest, Supertest                  | archive                                                          |
| Deck Game            | repository README                                              | Java, Spring Boot, React, TypeScript, Material UI              | archive unless a public deployment is added                      |

### Project positioning guidance

- **GymRats** should be a home-page feature now: it has a clear public purpose, mature test coverage, a published static participant site, and a technically interesting local administration flow.
- **Cappella Mosaico** should become a home-page feature once approved screenshots are available. Present it as an archived mobile product that was previously available in the Apple App Store and Google Play; do not imply that it is currently downloadable.
- **Luncheon** should be held from the featured list until its repository or product is public. Its published supporting libraries can be listed as a small "Luncheon ecosystem" entry with their PyPI links:
  - Rogers API — an unofficial Python wrapper for Rogers Bank credit-card data.
  - Triangle API — an unofficial Python wrapper for Canadian Tire Triangle Mastercard data.
- **TaskFlow Fullstack**, **Deck Game**, and **JSON Transformer API** are valuable archive entries. They should link to GitHub, identify their completion/status accurately, and not be elevated simply because they have a detailed README.
- **ILPN.ca** is a live church website that currently redirects to Church Center. Present it as a non-code delivery completed through Planning Center: the owner handled design, configuration, integrations, and ongoing maintenance. There is no public repository. Request the approved screenshot at implementation time before adding a visual asset.

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

1. Provide or approve the exact public screenshots/images for Pearson, HMH, Neovation, and Cappella Mosaico work, plus their source/permission context.
2. Confirm the exact public URL or repository for Cappella Mosaico and notify us when Luncheon is publicly available.
3. Confirm the proposed home-page sequence: GymRats first, Cappella Mosaico after image review, and Luncheon after public release.
