# Component Contracts & API Schemas: Portfolio Project Website

**Feature**: Portfolio Project Website (001)  
**Phase**: 1 Design & Contracts  
**Created**: 2025-12-04

## Component Architecture Overview

```
App (root)
├── Layout
│   ├── Header
│   ├── Navigation
│   ├── Main Content (route-based)
│   └── Footer
│
├── Pages (Route-based)
│   ├── HomePage
│   │   └── ProjectGrid
│   │       └── ProjectCard (x4)
│   ├── ProjectDetailPage (lazy-loaded)
│   │   ├── ProjectHeader
│   │   ├── ProjectDetail
│   │   ├── ProjectTechnologies
│   │   └── ProjectLinks
│   ├── AboutPage
│   │   └── ResumeSection
│   │       ├── ProfileSection
│   │       ├── ExperienceList
│   │       ├── EducationList
│   │       └── SkillsList
│   └── NotFoundPage
│
└── Common Components
    ├── ImageWithFallback
    ├── ErrorBoundary
    ├── LoadingSpinner
    ├── ErrorMessage
    ├── Badge
    └── ExternalLink
```

---

## Layout & Navigation Components

### Header Component

```typescript
// components/layout/Header.tsx

interface HeaderProps {
  title?: string;                // Optional custom title
  subtitle?: string;             // Optional subtitle
}

export const Header: React.FC<HeaderProps> = ({ 
  title = "Portfolio",
  subtitle = "Professional Projects & Experience"
}) => {
  // Renders: Logo, title, subtitle
  // Accessible: Semantic <header>, heading hierarchy
}
```

**Responsibilities**:
- Display portfolio title and subtitle
- Visual branding/logo area
- Sticky positioning (stays visible on scroll)

**Accessibility**:
- `<header>` semantic element
- Proper heading hierarchy (h1 for main title)
- High contrast title text (4.5:1 minimum)

---

### Navigation Component

```typescript
// components/layout/Navigation.tsx

interface NavigationLink {
  label: string;
  href: string;                  // Route path or external URL
  isExternal?: boolean;
}

interface NavigationProps {
  links?: NavigationLink[];      // Custom links (default: Portfolio, About)
}

export const Navigation: React.FC<NavigationProps> = ({ 
  links = [
    { label: "Portfolio", href: "/" },
    { label: "About", href: "/about" }
  ]
}) => {
  // Renders: Navigation menu
  // Mobile: Hamburger menu (MUI AppBar)
  // Desktop: Horizontal menu
}
```

**Responsibilities**:
- Provide navigation between pages (Home, Projects, About)
- Responsive design (hamburger on mobile)
- Active link highlighting

**Accessibility**:
- `<nav>` semantic element
- Keyboard navigation (Tab through links)
- ARIA labels for mobile menu button
- Proper link semantics

---

### Footer Component

```typescript
// components/layout/Footer.tsx

interface FooterProps {
  showSocialLinks?: boolean;
  contactEmail?: string;
}

export const Footer: React.FC<FooterProps> = ({ 
  showSocialLinks = true,
  contactEmail = "diogovvb@gmail.com"
}) => {
  // Renders: Copyright, social links, contact info
}
```

**Responsibilities**:
- Display footer with copyright info
- Social media links (GitHub, LinkedIn)
- Optional contact info

---

### Layout Component

```typescript
// components/layout/Layout.tsx

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children,
  showHeader = true,
  showFooter = true
}) => {
  // Renders: Header + Navigation + Main Content + Footer
  // Provides consistent page structure
}
```

**Responsibilities**:
- Wrap page content with consistent layout
- Handle header/navigation/footer display
- Manage layout spacing and styling

---

## Project Display Components

### ProjectCard Component

```typescript
// components/projects/ProjectCard.tsx

interface ProjectCardProps {
  project: Project;              // Project data
  onCardClick: (projectId: string) => void;  // Click handler
  showArtwork?: boolean;         // Display AI artwork (default: true)
  variant?: "compact" | "full";  // Card layout variant (default: "full")
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project,
  onCardClick,
  showArtwork = true,
  variant = "full"
}) => {
  // Renders: MUI Card with project info
  // Layout:
  //   - Top: Project image or artwork (if available)
  //   - Middle: Project name, company, brief description
  //   - Bottom: Technology badges, CTA button
  //
  // Interactions: Click card to navigate to detail page
}
```

