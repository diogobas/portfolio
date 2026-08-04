# Quickstart Guide: Portfolio Project Website

**Feature**: Portfolio Project Website (001)  
**Phase**: 1 Design & Contracts  
**Created**: 2025-12-04

## Overview

This guide helps new developers get up and running with the portfolio website project. You'll set up the development environment, understand the project structure, and be ready to implement features.

## Prerequisites

- Node.js 18+ (LTS) and pnpm 8+ (or npm/yarn)
- Git
- Basic React knowledge
- TypeScript familiarity
- VS Code (recommended)

## Setup Instructions

### 1. Clone & Install

```bash
# Clone the repository (if not already done)
git clone <repo-url>
cd portfolio

# Install dependencies using pnpm (faster than npm)
pnpm install

# Verify installation
pnpm --version  # Should be 8.0+
node --version  # Should be 18+
```

### 2. Verify Development Setup

```bash
# Type-check the project
pnpm typecheck

# Lint the code
pnpm lint

# Run unit tests
pnpm test

# Start dev server
pnpm dev
# Open http://localhost:5173 in your browser
```

### 3. Understand Project Structure

```
src/
├── components/           # React components (organized by feature)
│   ├── layout/          # Header, Navigation, Footer
│   ├── projects/        # Project display components
│   ├── resume/          # Resume section components
│   └── common/          # Reusable utility components
├── pages/               # Page components (route destinations)
├── data/                # Static JSON data (projects.json, resume.json)
├── hooks/               # Custom React hooks
├── services/            # Business logic services
├── types/               # TypeScript interfaces
├── theme/               # Material-UI theme
├── utils/               # Utility functions
├── App.tsx              # Root component + routing
└── index.tsx            # React entry point

tests/
├── unit/                # Jest unit tests
├── integration/         # Playwright integration tests
└── fixtures/            # Mock data for testing

public/
├── project-images/      # Downloaded project images
└── project-artwork/     # AI-generated artwork
```

### 4. Environment Configuration

Create `.env.local` (optional, for overriding defaults):

```env
VITE_API_URL=http://localhost:3000
VITE_IMAGE_OPTIMIZATION=true
VITE_LOG_LEVEL=debug
```

## Development Workflow

### Running the Dev Server

```bash
pnpm dev
```

Features:

- Hot Module Replacement (HMR) - changes auto-reload
- Fast refresh - component state preserved
- Vite dev server (fast startup ~300ms)

### Writing Code

#### Component Example: ProjectCard.tsx

```typescript
// src/components/projects/ProjectCard.tsx
import React from "react";
import { Card, CardContent, CardMedia, Box, Chip } from "@mui/material";
import { Project } from "../../types/project";
import { ImageWithFallback } from "../common/ImageWithFallback";

interface ProjectCardProps {
  project: Project;
  onCardClick: (projectId: string) => void;
}

/**
 * ProjectCard - Displays a single project in card format
 *
 * @param project - Project data to display
 * @param onCardClick - Callback when card is clicked
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onCardClick
}) => {
  return (
    <Card
      onClick={() => onCardClick(project.id)}
      sx={{ cursor: "pointer" }}
    >
      <CardMedia>
        <ImageWithFallback
          src={project.imageUrl}
          alt={project.name}
          width={300}
          height={200}
        />
      </CardMedia>
      <CardContent>
        <h3>{project.name}</h3>
        <p>{project.company}</p>
        <p>{project.brief}</p>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {project.technologies.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
```

**Key Points**:

- Use TypeScript interfaces for props (type safety)
- Add JSDoc comments above component
- Use Material-UI components for consistency
- Use semantic HTML where possible

#### Hook Example: useProjects.ts

```typescript
// src/hooks/useProjects.ts
import { useQuery } from '@tanstack/react-query';
import { Project } from '../types/project';
import { projectService } from '../services/projectService';

interface UseProjectsReturn {
  projects: Project[];
  isLoading: boolean;
  error: Error | null;
}

export function useProjects(): UseProjectsReturn {
  const { data, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: () => projectService.getProjects(),
    staleTime: 60 * 60 * 1000, // 1 hour
  });

  return {
    projects: data || [],
    isLoading,
    error: error instanceof Error ? error : null,
  };
}
```

#### Test Example: ProjectCard.test.tsx

