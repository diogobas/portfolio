# Implementation Plan: Portfolio Project Website

**Branch**: `001-portfolio-site` | **Date**: 2025-12-04 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-portfolio-site/spec.md`

## Summary

Build a responsive, accessible portfolio website showcasing 4 professional projects from Houghton Mifflin Harcourt (HMH), integrated with Diogo's resume. The site features project cards with images, detailed project pages with technology stacks and external links, resume integration, AI-generated artwork per project, and project filtering by technology. Technology stack: **React 19** with **Material-UI 5** for styling/components, TypeScript for type safety, and modern build tooling for optimization.

## Technical Context

**Language/Version**: JavaScript/TypeScript with React 19 (latest stable)  
**Primary Dependencies**: Material-UI 5 (MUI), React Router DOM 6, TanStack Query (data fetching), Framer Motion (animations)  
**Storage**: N/A (static site - no backend database; local JSON data file for projects)  
**Testing**: Jest + React Testing Library (unit/component), Playwright (integration/E2E)  
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge) - responsive design (375px-1920px+)  
**Project Type**: Single-page web application (SPA) with client-side routing  
**Performance Goals**:

- Homepage load: <2 seconds (p95) on 4G
- Project image load: <3 seconds total (p95)
- Largest Contentful Paint (LCP): <2.5s
- First Input Delay (FID): <100ms
- Cumulative Layout Shift (CLS): <0.1

**Constraints**:

- <200ms response time for page navigation (p95)
- <100KB initial bundle size (gzipped)
- WCAG 2.1 AA accessibility compliance
- 80% code coverage minimum for new code
- Zero ESLint warnings in production builds

**Scale/Scope**:

- 4 projects displayed initially
- 5 main pages (Home, 4x Project Details, About/Resume)
- ~15-20 reusable React components
- ~1000-1500 lines of component code
- ~2000-3000 lines of test code

## Constitution Check

_GATE: Must pass before Phase 1 design. Re-check after implementation._

**Portfolio Constitution Principles** (1.0.0):

- ✅ **Code Quality**:
  - TypeScript strict mode enabled
  - ESLint + Prettier pre-commit hooks configured
  - Minimum 2-approval code review process
  - Component cyclomatic complexity <10
  - JSDoc comments on all public components/utils

- ✅ **Testing Standards**:
  - TDD mandatory: Tests written before implementation
  - 80% coverage minimum for new code
  - Unit tests: Jest with React Testing Library
  - Integration tests: Playwright for critical user flows (US1-US3)
  - All tests passing before merge to main

- ✅ **User Experience Consistency**:
  - Material-UI design system ensures consistent styling
  - Component library with 15-20 reusable components
  - WCAG 2.1 AA accessibility verified (keyboard nav, screen readers, contrast)
  - Consistent error messages (user-friendly, actionable)
  - Unified typography and spacing system

- ✅ **Performance Requirements**:
  - Performance budget: Homepage <2s (4G p95), images <3s
  - Monitoring: Lighthouse CI integration, Core Web Vitals tracking
  - Load testing: Webpack bundle analyzer for optimization
  - Image optimization: Next.js Image component (or equivalent)
  - Code splitting: Route-based lazy loading for project details

**Compliance Checkpoints**:

- [ ] ESLint config created with strict rules
- [ ] TypeScript strict mode enabled in tsconfig.json
- [ ] Jest + React Testing Library configured with 80% coverage threshold
- [ ] Playwright setup for integration tests
- [ ] MUI theme configured with accessibility guidelines
- [ ] Lighthouse CI configured in CI/CD pipeline
- [ ] Pre-commit hooks configured for linting and type-checking

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-site/
├── spec.md                      # Feature specification ✓
├── plan.md                       # This file (implementation plan)
├── research.md                   # Phase 0: Technology decisions + best practices
├── data-model.md                 # Phase 1: Entity schemas, data structures
├── contracts/                    # Phase 1: Component contracts + API schemas
│   ├── projects-api.md
│   ├── components.md
│   └── types.ts
├── quickstart.md                 # Phase 1: Developer onboarding guide
└── checklists/requirements.md    # Quality validation ✓
```