**Props Contract**:
- `project`: Required, validated Project object
- `onCardClick`: Required callback; called with project.id
- `showArtwork`: Optional boolean; displays ProjectArtwork if available
- `variant`: Optional "compact" (smaller card) or "full" (default)

**Responsibilities**:
- Display project summary in card format
- Show project image (with fallback to artwork or placeholder)
- Show technology badges
- Navigate to detail page on click

**Accessibility**:
- Card clickable via keyboard (Enter key)
- ARIA role="button" or semantic <button>
- Image alt text from project.name
- High contrast badges (MUI theme default)

**Testing**:
- Render with mock project data ✓
- Click handler called with correct project.id ✓
- Display/hide artwork based on prop ✓
- Keyboard navigation (Enter, Space) ✓
- Accessibility audit (axe) ✓

---

### ProjectGrid Component

```typescript
// components/projects/ProjectGrid.tsx

interface ProjectGridProps {
  projects: Project[];           // Array of projects
  onProjectSelect: (projectId: string) => void;
  isLoading?: boolean;
  filterTechs?: string[];        // Filtered technologies (optional)
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  projects,
  onProjectSelect,
  isLoading = false,
  filterTechs = []
}) => {
  // Renders: Grid of ProjectCards
  // Layout: Responsive grid (1 col mobile, 2 col tablet, 3+ col desktop)
  // Filtering: Show only projects matching filterTechs (if provided)
  // Loading: Show skeleton loaders while data loads
}
```

**Props Contract**:
- `projects`: Required array of Project objects
- `onProjectSelect`: Required callback for project selection
- `isLoading`: Optional boolean; shows skeleton when true
- `filterTechs`: Optional array of technology filters

**Responsibilities**:
- Display projects in responsive grid layout
- Handle filtering by technology
- Show loading state during data fetch
- Pass click events to parent

**Accessibility**:
- Semantic `<section>` or `<div role="region">`
- Proper heading for grid ("Our Projects" or similar)
- Skip link to project grid from navigation

---

### ProjectDetail Component

```typescript
// components/projects/ProjectDetail.tsx

interface ProjectDetailProps {
  project: Project;
  onBack?: () => void;           // Back button callback
  relatedProjects?: Project[];   // Other projects (for "See Also")
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ 
  project,
  onBack,
  relatedProjects = []
}) => {
  // Renders: Full project details
  // Layout:
  //   - Top: Project artwork (large) or image
  //   - Section: Project name, company, description
  //   - Section: Technologies used
  //   - Section: External links (reference, demo)
  //   - Section: Related projects or navigation
}
```

**Props Contract**:
- `project`: Required Project object
- `onBack`: Optional back button callback
- `relatedProjects`: Optional array of related projects

**Responsibilities**:
- Display complete project information
- Show project artwork/image prominently
- List technologies with descriptions
- Provide external links
- Show related projects

---

### ProjectHeader Component

```typescript
// components/projects/ProjectHeader.tsx

interface ProjectHeaderProps {
  project: Project;
  showArtwork?: boolean;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ 
  project,
  showArtwork = true
}) => {
  // Renders: Project name, company, artwork/image
  // Image: Full-width responsive image
  // Fallback: ImageWithFallback component
}
```

---

### ProjectTechnologies Component

```typescript
// components/projects/ProjectTechnologies.tsx

interface ProjectTechnologiesProps {
  technologies: string[];
  onTechClick?: (tech: string) => void;  // Filter by tech
  variant?: "inline" | "list" | "grid";  // Display variant
}

export const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({ 
  technologies,
  onTechClick,
  variant = "inline"
}) => {
  // Renders: Technology badges
  // Variants:
  //   - "inline": Horizontal badges (ProjectCard)
  //   - "list": Vertical list (ProjectDetail)
  //   - "grid": 2-column grid
}
```

**Responsibilities**:
- Display project technologies as badges
- Optional click handler for filtering
- Responsive layout

---

### ProjectLinks Component

