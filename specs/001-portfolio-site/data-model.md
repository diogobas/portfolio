# Data Model: Portfolio Project Website

**Feature**: Portfolio Project Website (001)  
**Phase**: 1 Design & Contracts  
**Created**: 2025-12-04

## Entity Definitions

### Project

Represents a professional project showcased in the portfolio.

```typescript
interface Project {
  id: string;                      // Unique identifier
  name: string;                    // Project title
  company: string;                 // Company name
  brief: string;                   // Short 1-2 sentence description
  description: string;             // Full description (multiple paragraphs)
  technologies: string[];          // Array of technology tags
  imageUrl: string;                // Path to local project image
  referenceUrl?: string;           // URL to company/project reference
  demoUrl?: string;                // URL to demo if available
  artwork?: string;                // Path to AI-generated artwork
  order?: number;                  // Display order on portfolio
}
```

**Examples**:
```json
{
  "id": "classcraft",
  "name": "Classcraft",
  "company": "HMH",
  "brief": "Classcraft is a real-time platform that makes teacher–student lessons interactive and engaging.",
  "description": "As part of the HMH classroom management solutions team, I developed React components for real-time student engagement features, including AI-powered lesson summarization and interactive activity management.",
  "technologies": ["React", "TypeScript", "GraphQL", "AI Summarization", "WebSockets"],
  "imageUrl": "project-images/classcraft.jpg",
  "referenceUrl": "https://www.hmhco.com/programs/classcraft",
  "artwork": "project-artwork/classcraft-artwork.png",
  "order": 1
}
```

**Validation Rules**:
- `id`: Required, unique, lowercase, alphanumeric + hyphens only
- `name`: Required, 1-100 characters
- `company`: Required, 1-50 characters
- `brief`: Required, 20-200 characters
- `description`: Optional, 100-2000 characters if provided
- `technologies`: Required, minimum 1 tag, maximum 10 tags
- `imageUrl`: Required, must exist in `public/project-images/`
- `referenceUrl`: Optional, must be valid URL if provided
- `demoUrl`: Optional, must be valid URL if provided
- `artwork`: Optional, must exist in `public/project-artwork/` if provided

**Relationships**:
- 1 Project → 1 ProjectImage (stored locally)
- 1 Project → 1 ProjectArtwork (if available)
- Projects displayed on HomePage (ProjectGrid component)
- Projects linked from Resume (correlation by technologies)

---

### Resume

Represents professional background information.

```typescript
interface Resume {
  profile: string;                 // Professional summary paragraph
  experience: Experience[];        // Array of work experiences
  education: Education[];          // Array of education entries
  skills: string[];                // Array of key technical skills
  contact: Contact;                // Contact information
}

interface Experience {
  id: string;
  company: string;
  title: string;
  startDate: string;              // Format: "YYYY-MM" or "YYYY"
  endDate: string;                // Format: "YYYY-MM", "Present", or "YYYY"
  description: string;            // 1-3 sentence summary
  responsibilities?: string[];    // Key accomplishments
  technologies?: string[];        // Tech stack used
}

interface Education {
  id: string;
  institution: string;
  degree: string;                 // e.g., "BSc"
  field: string;                  // e.g., "Computer Science"
  year: string;                   // Format: "YYYY" or "YYYY-YYYY"
  notes?: string;                 // e.g., "Software Engineering emphasis"
}

interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
}
```