```typescript
// tests/unit/components/ProjectCard.test.tsx
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "../../../src/components/projects/ProjectCard";
import { Project } from "../../../src/types/project";

const mockProject: Project = {
  id: "test-project",
  name: "Test Project",
  company: "Test Company",
  brief: "Test brief",
  description: "Test description",
  technologies: ["React", "TypeScript"],
  imageUrl: "test-image.jpg",
};

describe("ProjectCard", () => {
  it("renders project title and brief", () => {
    render(
      <ProjectCard
        project={mockProject}
        onCardClick={jest.fn()}
      />
    );

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("Test brief")).toBeInTheDocument();
  });

  it("calls onCardClick when clicked", () => {
    const onCardClick = jest.fn();
    render(
      <ProjectCard
        project={mockProject}
        onCardClick={onCardClick}
      />
    );

    screen.getByText("Test Project").click();
    expect(onCardClick).toHaveBeenCalledWith("test-project");
  });
});
```

### Common Tasks

#### Add a New Component

1. Create file: `src/components/[feature]/[ComponentName].tsx`
2. Define TypeScript interface for props
3. Add JSDoc comments
4. Implement component logic
5. Export component from `src/components/index.ts`
6. Write tests in `tests/unit/components/[ComponentName].test.tsx`
7. Test: `pnpm test [ComponentName]`

#### Add a New Page

1. Create file: `src/pages/[PageName].tsx`
2. Implement page component
3. Add route in `src/App.tsx`
4. Test: Navigate to route in dev server

#### Add a New Type

1. Create/edit file in `src/types/`
2. Export interface/type
3. Import in components that use it
4. Validation: `pnpm typecheck`

#### Update Static Data

1. Edit `src/data/projects.json` or `src/data/resume.json`
2. Validate JSON format
3. Verify TypeScript types match
4. Test in dev server: `pnpm dev`

## Testing

### Unit Tests (Jest + React Testing Library)

```bash
# Run all tests
pnpm test

# Run tests in watch mode (recommended during development)
pnpm test:watch

# Run tests for specific file
pnpm test ProjectCard

# View coverage
pnpm test:coverage
```

**Test File Location**: `tests/unit/[feature]/[component].test.tsx`

**Test Structure**:

```typescript
describe("ComponentName", () => {
  it("should do something specific", () => {
    // Arrange: Set up test data
    const mockData = { /* ... */ };

    // Act: Perform action
    render(<Component data={mockData} />);

    // Assert: Verify result
    expect(screen.getByText("expected text")).toBeInTheDocument();
  });
});
```

### Integration Tests (Playwright)

```bash
# Run integration tests
pnpm test:integration

# Run in debug mode
pnpm test:integration --debug

# Run specific test
pnpm test:integration us1-browse-projects
```

### E2E Tests

```bash
# Run E2E tests
pnpm test:e2e

# Run in UI mode (interactive)
pnpm test:e2e --ui

# View test results
pnpm test:e2e --reporter html
```

### Accessibility Testing

```bash
# Run accessibility audit on components
pnpm test:a11y

# Manual testing with browser dev tools:
# 1. Install axe DevTools extension
# 2. Use DevTools → Accessibility → Scan
# 3. Test with screen reader:
#    - Windows: NVDA (free)
#    - Mac: VoiceOver (built-in)
#    - Linux: ORCA (free)
```

## Code Style & Standards

### TypeScript Strict Mode

All code must pass TypeScript strict mode:

```bash
pnpm typecheck
```

**Rules**:

- No `any` types (use `unknown` if necessary, then narrow type)
- All function parameters must be typed
- All function return types should be explicit
- `strictNullChecks` enabled (handle null/undefined)

### ESLint & Prettier

Code formatting and linting:

```bash
# Run linter
pnpm lint

# Auto-fix linting issues
pnpm lint:fix

# Format code with Prettier
pnpm format

# Format on save (VS Code): Install Prettier extension + set as default formatter
```

### Component Naming & Organization

```
Component Files:
- PascalCase for component names (ProjectCard.tsx)
- Functional components (arrow function recommended)
- Export at bottom: `export const ProjectCard = ...`

Props Interfaces:
- PascalCase + "Props" suffix (ProjectCardProps)
- Define above component
- Use `React.FC<Props>` type annotation

File Organization:
- Group by feature: components/projects/, components/resume/, etc.
- Export from feature folder: components/projects/index.ts
- Main export: src/components/index.ts
```

### JSDoc Comments

All public functions and components must have JSDoc:

```typescript
/**
 * ProjectCard - Displays a project in card format
 *
 * @param project - Project data to display
 * @param onCardClick - Callback when card is clicked
 * @returns React component displaying project card
 *
 * @example
 * <ProjectCard
 *   project={myProject}
 *   onCardClick={(id) => console.log(id)}
 * />
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onCardClick }) => {
  // ...
};
```

## Git Workflow

### Branch Naming

```bash
# Create feature branch from main
git checkout -b 001-portfolio-site

# Branch naming: Already created as 001-portfolio-site
```

### Committing Code

