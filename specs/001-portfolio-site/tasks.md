# Implementation Tasks: Portfolio Project Website

**Feature**: Portfolio Project Website (001)  
**Phase**: 2 Implementation Breakdown  
**Created**: 2025-12-04  
**Status**: Ready for Development

---

## Overview

This document breaks down the implementation plan into actionable tasks organized by priority and dependency. Tasks are grouped into phases to ensure logical build order and minimize blocking dependencies.

**Estimated Scope**: 
- Phase 0 (Setup): 1-2 days
- Phase 1 (Foundation): 3-4 days
- Phase 2-6 (Features): 2-3 days per phase (5-8 days total)
- Total: ~10-14 days for full implementation

---

## Task Legend

**Status Codes**:
- `TODO`: Not started
- `IN-PROGRESS`: Currently being worked on
- `BLOCKED`: Waiting on dependency
- `REVIEW`: Completed, pending code review
- `DONE`: Merged and verified

**Priority**:
- 🔴 **Critical**: Blocks other tasks or must be completed for MVP
- 🟠 **High**: Important for user stories but has some wiggle room
- 🟡 **Medium**: Nice to have, can be deferred to post-MVP
- 🟢 **Low**: Polish/optimization, post-MVP

**Ownership** (fill in as team assigns):
- [ASSIGN]: Unassigned, needs owner
- [NAME]: Person assigned to task

---

## Phase 0: Project Setup

### 0.1 Initialize Project Structure
**Priority**: 🔴 Critical  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: None  
**Estimated**: 2-4 hours

**Description**: 
Set up Vite + React 19 project with TypeScript strict mode, Material-UI, and development tools.

**Checklist**:
- [ ] Initialize Vite project: `pnpm create vite portfolio --template react-ts`
- [ ] Install core dependencies:
  - React 19, React DOM 19
  - Material-UI 5 (@mui/material)
  - React Router DOM 6
  - TanStack Query 5
  - Framer Motion
  - TypeScript 5
- [ ] Install dev tools:
  - Vite plugins (@vitejs/plugin-react)
  - ESLint + TypeScript support
  - Prettier
  - Jest + React Testing Library
  - Playwright
  - Husky (git hooks)
- [ ] Configure TypeScript strict mode (tsconfig.json)
- [ ] Create project folder structure (src/components/, src/pages/, etc.)
- [ ] Create .env.local template
- [ ] Update package.json scripts (dev, build, test, lint, format)
- [ ] Verify dev server runs: `pnpm dev`

**Acceptance Criteria**:
- ✅ `pnpm dev` starts server at http://localhost:5173
- ✅ `pnpm typecheck` passes with no errors
- ✅ `pnpm lint` shows no critical errors
- ✅ All required dependencies installed and versions documented
- ✅ TypeScript strict mode enforced (no `any` types)

**Files Created/Modified**:
- package.json (dependencies, scripts)
- tsconfig.json (strict mode)
- vite.config.ts (Vite configuration)
- .eslintrc.json (linting rules)
- .prettierrc (code formatting)
- src/index.tsx, src/App.tsx (project entry points)

---

### 0.2 Set Up Testing Infrastructure
**Priority**: 🔴 Critical  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 0.1  
**Estimated**: 4-6 hours

**Description**: 
Configure Jest, React Testing Library, and Playwright for comprehensive testing strategy.

**Checklist**:
- [ ] Configure Jest:
  - jest.config.js
  - setupTests.ts (test utilities)
  - Module name mapping for imports
  - Coverage thresholds (80% target)
- [ ] Configure React Testing Library:
  - @testing-library/react, @testing-library/jest-dom, @testing-library/user-event
  - Custom render function with providers (Router, QueryClient)