**Examples**:
```json
{
  "profile": "Full-stack software engineer with 20 years of experience building scalable web applications using modern frameworks and methodologies...",
  "experience": [
    {
      "id": "hmh-senior-dev",
      "company": "Houghton Mifflin Harcourt",
      "title": "Senior Software Developer",
      "startDate": "2022-10",
      "endDate": "2025-10",
      "description": "Led team of 6 engineers delivering classroom management solutions.",
      "technologies": ["React", "TypeScript", "GraphQL", "Kubernetes", "Docker"],
      "responsibilities": [
        "Architected GraphQL federation layer for microservices",
        "Implemented real-time collaboration features with WebSockets",
        "Reduced page load time from 4s to 1.2s through code splitting"
      ]
    }
  ],
  "education": [
    {
      "id": "edu-1",
      "institution": "Pontifical Catholic University of Goiás",
      "degree": "BSc",
      "field": "Computer Science",
      "year": "2007",
      "notes": "Software Engineering emphasis"
    }
  ],
  "skills": [
    "React / React Native",
    "Node.js / Java / Spring Boot",
    "TypeScript / GraphQL",
    "PostgreSQL / MongoDB",
    "Docker / Kubernetes",
    "AWS / GCP"
  ],
  "contact": {
    "email": "diogovvb@gmail.com",
    "phone": "+1 (514) 207-6799",
    "linkedin": "https://linkedin.com/in/diogo-bastos",
    "github": "https://github.com/diogobastos"
  }
}
```

**Validation Rules**:
- `profile`: Required, 100-500 characters
- `experience`: Required, minimum 3 entries, maximum 10
- `experience[].company`: Required, 1-100 characters
- `experience[].title`: Required, 1-100 characters
- `experience[].startDate`: Required, YYYY-MM or YYYY format
- `experience[].endDate`: Required, YYYY-MM, "Present", or YYYY format
- `experience[].description`: Required, 20-300 characters
- `education`: Required, minimum 1 entry, maximum 5
- `skills`: Required, minimum 5, maximum 20 skills
- `contact.email`: Required, valid email format
- `contact.phone`: Required, valid phone format
- `contact.linkedin`: Required, valid URL
- `contact.github`: Optional, valid URL if provided

**Relationships**:
- 1 Resume entity per portfolio (singleton)
- Resume displayed on AboutPage component
- Experience entries filtered by projects (highlight relevant experiences)
- Skills correlated with project technologies

---

### ProjectImage

Represents a downloaded project image asset.

```typescript
interface ProjectImage {
  projectId: string;              // Foreign key to Project
  filename: string;               // Stored filename in public/project-images/
  originalUrl: string;            // Original source URL
  format: "jpg" | "png" | "webp"; // Image format
  size: number;                   // File size in bytes
  width: number;                  // Image width in pixels
  height: number;                 // Image height in pixels
  downloadedAt: string;           // ISO 8601 timestamp
}
```

**Examples**:
```json
{
  "projectId": "classcraft",
  "filename": "classcraft.jpg",
  "originalUrl": "https://neonbytes.ca/elibaldo/images/projects/classcraft.jpg",
  "format": "jpg",
  "size": 145000,
  "width": 1200,
  "height": 630,
  "downloadedAt": "2025-12-04T10:30:00Z"
}
```

**Validation Rules**:
- `projectId`: Required, must match existing Project.id
- `filename`: Required, unique within `public/project-images/`
- `originalUrl`: Required, valid URL
- `format`: Required, one of jpg/png/webp
- `size`: Required, >0 bytes
- `width` / `height`: Required, >0 pixels
- `downloadedAt`: Required, valid ISO 8601 timestamp

**Relationships**:
- 1 ProjectImage ← 1 Project (loaded via Project.imageUrl)
- Stored as metadata; actual image file in `public/project-images/`
- Used for image optimization (responsive srcset, format selection)

---

### ProjectArtwork

Represents AI-generated artwork for a project.

```typescript
interface ProjectArtwork {
  projectId: string;              // Foreign key to Project
  filename: string;               // Stored filename in public/project-artwork/
  prompt: string;                 // AI generation prompt used
  model: string;                  // AI model name (e.g., "DALL-E 3", "Midjourney")
  generatedAt: string;            // ISO 8601 timestamp
  altText: string;                // Accessibility alt text
}
```

**Examples**:
```json
{
  "projectId": "classcraft",
  "filename": "classcraft-artwork.png",
  "prompt": "Abstract illustration of a teacher and student in a digital classroom, interactive learning, modern technology, bright colors, professional style",
  "model": "DALL-E 3",
  "generatedAt": "2025-12-04T11:45:00Z",
  "altText": "Abstract art depicting a teacher and student interacting in a digital learning environment with colorful interactive elements"
}
```