### Source Code (repository root)

```text
portfolio/
├── public/
│   ├── project-images/           # Downloaded project images
│   │   ├── classcraft.jpg
│   │   ├── session-organizer.png
│   │   ├── coachly.png
│   │   └── teacher-pathway.png
│   └── project-artwork/          # AI-generated artwork per project
│       ├── classcraft-artwork.png
│       ├── session-organizer-artwork.png
│       ├── coachly-artwork.png
│       └── teacher-pathway-artwork.png
│
├── src/
│   ├── components/               # React components (15-20 total)
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectGrid.tsx
│   │   │   ├── ProjectDetail.tsx
│   │   │   ├── ProjectHeader.tsx
│   │   │   ├── ProjectTechnologies.tsx
│   │   │   └── ProjectLinks.tsx
│   │   ├── resume/
│   │   │   ├── ResumeSection.tsx
│   │   │   ├── ExperienceList.tsx
│   │   │   ├── EducationList.tsx
│   │   │   └── SkillsList.tsx
│   │   ├── common/
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ImageWithFallback.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   └── Badge.tsx
│   │   └── index.ts              # Component exports
│   │
│   ├── pages/                    # Page components (route destinations)
│   │   ├── HomePage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── NotFoundPage.tsx
│   │
│   ├── data/                     # Static data
│   │   ├── projects.json         # Project metadata (4 projects)
│   │   └── resume.json           # Parsed resume data
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useProjects.ts        # Fetch projects data
│   │   ├── useResume.ts          # Fetch resume data
│   │   ├── useMediaQuery.ts      # Responsive design helper
│   │   └── useScrollPosition.ts  # Scroll tracking
│   │
│   ├── utils/                    # Utility functions
│   │   ├── imageLoader.ts        # Image optimization + fallback logic
│   │   ├── validators.ts         # Data validation schemas
│   │   ├── formatters.ts         # Date/text formatting helpers
│   │   └── constants.ts          # App constants (breakpoints, colors)
│   │
│   ├── theme/                    # Material-UI theme configuration
│   │   ├── theme.ts              # MUI theme with accessibility guidelines
│   │   ├── colors.ts             # Color palette
│   │   └── typography.ts         # Typography settings
│   │
│   ├── services/                 # Business logic services
│   │   ├── projectService.ts     # Project data operations
│   │   └── resumeService.ts      # Resume data operations
│   │
│   ├── types/                    # TypeScript type definitions
│   │   ├── project.ts
│   │   ├── resume.ts
│   │   └── common.ts
│   │
│   ├── App.tsx                   # Root component + routing
│   ├── App.css                   # App-level styles
│   └── index.tsx                 # React DOM render entry point
│
├── tests/
│   ├── unit/
│   │   ├── components/
│   │   │   ├── ProjectCard.test.tsx
│   │   │   ├── ProjectGrid.test.tsx
│   │   │   ├── ResumeSection.test.tsx
│   │   │   ├── ImageWithFallback.test.tsx
│   │   │   └── [...more component tests]
│   │   ├── hooks/
│   │   │   ├── useProjects.test.ts
│   │   │   └── useMediaQuery.test.ts
│   │   ├── utils/
│   │   │   ├── imageLoader.test.ts
│   │   │   ├── validators.test.ts
│   │   │   └── formatters.test.ts
│   │   └── services/
│   │       ├── projectService.test.ts
│   │       └── resumeService.test.ts
│   │
│   ├── integration/
│   │   ├── us1-browse-projects.test.tsx  # US1: Browse Project Portfolio
│   │   ├── us2-project-details.test.tsx  # US2: View Detailed Project Info
│   │   ├── us3-resume-access.test.tsx    # US3: Access Resume
│   │   └── us4-artwork.test.tsx          # US4: View AI Artwork
│   │
│   ├── e2e/                      # Playwright E2E tests
│   │   ├── navigation.spec.ts
│   │   ├── projects.spec.ts
│   │   ├── accessibility.spec.ts
│   │   └── performance.spec.ts
│   │
│   └── fixtures/
│       ├── projects-mock.json
│       ├── resume-mock.json
│       └── test-utils.tsx
│
├── .eslintrc.cjs                 # ESLint config (strict rules)
├── .prettierrc                   # Prettier config
├── tsconfig.json                 # TypeScript strict mode
├── vite.config.ts                # Vite build config
├── vitest.config.ts              # Vitest config for Jest-compatible testing
├── playwright.config.ts          # Playwright E2E config
├── package.json                  # Dependencies + scripts
├── pnpm-lock.yaml                # Lock file (pnpm for faster installs)
└── README.md                     # Developer guide

```

