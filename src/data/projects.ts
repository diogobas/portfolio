export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  contribution: string;
  technologies: readonly string[];
  links: readonly ProjectLink[];
  featured: boolean;
  visual: 'career' | 'classcraft' | 'coachly' | 'learning';
  image: string;
}

export const projects = [
  {
    slug: 'career-ready-launch-studio',
    title: 'Career Ready Launch Studio',
    company: 'Pearson Education · eDynamic Learning',
    period: '2026 — Present',
    summary:
      'A connected career-readiness journey that helps educators guide students from exploration to skills and credentials.',
    contribution:
      'Contributing full-stack application and API capabilities for the launch experience using the current Pearson/eDynamic Learning stack.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'React', 'SQL'],
    links: [{ label: 'View Career Ready', href: 'https://www.pearson.com/en-us/career-ready.html' }],
    featured: true,
    visual: 'career',
    image: '/images/projects/career-ready.jpg',
  },
  {
    slug: 'classcraft',
    title: 'HMH Classcraft',
    company: 'Houghton Mifflin Harcourt',
    period: '2020 — 2025',
    summary:
      'An engaging whole-class learning experience that combines standards-aligned curriculum with real-time instructional insight.',
    contribution:
      'Led a six-engineer team delivering classroom-management capabilities and contributed full-stack features across the platform.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Java', 'PostgreSQL', 'Kubernetes'],
    links: [{ label: 'View Classcraft', href: 'https://www.hmhco.com/programs/classcraft' }],
    featured: true,
    visual: 'classcraft',
    image: '/images/projects/classcraft.jpg',
  },
  {
    slug: 'session-organizer',
    title: 'Session Organizer',
    company: 'Houghton Mifflin Harcourt',
    period: '2020 — 2025',
    summary:
      'A planning workflow in HMH Ed that helps teachers review, manage, and launch Classcraft sessions for their classes.',
    contribution:
      'Contributed to the responsive product experience and platform integrations that support classroom planning workflows.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Testing Library'],
    links: [
      {
        label: 'Read the Session Organizer guide',
        href: 'https://s3.amazonaws.com/downloads.hmlt.hmco.com/Help/Ed/Teacher/Classcraft/Open_and_Teach_Classcraft_Sessions.htm',
      },
    ],
    featured: true,
    visual: 'classcraft',
    image: '/images/projects/classcraft.jpg',
  },
  {
    slug: 'coachly',
    title: 'HMH Coachly',
    company: 'Houghton Mifflin Harcourt',
    period: '2020 — 2025',
    summary:
      'A year-round, personalized instructional-coaching service embedded in the HMH Ed learning platform.',
    contribution:
      'Contributed to responsive React and GraphQL-powered learning-platform experiences for educators and coaches.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Apollo Client', 'Jest'],
    links: [{ label: 'View Coachly', href: 'https://www.hmhco.com/programs/coachly' }],
    featured: true,
    visual: 'coachly',
    image: '/images/projects/coachly.jpg',
  },
  {
    slug: 'ottolearn',
    title: 'OttoLearn',
    company: 'Neovation Learning Solutions',
    period: '2017 — 2020',
    summary:
      'An adaptive, gamified microlearning platform designed to build knowledge retention through short, personalized learning sessions.',
    contribution:
      'Developed and maintained React/TypeScript clients, Node.js analytics, and AWS deployment workflows for the product.',
    technologies: ['React', 'TypeScript', 'Redux', 'Node.js', 'AWS Lambda', 'Webpack'],
    links: [{ label: 'View OttoLearn', href: 'https://www.ottolearn.com/' }],
    featured: true,
    visual: 'learning',
    image: '/images/projects/learning.jpg',
  },
  {
    slug: 'teacher-success-pathways',
    title: 'Teacher Success Pathways',
    company: 'Houghton Mifflin Harcourt',
    period: '2020 — 2025',
    summary:
      'A guided professional-learning pathway that helps teachers plan, teach, and assess with their HMH programs.',
    contribution:
      'Contributed to learning-platform experiences that make program-aligned professional development easier to discover and use.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Java', 'PostgreSQL'],
    links: [
      {
        label: 'Explore HMH professional learning',
        href: 'https://www.hmhco.com/classroom-solutions/professional-services',
      },
    ],
    featured: false,
    visual: 'learning',
    image: '/images/projects/learning.jpg',
  },
] as const satisfies readonly Project[];

export const featuredProjects = projects.filter((project) => project.featured);