**Validation Rules**:
- `projectId`: Required, must match existing Project.id
- `filename`: Required, unique within `public/project-artwork/`
- `prompt`: Required, 50-500 characters
- `model`: Required, 1-50 characters
- `generatedAt`: Required, valid ISO 8601 timestamp
- `altText`: Required, 20-200 characters (must describe artwork)

**Relationships**:
- 1 ProjectArtwork ← 1 Project (optional; loaded via Project.artwork)
- Displayed prominently on ProjectDetailPage
- Artwork shown in ProjectCard (when available)

---

## Data Structure Examples

### projects.json (Complete Example)

```json
{
  "version": "1.0.0",
  "lastUpdated": "2025-12-04T12:00:00Z",
  "projects": [
    {
      "id": "classcraft",
      "name": "Classcraft",
      "company": "HMH",
      "brief": "Classcraft is a real-time platform that makes teacher–student lessons interactive and engaging.",
      "description": "As a Senior Software Developer at HMH, I led the development of real-time classroom collaboration features. Built React components for interactive lesson management, AI-powered content summarization, and student engagement tracking. Implemented GraphQL APIs with Apollo Federation to coordinate between microservices. Optimized performance through code splitting and lazy loading, reducing initial page load from 3.5s to 1.2s on 4G networks.",
      "technologies": ["React", "TypeScript", "GraphQL", "Apollo Federation", "WebSockets", "AI Summarization", "Spring Boot", "PostgreSQL"],
      "imageUrl": "project-images/classcraft.jpg",
      "referenceUrl": "https://www.hmhco.com/programs/classcraft",
      "artwork": "project-artwork/classcraft-artwork.png",
      "order": 1
    },
    {
      "id": "session-organizer",
      "name": "Session Organizer",
      "company": "HMH",
      "brief": "Manage Classcraft sessions through the Session Organizer.",
      "description": "Developed the Session Organizer interface for teachers to create, schedule, and manage classroom sessions within Classcraft. Built with React, Redux state management, and Material-UI components. Implemented advanced filtering and search capabilities for managing hundreds of sessions. Achieved 85% test coverage through comprehensive unit and integration tests.",
      "technologies": ["React", "Redux", "Material-UI", "TypeScript", "Jest"],
      "imageUrl": "project-images/session-organizer.png",
      "referenceUrl": "https://www.hmhco.com/programs/classcraft",
      "artwork": "project-artwork/session-organizer-artwork.png",
      "order": 2
    },
    {
      "id": "coachly",
      "name": "Coachly",
      "company": "HMH",
      "brief": "Coachly puts teachers in control of their professional learning with unlimited virtual coaching and messaging on HMH Ed.",
      "description": "Led frontend development for Coachly, a professional development platform. Implemented real-time messaging with WebSockets, session scheduling with calendar integration, and resource sharing capabilities. Built reusable component library using Material-UI. Ensured WCAG 2.1 AA accessibility compliance across all features.",
      "technologies": ["React", "TypeScript", "Material-UI", "WebSockets", "Calendar APIs", "Direct Messaging"],
      "imageUrl": "project-images/coachly.png",
      "referenceUrl": "https://www.hmhco.com/programs/coachly",
      "artwork": "project-artwork/coachly-artwork.png",
      "order": 3
    },
    {
      "id": "teacher-pathways",
      "name": "Teacher Success Pathways",
      "company": "HMH",
      "brief": "Teacher Success Pathways are a sequence of professional learning topics designed to help teachers plan, teach, and assess with their program and HMH Ed.",
      "description": "Architected and built Teacher Success Pathways learning progression system. Implemented Zoom integration for live coaching sessions, learning path visualization, and progress tracking. Created responsive design supporting mobile learning. Integrated with HMH Ed platform through GraphQL APIs.",
      "technologies": ["React", "TypeScript", "Zoom SDK", "GraphQL", "Three.js (for path visualization)", "Responsive Design"],
      "imageUrl": "project-images/teacher-pathway.png",
      "demoUrl": "https://neonbytes.ca/elibaldo/#HMHtsp",
      "artwork": "project-artwork/teacher-pathway-artwork.png",
      "order": 4
    }
  ]
}
```