**Structure Decision**: Single-page React application using Vite for fast development and optimized production builds. Component structure mirrors user-facing features (layout, projects, resume, common). Comprehensive test coverage with unit tests for components/utils, integration tests for critical user stories (US1-US3), and E2E tests for full workflows using Playwright. Data-driven from static JSON files (projects.json, resume.json) with TypeScript types ensuring compile-time safety.

## Technology Stack Rationale

### Frontend Framework: React 19

- **Why**: Matches your 20 years of experience with modern web frameworks; React expertise evident in resume
- **Version**: Latest stable (19.x) for latest features (React Compiler, better error boundaries)
- **Alternatives Considered**: Vue 3 (similar, but less familiar), Next.js (overkill for static portfolio)
- **Decision**: React 19 provides balance of productivity, ecosystem maturity, and performance

### Styling & Components: Material-UI 5

- **Why**: Pre-built, accessible component library aligned with WCAG 2.1 AA requirements
- **Features**: Theming system, responsive breakpoints, built-in accessibility (ARIA, keyboard nav)
- **Alternatives Considered**: Tailwind CSS (lower-level, more control but more code); Chakra UI (good alternative, but MUI has better documentation)
- **Decision**: MUI provides design system consistency + accessibility out-of-the-box

### Build Tool: Vite

- **Why**: Fast development server, optimized production bundles, excellent TypeScript support
- **Performance**: 300-400ms dev server startup vs 2-5s with Create React App
- **Alternatives Considered**: Webpack (Create React App - older, slower); Turbopack (Rust-based, experimental)
- **Decision**: Vite balances speed with stability; now standard in React ecosystem

### Type Safety: TypeScript

- **Why**: Mandatory per Constitution (Code Quality principle); compile-time safety for complex state
- **Config**: Strict mode enabled; all `any` types forbidden
- **Decision**: Already using TypeScript in resume experience; essential for portfolio codebase

### Testing: Jest + React Testing Library + Playwright

- **Unit Tests**: Jest + React Testing Library for component testing (80% coverage)
- **Integration Tests**: Playwright for E2E user flows (critical paths US1-US3)
- **Why**: Industry standard for React; Playwright provides cross-browser E2E testing
- **Decision**: Comprehensive testing strategy aligns with Constitution (Testing Standards principle)

### Data Fetching: TanStack Query

- **Why**: Handles caching, refetching, and state management for async data
- **Use**: Fetch projects.json and resume.json with built-in stale-time and refetch logic
- **Alternative**: Direct fetch() calls (simpler but less robust error handling)
- **Decision**: TanStack Query adds resilience for slow networks

### Routing: React Router DOM 6

- **Why**: Standard routing solution; declarative, composable routes
- **Features**: Lazy loading for project detail pages, navigation state management
- **Decision**: Industry standard; aligns with React 19 ecosystem

### Animation: Framer Motion

- **Why**: Smooth page transitions, image loading animations (fade-in for artwork)
- **Use**: Page transitions on route changes, stagger animations for project cards
- **Decision**: Enhances visual polish without significantly impacting performance

## Performance Strategy

### Initial Load (<2s on 4G p95)

1. **Code Splitting**: Route-based lazy loading for project detail pages (only load when accessed)
2. **Image Optimization**:
   - Download images once at build time, store in `public/`
   - Serve via CDN or optimized HTTP caching
   - Use responsive images (srcset) for different breakpoints
   - Compress with WebP fallback to PNG/JPG