```typescript
// components/projects/ProjectLinks.tsx

interface ProjectLink {
  label: string;
  url: string;
  icon?: string;                 // Icon name (e.g., "open", "play")
}

interface ProjectLinksProps {
  referenceUrl?: string;         // HMH reference URL
  demoUrl?: string;              // Demo URL
  onLinkClick?: (url: string) => void;
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ 
  referenceUrl,
  demoUrl,
  onLinkClick
}) => {
  // Renders: External links as buttons
  // Links: Reference (opens in new tab), Demo (opens in new tab)
  // Icons: MUI icons (OpenInNew, PlayArrow)
}
```

**Responsibilities**:
- Display external links as MUI buttons
- Open links in new tab
- Handle link click events
- Show appropriate icons

---

## Resume Components

### ResumeSection Component

```typescript
// components/resume/ResumeSection.tsx

interface ResumeSectionProps {
  resume: Resume;
  onDownload?: () => void;       // Download resume button
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ 
  resume,
  onDownload
}) => {
  // Renders: Complete resume section
  // Layout: Profile → Experience → Education → Skills
  // Features: Download button, professional styling
}
```

**Responsibilities**:
- Display complete professional resume
- Organize resume into sections
- Provide download link (if available)

---

### ExperienceList Component

```typescript
// components/resume/ExperienceList.tsx

interface ExperienceListProps {
  experiences: Experience[];
  highlightTechs?: string[];    // Highlight matching technologies
}

export const ExperienceList: React.FC<ExperienceListProps> = ({ 
  experiences,
  highlightTechs = []
}) => {
  // Renders: Timeline of work experiences
  // Each item: Company, title, dates, description, technologies
  // Highlight: If highlightTechs provided, highlight matching techs
}
```

---

### EducationList Component

```typescript
// components/resume/EducationList.tsx

interface EducationListProps {
  education: Education[];
}

export const EducationList: React.FC<EducationListProps> = ({ 
  education
}) => {
  // Renders: List of education entries
  // Each item: Institution, degree, field, year, notes
}
```

---

### SkillsList Component

```typescript
// components/resume/SkillsList.tsx

interface SkillsListProps {
  skills: string[];
  variant?: "inline" | "list" | "category";
  categorizeBy?: (skill: string) => string;  // Optional categorization function
}

export const SkillsList: React.FC<SkillsListProps> = ({ 
  skills,
  variant = "inline",
  categorizeBy
}) => {
  // Renders: Technical skills
  // Variants:
  //   - "inline": Horizontal tags
  //   - "list": Vertical list
  //   - "category": Grouped by category (Frontend, Backend, DevOps, etc.)
}
```

---

## Common Utility Components

### ImageWithFallback Component

```typescript
// components/common/ImageWithFallback.tsx

interface ImageWithFallbackProps {
  src: string;                   // Image URL or path
  alt: string;                   // Alt text (required for a11y)
  fallbackSrc?: string;          // Fallback image URL
  onError?: () => void;          // Error callback
  onLoad?: () => void;           // Load callback
  responsive?: boolean;          // Use responsive sizing (default: true)
  width?: number;
  height?: number;
  objectFit?: "cover" | "contain" | "fill";  // CSS object-fit
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src,
  alt,
  fallbackSrc,
  onError,
  onLoad,
  responsive = true,
  width,
  height,
  objectFit = "cover"
}) => {
  // Renders: <img> with fallback strategy
  // Behavior:
  //   1. Load primary image (src)
  //   2. If error: Try fallback image (fallbackSrc)
  //   3. If all fail: Show placeholder + error message
  //
  // Responsive: Use srcset for different breakpoints
  // Performance: Lazy loading, progressive enhancement
}
```

**Responsibilities**:
- Display image with error handling
- Implement fallback strategy (fallback image → text)
- Support responsive sizing
- Track load/error events

**Accessibility**:
- Required `alt` prop (enforced by TypeScript)
- Semantic `<img>` element
- Fallback text for missing images

---

### ErrorBoundary Component

```typescript
// components/common/ErrorBoundary.tsx

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;    // Custom error UI
  onError?: (error: Error) => void;
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ 
  children,
  fallback,
  onError
}) => {
  // Renders: Children, or error UI if error occurs
  // Error handling: Catch render errors, log to console, show fallback UI
  // Recovery: Provide "Try Again" button to reload component
}
```

**Responsibilities**:
- Catch and handle React render errors
- Display error message to user
- Prevent white-screen crashes
- Log errors for debugging

---