### resume.json (Simplified Example)

```json
{
  "profile": "Full-stack software engineer with 20 years of experience building scalable web applications using modern frameworks and methodologies, with a track record of delivering high-impact solutions in collaborative, Agile environments.",
  "experience": [
    {
      "id": "hmh-senior",
      "company": "Houghton Mifflin Harcourt",
      "title": "Senior Software Developer",
      "startDate": "2022-10",
      "endDate": "2025-10",
      "description": "Led a team of six engineers delivering market-differentiating classroom management solutions.",
      "technologies": ["React", "TypeScript", "GraphQL", "Spring Boot", "Kubernetes"],
      "responsibilities": [
        "Architected microservices using Hasura GraphQL Engine and Spring Cloud",
        "Implemented real-time collaboration with WebSockets and Apollo Federation",
        "Reduced page load time from 3.5s to 1.2s through optimization"
      ]
    }
  ],
  "education": [
    {
      "id": "edu-comp-sci",
      "institution": "Pontifical Catholic University of Goiás",
      "degree": "BSc",
      "field": "Computer Science",
      "year": "2007",
      "notes": "Software Engineering emphasis"
    }
  ],
  "skills": [
    "React.js / React Native",
    "TypeScript / JavaScript",
    "Node.js / Java / Spring Boot",
    "GraphQL / REST APIs",
    "PostgreSQL / MongoDB",
    "Docker / Kubernetes",
    "AWS / GCP",
    "Jest / React Testing Library",
    "Agile / Scrum"
  ],
  "contact": {
    "email": "diogovvb@gmail.com",
    "phone": "+1 (514) 207-6799",
    "linkedin": "https://linkedin.com/in/diogo-bastos",
    "github": "https://github.com/diogobastos"
  }
}
```

---

## Data Loading & Synchronization

### Static Data Files
- **projects.json**: Stored in `src/data/projects.json` (4 projects with full metadata)
- **resume.json**: Stored in `src/data/resume.json` (professional information)
- **Load Strategy**: Imported directly in React components (no API calls)
- **TypeScript Validation**: Validated against interfaces at compile time

### Data Freshness
- Images and artwork downloaded once during build or manual upload
- No need for API sync (static site)
- Data updates: Commit new JSON files to repository

### Fallback Strategy
- If ProjectImage fails to load: Show placeholder + fallback text
- If ProjectArtwork fails to load: Fall back to ProjectImage
- If Resume data unavailable: Show error message + retry button

---

## Constraints & Assumptions

### Constraints
- **Max Projects**: 20 projects (UI scales to this; beyond requires pagination)
- **Image Size**: Max 2MB per image (consider bandwidth on 4G)
- **Resume Length**: Max 5000 characters (fit on single page)
- **Technologies per Project**: Max 10 tags (UI layout limit)

### Assumptions
- **Data Stability**: projects.json and resume.json are stable, rarely change
- **Image Availability**: Downloaded images are always present in `public/` folder
- **External URLs**: External links (HMH references) may break; UI must handle gracefully
- **No Database**: This is a static site; all data is JSON files or local storage

---

## Future Extensions

### Potential Enhancements
- **Blog Posts**: Add `blogPosts` entity for technical articles
- **Testimonials**: Add testimonial cards with quotes from colleagues
- **Contact Form**: Add `ContactMessage` entity for portfolio inquiries
- **Dark Mode**: Add theme variant (requires Resume + Project color schemes)
- **Internationalization**: Support multiple languages (resume.json + projects.json per language)

These would require additional Phase 1 design work and are out of scope for MVP (US1-US3).