3. **Bundle Optimization**:
   - Tree-shaking unused dependencies
   - Dynamic imports for heavy libraries (Framer Motion)
   - Minification + gzip compression
4. **Lighthouse Targets**:
   - Performance score: 90+
   - Largest Contentful Paint (LCP): <2.5s
   - First Input Delay (FID): <100ms
   - Cumulative Layout Shift (CLS): <0.1

### Project Images Load (<3s total, p95)

1. **Image Delivery**:
   - Store downloaded images in `public/project-images/`
   - Implement `<ImageWithFallback />` component with retry logic
   - Progressive enhancement: load low-quality placeholder, then high-quality
2. **Fallback Strategy**:
   - If image fails: Show MUI skeleton loader, retry on user click
   - Ultimate fallback: Show project name + description text-only
3. **Responsive Images**:
   - Serve different image sizes for mobile/tablet/desktop
   - CSS object-fit for consistent aspect ratios

### Runtime Performance

1. **Memoization**: Use `React.memo()` for ProjectCard, ProjectDetail (prevent re-renders)
2. **State Management**: Local state for component-level UI (filters, sorting); TanStack Query for shared data
3. **Animations**: Use CSS transforms + opacity (GPU-accelerated) in Framer Motion
4. **Accessibility**: No performance regression with a11y features (semantic HTML, ARIA labels)

## Testing Strategy

### Unit Tests (Jest + React Testing Library)

- **Target**: 80% coverage minimum for new code
- **Coverage Areas**:
  - Components: ProjectCard, ProjectGrid, ResumeSection, ImageWithFallback (render, click handlers, props validation)
  - Hooks: useProjects, useMediaQuery (data fetching, breakpoint detection)
  - Utils: formatters, validators, imageLoader (pure functions, edge cases)
  - Services: projectService, resumeService (data operations)
- **Approach**: Test user interactions (click, keyboard), not implementation details
- **Example**: Test that ProjectCard displays project title + technologies, not that it uses MUI Card

### Integration Tests (Playwright)

- **Scope**: Critical user stories (US1, US2, US3)
- **Test Cases**:
  - **US1**: Load homepage → scroll → see all 4 projects with images
  - **US2**: Click project → navigate to detail page → see full info + external links
  - **US3**: Navigate to resume → see professional info + correlate to projects
- **Cross-Browser**: Test in Chrome, Firefox, Safari (Playwright multi-browser)
- **Accessibility**: Run axe accessibility audit during tests

### E2E Tests (Playwright)

- **Test Cases**:
  - Full navigation flow (homepage → projects → details → resume → back to home)
  - Keyboard navigation (Tab through all interactive elements)
  - Image loading on slow networks (throttled 4G)
  - Error scenarios (click broken link, image fails to load)
- **Performance**: Lighthouse CI integration to catch performance regressions

### Test Coverage Targets

- Components: 85% (logic + user interactions)
- Hooks: 90% (all branches, edge cases)
- Utils: 95% (pure functions, all edge cases)
- Services: 90% (data operations, error handling)
- Overall: 80%+ (per Constitution requirement)

## Accessibility (WCAG 2.1 AA) Strategy

1. **Semantic HTML**: Use `<nav>`, `<main>`, `<header>`, `<footer>`, `<article>` for document structure
2. **ARIA Labels**: Add aria-label to icon buttons, aria-describedby to form fields
3. **Keyboard Navigation**: All interactive elements reachable via Tab key; no keyboard traps
4. **Color Contrast**: MUI theme ensures 4.5:1 contrast ratio minimum
5. **Images**: All images have alt text; AI artwork has descriptive alt text
6. **Error Messages**: Clear, actionable error messages in plain language
7. **Testing**: Automated axe scans during tests; manual screen reader testing (NVDA, VoiceOver)

## Code Quality Standards

### ESLint Configuration

- Extends: `eslint:recommended`, `plugin:react/recommended`, `plugin:@typescript-eslint/recommended`
- Rules:
  - Cyclomatic complexity: max 10 per function
  - Line length: max 120 characters
  - Imports: organized, no unused imports
  - Variables: camelCase for functions/variables, PascalCase for components/types