- [ ] Configure Playwright:
  - playwright.config.ts
  - Base URL (http://localhost:5173)
  - Headless/headed modes
  - Screenshots on failure
- [ ] Create test fixtures:
  - Mock data directory (tests/fixtures/)
  - Sample project data
  - Sample resume data
  - API response mocks
- [ ] Set up CI/CD integration (GitHub Actions)
  - Test on push
  - Build on push
  - Type check on push
- [ ] Create test templates:
  - Unit test template
  - Integration test template
  - E2E test template

**Acceptance Criteria**:
- ✅ `pnpm test` runs Jest tests successfully
- ✅ `pnpm test:watch` enters watch mode
- ✅ `pnpm test:coverage` generates coverage report
- ✅ `pnpm test:integration` runs Playwright tests (with test server running)
- ✅ At least 1 example test for each test type (unit, integration, E2E)
- ✅ All tests pass with coverage >75%

**Files Created**:
- jest.config.js
- jest.setup.ts
- playwright.config.ts
- .github/workflows/test.yml (CI/CD)
- tests/fixtures/ (mock data)
- tests/unit/example.test.tsx
- tests/integration/example.test.ts

---

### 0.3 Configure Material-UI Theme
**Priority**: 🔴 Critical  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 0.1  
**Estimated**: 2-3 hours

**Description**: 
Set up Material-UI theming for design consistency, accessibility compliance (WCAG 2.1 AA), and responsive breakpoints.

**Checklist**:
- [ ] Create theme configuration:
  - Primary/secondary color palette
  - Typography scale (font sizes, weights)
  - Spacing scale (margin/padding units)
  - Breakpoints (xs, sm, md, lg, xl)
  - Component overrides (Button, Card, etc.)
  - Dark mode support (optional)
- [ ] Ensure accessibility standards:
  - Minimum 4.5:1 contrast ratio for text
  - Minimum 3:1 contrast ratio for graphics
  - Focus indicators (keyboard navigation)
  - Semantic HTML compliance
- [ ] Create ThemeProvider wrapper in App.tsx
- [ ] Document theme customization guide
- [ ] Test theme on multiple devices/browsers

**Acceptance Criteria**:
- ✅ Theme file created (src/theme/theme.ts or src/theme/index.ts)
- ✅ All MUI components render with theme colors
- ✅ Color contrast validated (axe audit tool)
- ✅ Responsive breakpoints work on xs/sm/md/lg/xl
- ✅ Theme exported and importable in components
- ✅ Dark mode toggle works (if implemented)

**Files Created**:
- src/theme/theme.ts
- src/theme/palette.ts (color definitions)
- src/theme/typography.ts (font settings)
- src/theme/index.ts (theme export)

---

## Phase 1: Foundational Components & Services

### 1.1 Create Layout Components
**Priority**: 🔴 Critical  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 0.3  
**Estimated**: 3-4 hours

**Description**: 
Build reusable layout components (Header, Navigation, Footer, Layout wrapper).

**Checklist**:
- [ ] **Header.tsx**:
  - Display portfolio title/subtitle
  - Responsive on mobile (hamburger menu integration)
  - Logo/branding (optional)
  - Props: title, subtitle, onMenuClick
  - Test: Render with props, click events
  - Accessibility: Semantic <header>, ARIA labels
  
- [ ] **Navigation.tsx**:
  - Link to Home, Projects, Resume, Contact (as applicable)
  - Active link highlighting (React Router)
  - Mobile responsive (hamburger menu)
  - Props: links[], isOpen, onClose
  - Test: Link navigation, active state
  - Accessibility: Semantic <nav>, keyboard nav
  
- [ ] **Footer.tsx**:
  - Copyright notice
  - Social links (GitHub, LinkedIn, etc. from resume)
  - Contact info
  - Props: none required, data from resume.json
  - Test: Render, link verification
  - Accessibility: Semantic <footer>, link targets
  
- [ ] **Layout.tsx**:
  - Wrapper component combining Header, Navigation, Footer
  - Main content area
  - Props: children, title, subtitle
  - Test: Render with children
  - Responsive layout grid

**Acceptance Criteria**:
- ✅ All 4 layout components render correctly
- ✅ Header/Navigation responsive (mobile/tablet/desktop)
- ✅ Links navigate properly (React Router integration tested)
- ✅ All components pass accessibility audit (Axe)
- ✅ Unit tests written (80% coverage minimum)
- ✅ Components render with Material-UI theme

**Files Created**:
- src/components/layout/Header.tsx
- src/components/layout/Navigation.tsx
- src/components/layout/Footer.tsx
- src/components/layout/Layout.tsx
- src/components/layout/index.ts (exports)
- tests/unit/components/layout/Header.test.tsx
- tests/unit/components/layout/Navigation.test.tsx
- tests/unit/components/layout/Footer.test.tsx
- tests/unit/components/layout/Layout.test.tsx

---

### 1.2 Create Common/Utility Components
**Priority**: 🔴 Critical  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 0.3  
**Estimated**: 4-5 hours

**Description**: 
Build reusable utility components used across the application.

**Checklist**:
- [ ] **ImageWithFallback.tsx**:
  - Display image with error handling fallback
  - Props: src, alt, fallbackSrc, width, height, onError, onLoad, responsive
  - Fallback strategy: Primary image → Fallback image → Alt text
  - Lazy loading (optional)
  - Test: Render, error states, fallback display
  - Accessibility: Alt text, lazy loading semantics
  
- [ ] **ErrorBoundary.tsx**:
  - Catch render errors, prevent white-screen crashes
  - Display user-friendly error message
  - Recovery button (retry)
  - Props: children, fallback (optional)
  - Test: Render with error-throwing child, recovery
  - Logging: Console + optional service
  
- [ ] **LoadingSpinner.tsx**:
  - MUI CircularProgress wrapper
  - Props: size ("small" | "medium" | "large"), message
  - Test: Render with different sizes
  - Accessibility: aria-label, sr-only text
  
- [ ] **ErrorMessage.tsx**:
  - MUI Alert wrapper for error messages
  - Props: message, severity, onRetry, onDismiss
  - Dismissible variant
  - Test: Render, dismiss, retry callback
  - Accessibility: ARIA alerts
  
- [ ] **Badge.tsx**:
  - MUI Chip wrapper for tech tags/badges
  - Props: label, onDelete (optional), variant, color
  - Usage: Technology tags, category badges
  - Test: Render, delete callback
  
- [ ] **PageContainer.tsx**:
  - Standard page wrapper with consistent padding/max-width
  - Props: children, title, description, maxWidth
  - Responsive spacing

**Acceptance Criteria**:
- ✅ All 6 utility components render correctly
- ✅ Error states handled gracefully
- ✅ Accessibility audit passes (Axe)
- ✅ Unit tests written (80% coverage)
- ✅ All components use theme correctly
- ✅ Components properly exported and documented

**Files Created**:
- src/components/common/ImageWithFallback.tsx
- src/components/common/ErrorBoundary.tsx
- src/components/common/LoadingSpinner.tsx
- src/components/common/ErrorMessage.tsx
- src/components/common/Badge.tsx
- src/components/common/PageContainer.tsx
- src/components/common/index.ts
- tests/unit/components/common/[component].test.tsx (×6)

---

### 1.3 Create Data Services
**Priority**: 🔴 Critical  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: None  
**Estimated**: 3-4 hours

**Description**: 
Implement data fetching services for projects and resume data.

**Checklist**:
- [ ] **projectService.ts**:
  - getProjects(): Promise<Project[]> - Fetch all projects
  - getProjectById(id: string): Promise<Project> - Fetch single project
  - getProjectsByTechnology(tech: string): Promise<Project[]> - Filter by tech
  - getRelatedProjects(id: string, limit: number): Promise<Project[]> - Find related
  - Error handling: Try/catch, meaningful error messages
  - Test: Mock data, error scenarios
  - Performance: Consider caching (TanStack Query handles this)
  
- [ ] **resumeService.ts**:
  - getResume(): Promise<Resume> - Fetch complete resume
  - getExperiences(): Promise<Experience[]> - Get work history
  - getEducation(): Promise<Education[]> - Get education
  - getSkills(grouped?: boolean): Promise<Skill[] | SkillsMap> - Get skills
  - Error handling: Validation, null checks
  - Test: Mock data, transformations
  
- [ ] **Data files**:
  - src/data/projects.json - Project data (from spec)
  - src/data/resume.json - Resume data (from user input)
  - Validate JSON structure matches TypeScript types
  
- [ ] **Type definitions**:
  - src/types/project.ts - Project, ProjectImage, ProjectArtwork interfaces
  - src/types/resume.ts - Resume, Experience, Education, Skill interfaces
  - src/types/common.ts - Common types (Contact, etc.)
  - Ensure TypeScript strict mode compliance

**Acceptance Criteria**:
- ✅ All service methods return correct data types
- ✅ Error handling works (invalid IDs, network errors)
- ✅ JSON data files valid and match types
- ✅ Unit tests cover happy path + error scenarios
- ✅ TypeScript strict mode: No `any` types
- ✅ Services are framework-agnostic (testable independently)

**Files Created**:
- src/services/projectService.ts
- src/services/resumeService.ts
- src/data/projects.json
- src/data/resume.json
- src/types/project.ts
- src/types/resume.ts
- src/types/common.ts
- src/types/index.ts (exports)
- tests/unit/services/projectService.test.ts
- tests/unit/services/resumeService.test.ts

---

### 1.4 Create Custom Hooks
**Priority**: 🔴 Critical  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 1.3  
**Estimated**: 2-3 hours

**Description**: 
Build custom React hooks for data fetching and responsive design.

**Checklist**:
- [ ] **useProjects() hook**:
  - Fetch all projects using TanStack Query
  - Returns: { projects, isLoading, error, refetch }
  - Cache strategy: 1 hour stale time
  - Error boundary integration
  - Test: Data loading, error states, refetch
  
- [ ] **useResume() hook**:
  - Fetch resume data using TanStack Query
  - Returns: { resume, isLoading, error }
  - Cache strategy: 24 hour stale time
  - Test: Data loading, error handling
  
- [ ] **useMediaQuery() hook**:
  - Respond to breakpoint changes (xs, sm, md, lg, xl)
  - Usage: Conditional rendering, layout adjustments
  - Returns: { isXs, isSm, isMd, isLg, isXl, width }
  - Test: Breakpoint triggering
  
- [ ] **useScrollPosition() hook** (optional/nice-to-have):
  - Track scroll position for animations/effects
  - Returns: { scrollY, scrollDirection }
  - Performance: Throttled event listener
  - Test: Scroll tracking accuracy

**Acceptance Criteria**:
- ✅ All hooks work correctly in components
- ✅ TanStack Query integration functional
- ✅ Error states handled
- ✅ Unit tests written (80% coverage)
- ✅ No memory leaks (cleanup functions)
- ✅ TypeScript types explicit (no `any`)

**Files Created**:
- src/hooks/useProjects.ts
- src/hooks/useResume.ts
- src/hooks/useMediaQuery.ts
- src/hooks/useScrollPosition.ts (optional)
- src/hooks/index.ts (exports)
- tests/unit/hooks/useProjects.test.ts
- tests/unit/hooks/useResume.test.ts
- tests/unit/hooks/useMediaQuery.test.ts

---

## Phase 2: Project Display Components

### 2.1 Create Project Grid & Card Components
**Priority**: 🔴 Critical  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 1.1, 1.2, 1.3, 1.4  
**Estimated**: 4-5 hours

**Description**: 
Build project display components for browsing portfolio.

**Checklist**:
- [ ] **ProjectCard.tsx**:
  - Display single project: image, title, company, brief, technologies
  - Props: project, onCardClick, showArtwork (optional), variant
  - Click handler: Navigate to project detail
  - Hover effects: Framer Motion animations
  - Responsive: Mobile-optimized image size
  - Test: Render, click event, props validation
  - Accessibility: Keyboard nav, alt text, ARIA labels
  
- [ ] **ProjectGrid.tsx**:
  - Display projects in responsive grid (1→2→3+ columns)
  - Props: projects[], onProjectClick, isLoading, error, filterTag (optional)
  - Loading state: Show spinner while fetching
  - Error state: Display error message + retry button
  - Empty state: "No projects found" message
  - Test: Grid layout, loading/error states
  - Accessibility: Grid semantics, keyboard navigation
  
- [ ] **ProjectTechnologies.tsx**:
  - Display technology tags for a project
  - Props: technologies[], variant ("inline" | "list" | "grid"), onClick (optional)
  - Click handler: Filter projects by selected technology
  - Visual style: Use Badge component
  - Test: Render tags, click handler
  - Accessibility: keyboard selectable

**Acceptance Criteria**:
- ✅ ProjectCard renders with all project data
- ✅ ProjectGrid displays projects in responsive columns
- ✅ Loading and error states display correctly
- ✅ Click handlers trigger navigation
- ✅ Animations are smooth (Framer Motion)
- ✅ Accessibility audit passes
- ✅ Unit tests written (80% coverage)
- ✅ Mobile responsive (1 column on mobile)

**Files Created**:
- src/components/projects/ProjectCard.tsx
- src/components/projects/ProjectGrid.tsx
- src/components/projects/ProjectTechnologies.tsx
- src/components/projects/index.ts
- tests/unit/components/projects/ProjectCard.test.tsx
- tests/unit/components/projects/ProjectGrid.test.tsx
- tests/unit/components/projects/ProjectTechnologies.test.tsx

---

### 2.2 Create Project Detail Components
**Priority**: 🔴 Critical  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 1.1, 1.2, 1.4, 2.1  
**Estimated**: 4-6 hours

**Description**: 
Build detailed project view components for single project page.

**Checklist**:
- [ ] **ProjectHeader.tsx**:
  - Display project name, company, artwork/image
  - Props: project, showArtwork (optional)
  - Image: Use ImageWithFallback
  - Responsive: Image size adapts to viewport
  - Test: Render with image/artwork, fallback
  - Accessibility: Image alt text, semantic HTML
  
- [ ] **ProjectLinks.tsx**:
  - Display external links (reference URL, demo URL)
  - Props: project
  - Links: Open in new tab
  - Buttons: MUI buttons with appropriate styling
  - Test: Links render, target="_blank" set
  - Accessibility: Proper link semantics
  
- [ ] **ProjectDescription.tsx**:
  - Display full project description
  - Props: description (string), formattedDescription (optional)
  - Support markdown (optional)
  - Test: Render long text, formatting
  - Accessibility: Semantic HTML, readable line length
  
- [ ] **RelatedProjects.tsx**:
  - Show 3-4 related projects based on technology
  - Props: project, allProjects
  - Click handler: Navigate to related project
  - Framer Motion animations
  - Test: Related project fetching, navigation
  - Accessibility: Keyboard nav

**Acceptance Criteria**:
- ✅ Project detail renders all components
- ✅ Images display with fallback strategy
- ✅ External links work and open in new tab
- ✅ Related projects display and link correctly
- ✅ Page is responsive (mobile/tablet/desktop)
- ✅ Accessibility audit passes
- ✅ Unit tests written (80% coverage)

**Files Created**:
- src/components/projects/ProjectHeader.tsx
- src/components/projects/ProjectLinks.tsx
- src/components/projects/ProjectDescription.tsx
- src/components/projects/RelatedProjects.tsx
- tests/unit/components/projects/ProjectHeader.test.tsx
- tests/unit/components/projects/ProjectLinks.test.tsx
- tests/unit/components/projects/ProjectDescription.test.tsx
- tests/unit/components/projects/RelatedProjects.test.tsx

---

## Phase 3: Resume Display Components

### 3.1 Create Resume Section Components
**Priority**: 🟠 High  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 1.1, 1.2, 1.4  
**Estimated**: 3-4 hours

**Description**: 
Build resume display components for About/Resume page.

**Checklist**:
- [ ] **ResumeSection.tsx**:
  - Main resume wrapper displaying all sections
  - Props: resume (data)
  - Sections: Professional summary, experience, education, skills
  - Layout: Single column or two-column (responsive)
  - Test: Render with complete resume data
  - Accessibility: Semantic HTML, proper heading hierarchy
  
- [ ] **ExperienceList.tsx**:
  - Display work experience timeline
  - Props: experiences (array)
  - Per-item: Company, title, dates, description, technologies
  - Visual: Timeline or list format
  - Test: Render multiple experiences, date formatting
  - Accessibility: List semantics, date clarity
  
- [ ] **EducationList.tsx**:
  - Display education entries
  - Props: education (array)
  - Per-item: Institution, degree, field, year
  - Visual: Clean list format
  - Test: Render multiple educations
  - Accessibility: List semantics
  
- [ ] **SkillsList.tsx**:
  - Display skills organized by category
  - Props: skills (array or map by category)
  - Variant: Inline tags, list, or category-grouped
  - Visual: Use Badge component for skills
  - Test: Render flat and grouped skills
  - Accessibility: Keyboard navigation through tags

**Acceptance Criteria**:
- ✅ All resume sections render correctly
- ✅ Data displays with proper formatting (dates, lists)
- ✅ Responsive layout on all devices
- ✅ Accessibility audit passes
- ✅ Unit tests written (80% coverage)
- ✅ Integration with useResume() hook working

**Files Created**:
- src/components/resume/ResumeSection.tsx
- src/components/resume/ExperienceList.tsx
- src/components/resume/EducationList.tsx
- src/components/resume/SkillsList.tsx
- src/components/resume/index.ts
- tests/unit/components/resume/ResumeSection.test.tsx
- tests/unit/components/resume/ExperienceList.test.tsx
- tests/unit/components/resume/EducationList.test.tsx
- tests/unit/components/resume/SkillsList.test.tsx

---

## Phase 4: Page Components & Routing

### 4.1 Create Page Components
**Priority**: 🔴 Critical  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 2.1, 2.2, 3.1  
**Estimated**: 4-5 hours

**Description**: 
Build top-level page components and routing structure.

**Checklist**:
- [ ] **HomePage.tsx**:
  - Landing page with hero section
  - Display featured/all projects grid
  - Call-to-action buttons (Browse, About, Contact)
  - Loading state while fetching projects
  - Error handling
  - Test: Render, project loading, CTA clicks
  - Accessibility: Semantic HTML, alt text
  - Performance: Optimized images, lazy loading
  
- [ ] **ProjectDetailPage.tsx**:
  - Route: /project/:id
  - Fetch and display single project details
  - Related projects section
  - Navigation: Back button, prev/next project
  - Error: 404 if project not found
  - Loading: Skeleton or spinner while fetching
  - Test: Route params, data loading, error handling
  - Accessibility: Focus management on load
  
- [ ] **ResumePage.tsx** (or AboutPage.tsx):
  - Route: /resume or /about
  - Display complete resume
  - Download button (generate PDF, if applicable)
  - Contact information
  - Test: Render resume data, layout
  - Accessibility: Proper heading hierarchy
  
- [ ] **NotFoundPage.tsx**:
  - 404 error page
  - Display not found message
  - Navigation: Link back to home
  - Test: Route to invalid URL, verify 404 display
  
- [ ] **App.tsx** (Routing):
  - Set up React Router v6
  - Routes: /, /project/:id, /about/resume, /404, *
  - Layout wrapper with Header/Navigation/Footer
  - TanStack Query provider
  - Error boundary provider
  - Framer Motion layout animations
  - Test: Route navigation, layout persistence

**Acceptance Criteria**:
- ✅ All pages render correctly
- ✅ Route navigation works
- ✅ URL parameters handled (project/:id)
- ✅ 404 page shows for invalid routes
- ✅ Loading and error states display
- ✅ Layout components persist across routes
- ✅ Page transitions animate smoothly
- ✅ Accessibility audit passes all pages
- ✅ Unit tests written (80% coverage)
- ✅ Integration tests for critical flows (US1-US3)

**Files Created**:
- src/pages/HomePage.tsx
- src/pages/ProjectDetailPage.tsx
- src/pages/ResumePage.tsx (or AboutPage.tsx)
- src/pages/NotFoundPage.tsx
- src/pages/index.ts (exports)
- src/App.tsx (updated with routing)
- tests/unit/pages/HomePage.test.tsx
- tests/unit/pages/ProjectDetailPage.test.tsx
- tests/unit/pages/ResumePage.test.tsx
- tests/integration/critical-flows.test.ts (US1-US3)

---

## Phase 5: Performance & Optimization

### 5.1 Performance Optimization
**Priority**: 🟠 High  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 4.1  
**Estimated**: 3-4 hours

**Description**: 
Optimize bundle size, render performance, and network requests.

**Checklist**:
- [ ] **Code splitting**:
  - Lazy load ProjectDetailPage (route-based)
  - React.lazy() + Suspense
  - Test: Verify separate chunk generated
  
- [ ] **Bundle analysis**:
  - Run `pnpm build --analyze`
  - Identify large dependencies
  - Optimize: Tree-shake unused code, dynamic imports
  - Target: <100KB gzipped bundle
  
- [ ] **Image optimization**:
  - Generate srcset for responsive images
  - Resize images for different devices (1x, 2x)
  - Format: WebP with fallback to JPEG
  - Lazy loading: Use IntersectionObserver
  - Test: Verify images load lazily
  
- [ ] **Render performance**:
  - Profile with React DevTools Profiler
  - Memoize expensive components (React.memo)
  - useMemo for expensive calculations
  - useCallback for stable function references
  - Test: Verify render times <16ms
  
- [ ] **Network optimization**:
  - Minify JSON data files
  - Gzip compression
  - HTTP caching headers
  - CDN deployment (optional)
  
- [ ] **Lighthouse audit**:
  - Target: 90+ score on all metrics
  - LCP (Largest Contentful Paint): <2.5s
  - FID (First Input Delay): <100ms
  - CLS (Cumulative Layout Shift): <0.1

**Acceptance Criteria**:
- ✅ Bundle size <100KB gzipped
- ✅ Lighthouse score >90 on all metrics
- ✅ Homepage loads <2s on 4G (p95)
- ✅ Images load <3s on 4G (p95)
- ✅ Render performance: 60fps (no jank)
- ✅ Performance metrics documented

**Files Modified**:
- src/App.tsx (route code splitting)
- vite.config.ts (build optimization)
- src/components/projects/ProjectCard.tsx (memoization)
- tests/integration/performance.test.ts (new)

---

### 5.2 Accessibility Compliance
**Priority**: 🟠 High  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 4.1  
**Estimated**: 2-3 hours

**Description**: 
Ensure WCAG 2.1 AA compliance across all pages.

**Checklist**:
- [ ] **Color contrast**:
  - Verify 4.5:1 ratio for text
  - Verify 3:1 ratio for graphics/borders
  - Test: Run Axe audit on all pages
  
- [ ] **Keyboard navigation**:
  - All interactive elements focusable
  - Tab order logical
  - Focus visible (keyboard indicator)
  - Escape key closes modals
  - Test: Navigate entire site with keyboard only
  
- [ ] **Screen reader testing**:
  - Semantic HTML (<nav>, <main>, <article>, etc.)
  - ARIA labels for icons/images
  - Form labels properly associated
  - Test: Test with screen reader (NVDA, JAWS, VoiceOver)
  
- [ ] **Alternative text**:
  - All images have alt text
  - Alt text descriptive, not redundant
  - Decorative images: alt=""
  
- [ ] **Heading hierarchy**:
  - h1, h2, h3 in logical order
  - No skipped levels (h1 → h3 bad)
  - Test: Verify outline/structure
  
- [ ] **Link text**:
  - Descriptive link text (not "click here")
  - Same text = same destination
  
- [ ] **Automated audit**:
  - Axe accessibility scanner in tests
  - Lighthouse accessibility audit
  - Tests must pass before merge

**Acceptance Criteria**:
- ✅ All pages pass Axe audit (0 violations)
- ✅ Keyboard navigation works (Tab through all controls)
- ✅ Screen reader testing passes (manual review)
- ✅ Color contrast 4.5:1 for text, 3:1 for graphics
- ✅ WCAG 2.1 AA compliance verified

**Files Modified**:
- All component files (accessibility fixes)
- tests/a11y/ (new accessibility tests)

---

## Phase 6: Testing & Documentation

### 6.1 Comprehensive Test Coverage
**Priority**: 🟠 High  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 5.1, 5.2  
**Estimated**: 4-5 hours

**Description**: 
Write tests to achieve 80% coverage and validate critical user flows.

**Checklist**:
- [ ] **Unit test coverage**:
  - Target: 80% coverage across all components
  - Coverage report: `pnpm test:coverage`
  - Files: All components, hooks, services
  - Scenarios: Happy path, error states, edge cases
  
- [ ] **Integration tests** (critical flows):
  - US1: Browse Portfolio - Load home, scroll projects, click project
  - US2: Project Details - View full project info, related projects
  - US3: Resume Access - View resume, navigate sections
  - Test with Playwright
  
- [ ] **E2E tests**:
  - Full user journey tests
  - Cross-browser (Chromium, Firefox, WebKit)
  - Screenshots on failure
  - Video recording (optional)
  
- [ ] **Test documentation**:
  - How to run tests locally
  - How to write new tests
  - CI/CD test pipeline
  - Coverage requirements

**Acceptance Criteria**:
- ✅ Overall test coverage >80%
- ✅ All critical user flows (US1-US3) tested
- ✅ Unit tests: Happy path + error scenarios
- ✅ Integration tests: Real component interactions
- ✅ E2E tests: Cross-browser validated
- ✅ CI/CD pipeline: Tests run on every push

**Files Created**:
- Complete test suite for all components
- docs/TESTING.md (test documentation)

---

### 6.2 Project Documentation
**Priority**: 🟠 High  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 4.1  
**Estimated**: 2-3 hours

**Description**: 
Write developer documentation and deployment guides.

**Checklist**:
- [ ] **README.md**:
  - Project description
  - Feature overview
  - Tech stack
  - Quick start (pnpm install, pnpm dev)
  - Deployment instructions
  - Contributing guide
  - License
  
- [ ] **ARCHITECTURE.md**:
  - Component architecture diagram
  - Data flow diagram
  - Routing structure
  - State management approach
  - Performance considerations
  
- [ ] **API Documentation**:
  - Data structures (Project, Resume, etc.)
  - Service functions
  - Hook API
  - Example usage
  
- [ ] **Deployment Guide**:
  - Build process (pnpm build)
  - Deployment targets (Vercel, Netlify, GitHub Pages)
  - Environment variables
  - Pre-deployment checklist
  
- [ ] **Maintenance Guide**:
  - How to add new projects
  - How to update resume
  - How to manage images/artwork
  - Update dependencies safely

**Acceptance Criteria**:
- ✅ README.md complete and up-to-date
- ✅ ARCHITECTURE.md documents system design
- ✅ API documentation clear with examples
- ✅ Deployment guide step-by-step
- ✅ Maintenance guide for future updates

**Files Created**:
- README.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/DEPLOYMENT.md
- docs/MAINTENANCE.md

---

### 6.3 Final QA & Deployment
**Priority**: 🟠 High  
**Status**: TODO  
**Owner**: [ASSIGN]  
**Dependency**: 6.1, 6.2  
**Estimated**: 2-3 hours

**Description**: 
Final quality assurance, code review, and deployment to production.

**Checklist**:
- [ ] **Code review**:
  - All PRs reviewed and approved
  - No console errors/warnings
  - No TypeScript errors
  - ESLint passes
  - Tests passing
  
- [ ] **Manual QA**:
  - Test on real devices (mobile, tablet, desktop)
  - Test on different browsers (Chrome, Firefox, Safari)
  - Test keyboard navigation
  - Test with screen reader
  - Test with VPN/different networks
  
- [ ] **Performance validation**:
  - Lighthouse score >90
  - Homepage <2s (4G p95)
  - Images <3s (4G p95)
  - Bundle size <100KB gzipped
  
- [ ] **Deployment**:
  - Build production bundle
  - Deploy to production environment
  - Verify deployed site
  - Monitor for errors (Sentry, etc.)
  
- [ ] **Post-deployment**:
  - Monitor performance metrics
  - Collect user feedback
  - Plan Phase 3 features (AI artwork, filtering)

**Acceptance Criteria**:
- ✅ All code reviewed and approved
- ✅ No critical bugs or console errors
- ✅ Performance targets met
- ✅ Deployed to production successfully
- ✅ Live site verified and accessible

**Files Created**:
- .github/workflows/deploy.yml (deployment automation)
- docs/DEPLOYMENT-CHECKLIST.md

---

## Task Summary by User Story

### User Story 1: Browse Portfolio Projects
**Tasks**: 2.1, 2.2, 4.1, 5.1  
**Estimated Duration**: 5-6 days  
**Acceptance**: User can view portfolio projects in grid, filter by tech, click to view details

### User Story 2: View Project Details
**Tasks**: 2.2, 4.1, 5.1  
**Estimated Duration**: 3-4 days  
**Acceptance**: User can view full project info, related projects, external links

### User Story 3: Access Resume
**Tasks**: 3.1, 4.1, 5.2  
**Estimated Duration**: 2-3 days  
**Acceptance**: User can view work experience, education, skills

### User Story 4: AI Artwork Display (Post-MVP)
**Tasks**: 2.1 (extend), 2.2, 5.1  
**Estimated Duration**: 1-2 days  
**Acceptance**: User can see AI-generated artwork on project cards/details

### User Story 5: Filter Projects by Technology (Post-MVP)
**Tasks**: 2.1 (extend), 4.1 (extend)  
**Estimated Duration**: 1-2 days  
**Acceptance**: User can filter projects by selected technology

---

## Critical Path Analysis

**MVP Critical Path** (must complete in order):
1. Phase 0 (Setup) → 2 days
2. Phase 1 (Foundation) → 4 days
3. Phase 2 (Projects UI) → 3 days
4. Phase 3 (Resume UI) → 2 days
5. Phase 4 (Pages/Routing) → 2 days
6. Phase 5 (Performance/A11y) → 2 days
7. Phase 6 (QA/Deploy) → 1 day

**Total MVP Duration**: ~10-14 days (depends on team size/parallelization)

**Optional/Post-MVP**:
- Phase 4 features (AI artwork, filtering) → 2-3 days
- Advanced animations, dark mode, blog → Post-launch

---

## Next Steps

1. **Assign tasks** to team members (fill [ASSIGN] slots)
2. **Estimate refined timelines** based on team capacity
3. **Begin Phase 0** (Setup & Infrastructure)
4. **Track progress** using this document + GitHub issues
5. **Update status** as tasks complete (TODO → IN-PROGRESS → REVIEW → DONE)

---

**Document Maintenance**:
- Update statuses weekly
- Add blockers/risks in comments
- Sync with sprint planning
- Archive completed phases after review

**Questions?** Refer to:
- [spec.md](./spec.md) - Feature requirements
- [plan.md](./plan.md) - Implementation strategy
- [data-model.md](./data-model.md) - Data structures
- [contracts/components.md](./contracts/components.md) - Component specs
- [quickstart.md](./quickstart.md) - Developer setup
