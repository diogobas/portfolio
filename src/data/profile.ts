export const profile = {
  name: 'Diogo Bastos',
  role: 'Senior Full-Stack Software Engineer',
  email: 'diogovvb@gmail.com',
} as const;

export const socialLinks = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: '@', external: false },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diogo-bastos/', icon: 'in', external: true },
  { label: 'GitHub', href: 'https://github.com/diogobas', icon: 'gh', external: true },
] as const;

export const experiences = [
  {
    period: '2026 — Present',
    role: 'Senior Full-Stack Software Engineer',
    company: 'Pearson Education · eDynamic Learning',
    summary:
      'Designing and maintaining scalable full-stack applications and REST APIs for digital curriculum and career-readiness experiences.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'React', 'SQL'],
  },
  {
    period: '2022 — 2025',
    role: 'Senior Software Developer',
    company: 'Houghton Mifflin Harcourt',
    summary:
      'Led and delivered classroom-management and learning-platform capabilities across micro-frontends, GraphQL services, and cloud infrastructure.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Java', 'PostgreSQL', 'Kubernetes'],
  },
  {
    period: '2020 — 2022',
    role: 'Senior Software Developer',
    company: 'TEKsystems · HMH engagement',
    summary:
      'Built responsive, production-ready learning experiences and contributed to UI/UX workflows for HMH products.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Testing Library'],
  },
  {
    period: '2017 — 2020',
    role: 'Software Developer',
    company: 'Neovation Learning Solutions',
    summary:
      'Developed and evolved adaptive microlearning clients, analytics, deployment workflows, and supporting services.',
    technologies: ['React', 'TypeScript', 'Redux', 'Node.js', 'AWS Lambda'],
  },
] as const;