### LoadingSpinner Component

```typescript
// components/common/LoadingSpinner.tsx

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";  // Spinner size (default: "medium")
  message?: string;              // Optional loading message
  fullScreen?: boolean;          // Center on full screen (default: false)
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = "medium",
  message,
  fullScreen = false
}) => {
  // Renders: MUI CircularProgress spinner + optional message
  // Sizes: "small" (24px), "medium" (40px), "large" (60px)
}
```

---

### ErrorMessage Component

```typescript
// components/common/ErrorMessage.tsx

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;          // Retry button callback
  severity?: "error" | "warning" | "info";  // MUI severity
  fullScreen?: boolean;          // Center on full screen
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message,
  onRetry,
  severity = "error",
  fullScreen = false
}) => {
  // Renders: MUI Alert with error message
  // Optional retry button for error recovery
}
```

**Responsibilities**:
- Display user-friendly error messages
- Provide retry mechanism
- Show appropriate severity level

---

### Badge Component

```typescript
// components/common/Badge.tsx

interface BadgeProps {
  label: string;
  variant?: "filled" | "outlined" | "tonal";  // MUI chip variant
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  onDelete?: () => void;         // Delete button callback
  icon?: React.ReactNode;        // Optional leading icon
}

export const Badge: React.FC<BadgeProps> = ({ 
  label,
  variant = "filled",
  color = "primary",
  onDelete,
  icon
}) => {
  // Renders: MUI Chip for badges/tags
  // Used for: Technology tags, skill categories
}
```

---

## Page Components

### HomePage

```typescript
// pages/HomePage.tsx

export const HomePage: React.FC = () => {
  // Renders: Portfolio homepage
  // Sections:
  //   1. Hero: Title, subtitle, CTA
  //   2. Projects: ProjectGrid with all 4 projects
  //   3. Call-to-action: Link to resume
  //   4. Filtering: Technology filter buttons (US5)
  //
  // Data: Fetch projects.json
  // Navigation: Click project → ProjectDetailPage
}
```

---

### ProjectDetailPage

```typescript
// pages/ProjectDetailPage.tsx

interface ProjectDetailPageParams {
  projectId: string;             // From URL params
}

export const ProjectDetailPage: React.FC = () => {
  // Renders: Project details page
  // Data: Fetch single project from projects.json by projectId (from URL)
  // Error: Show 404 if project not found
  // Navigation: Back button → HomePage
}
```

**Route**: `/projects/:projectId`  
**Lazy Loading**: Route-based code splitting (load only when accessed)

---

### AboutPage

```typescript
// pages/AboutPage.tsx

export const AboutPage: React.FC = () => {
  // Renders: Resume and professional information
  // Data: Fetch resume.json
  // Sections: Profile, experience, education, skills
  // Download: Optional resume PDF download
}
```

**Route**: `/about`

---

### NotFoundPage

```typescript
// pages/NotFoundPage.tsx

export const NotFoundPage: React.FC = () => {
  // Renders: 404 error page
  // CTA: Link back to homepage
}
```

**Route**: `*` (catch-all for undefined routes)

---

## Data Service Contracts

### projectService.ts

```typescript
// services/projectService.ts

interface ProjectService {
  // Fetch all projects
  getProjects(): Promise<Project[]>;
  
  // Fetch single project by ID
  getProjectById(id: string): Promise<Project | null>;
  
  // Search projects by technology
  getProjectsByTechnology(tech: string): Promise<Project[]>;
  
  // Get related projects (same company or similar tech)
  getRelatedProjects(projectId: string, limit?: number): Promise<Project[]>;
}

export const projectService: ProjectService = {
  async getProjects() {
    // Load src/data/projects.json
    // Validate against Project schema
    // Return sorted by order field
  },
  
  async getProjectById(id: string) {
    // Find project by id
    // Return null if not found
  },
  
  async getProjectsByTechnology(tech: string) {
    // Filter projects with matching technology
    // Case-insensitive match
  },
  
  async getRelatedProjects(projectId: string, limit = 3) {
    // Get other projects from same company
    // Or: get projects with overlapping technologies
    // Exclude self (current project)
    // Limit to N results
  }
};
```

---

### resumeService.ts

