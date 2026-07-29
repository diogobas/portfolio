import { projectImages } from './project-images';

export type ProjectType = 'professional' | 'personal' | 'open-source';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: keyof typeof projectImages;
  title: string;
  type: ProjectType;
  company: string;
  period: string;
  summary: string;
  contribution: string;
  technologies: readonly string[];
  links: readonly ProjectLink[];
  featured: boolean;
  image: (typeof projectImages)[keyof typeof projectImages];
}

const project = <T extends Omit<Project, 'image'> & { slug: keyof typeof projectImages }>(item: T): Project => ({
  ...item,
  image: projectImages[item.slug],
});

export const projectTypeLabels: Record<ProjectType, string> = {
  professional: 'Professional work',
  personal: 'Personal project',
  'open-source': 'Open-source contribution',
};

export const projects: readonly Project[] = [
  project({
    slug: 'career-ready-launch-studio', title: 'Career Ready Launch Studio', type: 'professional',
    company: 'Pearson Education · eDynamic Learning', period: '2026 — Present',
    summary: 'A connected career-readiness journey that helps educators guide students from exploration to skills and credentials.',
    contribution: 'Contributing full-stack application and API capabilities for the launch experience using the current Pearson/eDynamic Learning stack.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'React', 'SQL'],
    links: [{ label: 'View Career Ready', href: 'https://www.pearson.com/en-us/career-ready.html' }], featured: true,
  }),
  project({
    slug: 'classcraft', title: 'HMH Classcraft', type: 'professional', company: 'Houghton Mifflin Harcourt', period: '2020 — 2025',
    summary: 'An engaging whole-class learning experience that combines standards-aligned curriculum with real-time instructional insight.',
    contribution: 'Led a six-engineer team delivering classroom-management capabilities and contributed full-stack features across the platform.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Java', 'PostgreSQL', 'Kubernetes'],
    links: [{ label: 'View Classcraft', href: 'https://www.hmhco.com/programs/classcraft' }], featured: true,
  }),
  project({
    slug: 'session-organizer', title: 'Session Organizer', type: 'professional', company: 'Houghton Mifflin Harcourt', period: '2020 — 2025',
    summary: 'A planning workflow in HMH Ed that helps teachers review, manage, and launch Classcraft sessions for their classes.',
    contribution: 'Contributed to the responsive product experience and platform integrations that support classroom planning workflows.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Testing Library'],
    links: [{ label: 'Read the Session Organizer guide', href: 'https://s3.amazonaws.com/downloads.hmlt.hmco.com/Help/Ed/Teacher/Classcraft/Open_and_Teach_Classcraft_Sessions.htm' }], featured: true,
  }),
  project({
    slug: 'coachly', title: 'HMH Coachly', type: 'professional', company: 'Houghton Mifflin Harcourt', period: '2020 — 2025',
    summary: 'A year-round, personalized instructional-coaching service embedded in the HMH Ed learning platform.',
    contribution: 'Contributed to responsive React and GraphQL-powered learning-platform experiences for educators and coaches.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Apollo Client', 'Jest'],
    links: [{ label: 'View Coachly', href: 'https://www.hmhco.com/programs/coachly' }], featured: true,
  }),
  project({
    slug: 'ottolearn', title: 'OttoLearn', type: 'professional', company: 'Neovation Learning Solutions', period: '2017 — 2020',
    summary: 'An adaptive, gamified microlearning platform designed to build knowledge retention through short, personalized learning sessions.',
    contribution: 'Developed and maintained React/TypeScript clients, Node.js analytics, and AWS deployment workflows for the product.',
    technologies: ['React', 'TypeScript', 'Redux', 'Node.js', 'AWS Lambda', 'Webpack'],
    links: [{ label: 'View OttoLearn', href: 'https://www.ottolearn.com/' }], featured: true,
  }),
  project({
    slug: 'teacher-success-pathways', title: 'Teacher Success Pathways', type: 'professional', company: 'Houghton Mifflin Harcourt', period: '2020 — 2025',
    summary: 'A guided professional-learning pathway that helps teachers plan, teach, and assess with their HMH programs.',
    contribution: 'Contributed to learning-platform experiences that make program-aligned professional development easier to discover and use.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Java', 'PostgreSQL'],
    links: [{ label: 'Explore HMH professional learning', href: 'https://www.hmhco.com/classroom-solutions/professional-services' }], featured: false,
  }),
  project({
    slug: 'gymrats', title: 'GymRats', type: 'personal', company: 'Personal project', period: '2026',
    summary: 'A monthly fitness-competition scoring system that publishes participant results to a static site.',
    contribution: 'Built a tested Python scoring core, a local FastAPI administration flow, and a React/Vite static participant site.',
    technologies: ['Python', 'FastAPI', 'React', 'Vite', 'TypeScript', 'GitHub Pages'],
    links: [{ label: 'View source on GitHub', href: 'https://github.com/diogobas/gymrats' }], featured: true,
  }),
  project({
    slug: 'etikagis', title: 'Etikagis', type: 'personal', company: 'Personal project', period: 'Earlier work',
    summary: 'An archived system repository preserved from the original Sistema SGS codebase.',
    contribution: 'Maintained as a public archival repository; the available source identifies Visual Basic and classic ASP technologies.',
    technologies: ['Visual Basic', 'ASP', 'JavaScript', 'CSS'],
    links: [{ label: 'View source on GitHub', href: 'https://github.com/diogobas/etikagis' }], featured: false,
  }),
  project({
    slug: 'taskflow-fullstack', title: 'TaskFlow Fullstack', type: 'personal', company: 'Personal project', period: '2026',
    summary: 'A full-stack task-management learning project exploring a React client, serverless Node.js services, and AWS infrastructure.',
    contribution: 'Built as a learning project with a documented architecture spanning React, TypeScript, Node.js, AWS, DynamoDB, and PostgreSQL.',
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'DynamoDB', 'PostgreSQL'],
    links: [{ label: 'View source on GitHub', href: 'https://github.com/diogobas/taskflow-fullstack' }], featured: false,
  }),
  project({
    slug: 'json-transformer-api', title: 'JSON Transformer API', type: 'personal', company: 'Personal project', period: '2026',
    summary: 'A small REST API that recursively transforms values in nested JSON data.',
    contribution: 'Built an Express and TypeScript API with rate limiting and unit and integration tests.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'Jest', 'Supertest'],
    links: [{ label: 'View source on GitHub', href: 'https://github.com/diogobas/json-transformer-api' }], featured: false,
  }),
  project({
    slug: 'deckgame', title: 'Deck Game', type: 'personal', company: 'Personal project', period: '2026',
    summary: 'A multiplayer card-game application with a REST backend and an interactive web client.',
    contribution: 'Built the project around a Java/Spring Boot backend and a React/TypeScript frontend using Material UI.',
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Material UI'],
    links: [{ label: 'View source on GitHub', href: 'https://github.com/diogobas/deckgame' }], featured: false,
  }),
];

const featuredProjectSlugs = [
  'career-ready-launch-studio',
  'classcraft',
  'session-organizer',
  'coachly',
] as const;

export const featuredProjects = featuredProjectSlugs.map((slug) => projects.find((item) => item.slug === slug)!);
