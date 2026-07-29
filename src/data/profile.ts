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

export interface Experience {
  period: string;
  role: string;
  company: string;
  summary: string;
  technologies: readonly string[];
}

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

export const careerExperiences: readonly Experience[] = [
  {
    period: '2026 — Present',
    role: 'Senior Full-Stack Software Engineer',
    company: 'Pearson · eDynamic Learning',
    summary: 'Building full-stack applications and APIs for digital curriculum and career-readiness experiences.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'GraphQL'],
  },
  {
    period: 'Jan — Feb 2026',
    role: 'Senior Software Engineer',
    company: 'Fairstone Bank',
    summary: 'Senior software-engineering role immediately before joining Pearson.',
    technologies: [],
  },
  {
    period: '2022 — 2025',
    role: 'Senior Software Developer',
    company: 'HMH',
    summary: 'Developed full-stack learning-platform features, Java services, GraphQL APIs, CI/CD workflows, and cloud infrastructure.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Java', 'Spring Cloud', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    period: '2020 — 2022',
    role: 'Senior Software Engineer (contract)',
    company: 'TEKsystems · HMH engagement',
    summary: 'Built responsive React interfaces and participated in requirements analysis, UI/UX workflows, and Agile delivery for HMH.',
    technologies: ['React', 'Redux', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    period: '2017 — 2020',
    role: 'Software Developer',
    company: 'Neovation Learning Solutions',
    summary: 'Created and evolved adaptive microlearning experiences, analytics reports, and supporting microservice-based services.',
    technologies: ['React', 'Redux', 'GraphQL', 'Node.js', 'Webpack', 'Gulp'],
  },
  {
    period: '2016 — 2017',
    role: 'Senior Java Developer',
    company: 'PPI-Multitask',
    summary: 'Maintained a legacy Java web system, resolved client issues, and created requested reports.',
    technologies: ['Java', 'Swing', 'JavaFX', 'JPA', 'Spring', 'SQL Server', 'JBoss', 'EJB'],
  },
  {
    period: '2012 — 2016',
    role: 'Software Developer',
    company: 'Dexco',
    summary: 'Analyzed requirements and developed web, desktop, Windows Service, reporting, and SOAP/REST integration solutions.',
    technologies: ['ASP.NET MVC', 'C#', 'VB', 'JavaScript', 'SQL Server', 'Entity Framework', 'WCF'],
  },
  {
    period: 'Feb — Mar 2012',
    role: 'Java Developer, Level 4',
    company: 'Otimize-TI — Tecnologia Otimizando Negócios',
    summary: 'Delivered features, bug fixes, and tests for a JEE application in an Agile team.',
    technologies: ['Java', 'Struts 2', 'JavaServer Faces', 'Eclipse'],
  },
  {
    period: '2010 — 2011',
    role: 'Java Developer',
    company: 'Indra',
    summary: 'Developed and maintained enterprise Java web applications, testing reports, and continuous-integration workflows.',
    technologies: ['Java', 'Struts 2', 'Apache Wicket', 'EJB', 'Spring', 'JPA', 'Hibernate', 'Maven'],
  },
  {
    period: '2008 — 2009',
    role: 'Associate Software Developer',
    company: 'Senai Goiás',
    summary: 'Maintained system architecture and developed Java, Flex, and SQL Server-connected web applications.',
    technologies: ['Java', 'Flex', 'ActionScript', 'Hibernate', 'Spring', 'JSP', 'SQL Server'],
  },
  {
    period: '2007 — 2008',
    role: 'Software Developer Intern',
    company: 'Sistema Inteligente de Automação PLUS · SIAPLUS',
    summary: 'Completed a systems-development internship covering Java web and desktop applications, Visual Basic 6, PHP, and MySQL.',
    technologies: ['Java', 'Visual Basic 6', 'PHP', 'MySQL', 'Hibernate', 'Spring', 'JSP'],
  },
];