```typescript
// services/resumeService.ts

interface ResumeService {
  // Fetch complete resume
  getResume(): Promise<Resume>;
  
  // Get experiences in reverse chronological order
  getExperiences(): Promise<Experience[]>;
  
  // Get education entries
  getEducation(): Promise<Education[]>;
  
  // Get skills, optionally grouped by category
  getSkills(grouped?: boolean): Promise<string[] | Record<string, string[]>>;
}

export const resumeService: ResumeService = {
  async getResume() {
    // Load src/data/resume.json
    // Validate against Resume schema
    // Return complete resume object
  },
  
  async getExperiences() {
    // Load resume
    // Sort by endDate descending (most recent first)
  },
  
  async getEducation() {
    // Load resume
    // Sort by year descending
  },
  
  async getSkills(grouped = false) {
    // Load resume
    // If grouped=true: Group skills by category (Frontend, Backend, etc.)
    // Return array or object
  }
};
```

---

## Custom Hooks Contracts

### useProjects Hook

```typescript
// hooks/useProjects.ts

interface UseProjectsReturn {
  projects: Project[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useProjects(): UseProjectsReturn {
  // Fetch projects.json using TanStack Query
  // Return: projects[], loading state, error, refetch function
  // Cache: Stale-time 1 hour (projects rarely change)
  // Error: Log to console, provide fallback empty array
}
```

---

### useResume Hook

```typescript
// hooks/useResume.ts

interface UseResumeReturn {
  resume: Resume | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useResume(): UseResumeReturn {
  // Fetch resume.json using TanStack Query
  // Similar to useProjects
}
```

---

## API & External Contracts

### External Link Handling

```typescript
// utils/externalLinks.ts

interface ExternalLink {
  url: string;
  label: string;
  icon?: string;
  openInNewTab?: boolean;        // default: true
}

export function openLink(url: string): void {
  // Open URL in new tab
  // Handle errors gracefully (show error message)
}

export function validateUrl(url: string): boolean {
  // Validate URL format
  // Return true if valid, false otherwise
}
```

---

## TypeScript Types

### types/project.ts

```typescript
export interface Project {
  id: string;
  name: string;
  company: string;
  brief: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  referenceUrl?: string;
  demoUrl?: string;
  artwork?: string;
  order?: number;
}
```

### types/resume.ts

```typescript
export interface Resume {
  profile: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  contact: Contact;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  year: string;
  notes?: string;
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
}
```

---

## Component Testing Contracts

All components must satisfy these test requirements:

```typescript
// Example: ProjectCard.test.tsx

describe("ProjectCard", () => {
  it("renders project title, brief, and technologies", () => {
    // Render with mock project
    // Assert: title visible, brief visible, all techs visible
  });

  it("calls onCardClick when clicked", () => {
    // Render with mock callback
    // Click card
    // Assert: callback called with project.id
  });

  it("displays artwork if showArtwork=true and artwork available", () => {
    // Render with artwork URL
    // Assert: artwork image rendered
  });

  it("falls back to project image if artwork unavailable", () => {
    // Render without artwork
    // Assert: project image rendered
  });

  it("is keyboard accessible (Enter/Space to activate)", () => {
    // Render component
    // Focus element
    // Press Enter key
    // Assert: callback called (or navigation triggered)
  });

  it("passes accessibility audit (axe)", () => {
    // Render component
    // Run axe-core accessibility scanner
    // Assert: zero violations
  });
});
```

---

## Performance & Accessibility Checklist

All components must meet these requirements:

✅ **Performance**:
- Component render time <16ms (60fps)
- No unnecessary re-renders (use React.memo, useMemo, useCallback)
- Images optimized (srcset, lazy loading)

✅ **Accessibility** (WCAG 2.1 AA):
- Semantic HTML (headings, buttons, links, images)
- Keyboard navigation (Tab, Enter, Escape)
- ARIA labels and roles where necessary
- Color contrast ≥4.5:1 for normal text, ≥3:1 for large text
- Alt text for all images
- Focus visible indicator
- No color alone to convey information

✅ **Code Quality**:
- TypeScript strict mode (no `any` types)
- JSDoc comments on public props/functions
- No ESLint warnings
- 80%+ test coverage for unit tests

---

**Status**: ✅ COMPONENT CONTRACTS COMPLETE  
**Next Phase**: Quickstart guide for developer onboarding