### TypeScript Strict Mode

- `strict: true` in tsconfig.json (all `any` types forbidden)
- `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes` enabled
- All functions typed; return types explicit

### Code Style

- Prettier formatting (automatic on save)
- Component naming: PascalCase (ProjectCard.tsx)
- Const/let/var: prefer const, then let; never var
- JSDoc comments on all public functions + components

### Pre-Commit Hooks (Husky)

- Lint staged files (ESLint)
- Type-check modified TypeScript files
- Format code (Prettier)
- Prevents commits with errors

## Data Model

### Projects Data Structure

```typescript
interface Project {
  id: string; // "classcraft"
  name: string; // "Classcraft"
  company: string; // "HMH"
  brief: string; // 1-2 sentence summary
  description: string; // Full description
  technologies: string[]; // ["React", "AI Summarization"]
  imageUrl: string; // "project-images/classcraft.jpg"
  referenceUrl?: string; // HMH reference URL
  demoUrl?: string; // Demo link if available
  artwork?: string; // "project-artwork/classcraft-artwork.png"
}

interface Resume {
  profile: string; // Professional summary
  experience: Experience[]; // Work history
  education: Education[]; // Education entries
  skills: string[]; // Technical skills
  contact: {
    email: string;
    phone: string;
    linkedin: string;
  };
}

interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
}
```

### projects.json Structure

- 4 projects (Classcraft, Session Organizer, Coachly, Teacher Success Pathways)
- Stored in `src/data/projects.json`
- Validated against TypeScript types at compile time

### resume.json Structure

- Parsed from resume.md at build time or manually maintained
- Stored in `src/data/resume.json`
- Contains professional summary, 3-4 highlighted experiences, education, key skills

## Development Workflow

### Local Development

1. `pnpm install` - Install dependencies
2. `pnpm dev` - Start Vite dev server (http://localhost:5173)
3. `pnpm test` - Run Jest unit tests in watch mode
4. `pnpm lint` - Run ESLint + TypeScript type-check
5. `pnpm build` - Create production bundle
6. `pnpm preview` - Preview production build locally

### Build & Deployment

1. **Build Command**: `vite build` → outputs to `dist/`
2. **Output**: Single HTML file + CSS + JS bundles
3. **Deployment**: Static hosting (Vercel, Netlify, GitHub Pages)
4. **CI/CD**: GitHub Actions workflow (lint → test → build → deploy)

### Version Control Conventions

- Commit messages: `feat:`, `fix:`, `chore:`, `docs:`, `test:` prefixes
- Branch naming: `001-portfolio-site` (already created)
- PR reviews: Minimum 1 approval; CI checks passing

## Complexity Tracking

No Constitution violations identified. This is a straightforward frontend portfolio site with clear scope and no organizational-only libraries.

| Item                 | Scope Justification                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| React + MUI stack    | Justified by resume expertise; aligns with Constitution Code Quality (TypeScript, linting, testing) |
| 4 projects display   | Per spec requirement; easily extensible to more projects                                            |
| TanStack Query       | Adds resilience for slow networks; improves UX on 4G                                                |
| Playwright E2E tests | Critical for validating US1-US3 user flows on 4G networks                                           |

## Next Steps

1. **Phase 0: Research** (if needed)
   - Technology decision validated above
   - No additional research needed; proceed to Phase 1

2. **Phase 1: Design & Contracts**
   - Create `data-model.md` with detailed data schemas
   - Create `contracts/` folder with component interfaces
   - Create `quickstart.md` for developer onboarding

3. **Phase 2: Implementation** (via `/speckit.tasks`)
   - Generate tasks breaking down 5 user stories
   - Each story independently implementable
   - US1-US3 (P1) for MVP; US4-US5 (P2-P3) for enhancements

---

**Status**: ✅ APPROVED FOR PHASE 1 DESIGN & CONTRACTS  
**Next Command**: Run `/speckit.tasks` after Phase 1 contracts are complete to generate implementation task breakdown.