```bash
# Stage changes
git add [files]

# Commit with conventional message
git commit -m "feat: add ProjectCard component

- Display project title, brief, and technologies
- Click handler for navigation to detail page
- ImageWithFallback for error handling
- 85% test coverage with unit tests"

# Push to remote
git push origin 001-portfolio-site

# Create pull request on GitHub
```

**Commit Message Format**:

- Prefix: `feat:`, `fix:`, `chore:`, `docs:`, `test:`
- Subject: 50 chars max, imperative mood
- Body: Detailed explanation (optional)
- Reference issues: `Fixes #123`

### Pre-Commit Hooks

Automated checks before commit:

```bash
# Hooks run automatically (Husky)
# If any check fails, commit is blocked

# Manual hook triggers:
pnpm lint:fix  # Fix linting issues
pnpm typecheck # Type check
pnpm test      # Run unit tests
```

## Debugging

### VS Code Debugger

```json
// .vscode/launch.json (already configured)
{
  "type": "chrome",
  "request": "launch",
  "name": "Launch Chrome",
  "url": "http://localhost:5173",
  "webRoot": "${workspaceFolder}/src"
}
```

**Steps**:

1. Add breakpoint in code (click gutter)
2. Press F5 or Run → Start Debugging
3. Browser opens with debugger
4. Step through code, inspect variables

### Console Logging

```typescript
// Temporary logging (remove before committing)
console.log('Debug:', value);
console.error('Error:', error);
console.warn('Warning:', message);

// Better: Use React DevTools (Chrome extension)
// - Inspect component tree
// - View props/state
// - Trigger re-renders
```

### React DevTools

```bash
# Already installed via dependencies
# Chrome: Extensions → React DevTools
# Inspect component props and state
# Track re-renders
```

## Performance Tips

### Profiling

```bash
# Run production build locally
pnpm build
pnpm preview

# Inspect bundle size
pnpm build --analyze

# Check Lighthouse score
# Open DevTools → Lighthouse → Generate Report
```

### Optimization Best Practices

```typescript
// ✅ Good: Memoized component (prevent re-renders)
export const ProjectCard = React.memo(({ project, onCardClick }) => {
  // Component only re-renders if props change
});

// ✅ Good: Lazy-loaded route
const ProjectDetailPage = React.lazy(() =>
  import("./pages/ProjectDetailPage")
);

// ✅ Good: Use useMemo for expensive calculations
const filteredProjects = useMemo(
  () => projects.filter(p => p.technologies.includes(filter)),
  [projects, filter]
);

// ❌ Avoid: Creating objects in render
// Bad:
render() {
  const style = { color: "red" }; // New object every render!
}

// Good:
const style = { color: "red" }; // Define outside component
```

## Troubleshooting

### Common Issues

**Issue**: Hot reload not working

```bash
# Solution 1: Restart dev server
pnpm dev

# Solution 2: Clear cache
rm -rf node_modules/.vite
pnpm dev
```

**Issue**: TypeScript errors in IDE

```bash
# Solution: Restart TypeScript server (VS Code)
# Command palette → TypeScript: Restart TS Server
```

**Issue**: Tests failing with module errors

```bash
# Solution: Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm test
```

**Issue**: Build fails

```bash
# Solution 1: Check for lint errors
pnpm lint

# Solution 2: Type check
pnpm typecheck

# Solution 3: Clean build
rm -rf dist
pnpm build
```

## Additional Resources

### Documentation

- [React 19 Docs](https://react.dev)
- [Material-UI Documentation](https://mui.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright](https://playwright.dev)

### Project Documentation

- [spec.md](./spec.md) - Feature specification
- [plan.md](./plan.md) - Implementation plan
- [data-model.md](./data-model.md) - Data structures
- [contracts/components.md](./contracts/components.md) - Component interfaces

### Development Tools

- VS Code Extensions:
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint
  - Thunder Client (API testing)

## Getting Help

1. **Read the documentation**: Check spec.md, plan.md, and contracts
2. **Search existing code**: Look for similar patterns in components
3. **Run tests**: `pnpm test` to verify your implementation
4. **Ask in code review**: Create PR with questions in comments
5. **Check commit history**: `git log --oneline` for similar work

## Next Steps

1. ✅ Set up development environment (this guide)
2. 📝 Review feature spec: [spec.md](./spec.md)
3. 📐 Understand data model: [data-model.md](./data-model.md)
4. 🏗️ Review component contracts: [contracts/components.md](./contracts/components.md)
5. 💻 Start implementing: Run `/speckit.tasks` for task breakdown

---

**Questions?** Check the troubleshooting section or ask in the project's issues/discussions.

**Happy coding!** 🚀
