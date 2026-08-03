export type ResumeExperience = {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: readonly string[];
  technologies: readonly string[];
  featured?: boolean;
  companyUrl?: string;
  companyLogo?: string;
  companyLogoVariant?: 'color';
  companyLogoAlign?: 'center';
};

export const resume = {
  identity: {
    name: 'Diogo Bastos',
    role: 'Senior Full-Stack Software Engineer',
    location: 'Canada',
    email: 'diogovvb@gmail.com',
    portfolio: 'https://diogobastos.pages.dev',
    linkedin: 'https://www.linkedin.com/in/diogo-bastos/',
    github: 'https://github.com/diogobas',
  },
  summary:
    'Senior full-stack software engineer with 20 years of experience building scalable web applications and learning technology in collaborative, Agile teams. Experienced in front-end development with React and TypeScript; Node.js and Java/Spring Boot services; GraphQL and REST APIs; PostgreSQL; AWS; Docker; Kubernetes; CI/CD; automated testing; and observability. Has led a six-engineer team and delivered maintainable, accessible software from requirements and technical design through production monitoring.',
  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Java', 'SQL', 'C#', 'Visual Basic'],
    },
    {
      category: 'Frontend',
      items: [
        'React',
        'React Native',
        'Redux',
        'Apollo Client',
        'TanStack React Query',
        'HTML5',
        'CSS',
      ],
    },
    {
      category: 'Backend and APIs',
      items: [
        'Node.js',
        'Express',
        'Spring Boot',
        'GraphQL',
        'REST APIs',
        'Hasura',
        'Apollo Federation',
      ],
    },
    {
      category: 'Data and cloud',
      items: ['PostgreSQL', 'SQL Server', 'AWS', 'AWS Lambda', 'Docker', 'Kubernetes'],
    },
    {
      category: 'Delivery, quality, and operations',
      items: [
        'CI/CD',
        'Concourse',
        'Jenkins',
        'Turborepo',
        'Datadog',
        'Bash scripting',
        'Linux',
        'Debugging',
        'Troubleshooting',
        'Jest',
        'Vitest',
        'Testing Library',
      ],
    },
  ],
  experience: [
    {
      period: 'Feb 2026 - Present',
      role: 'Senior Full-Stack Software Engineer',
      company: 'Pearson Education - eDynamic Learning',
      location: 'Remote, Canada',
      summary:
        'Designing and maintaining scalable full-stack applications and REST APIs for digital curriculum and career-readiness experiences.',
      highlights: [
        'Develop and maintain full-stack applications with Node.js, TypeScript, Express, React, SQL, and REST APIs.',
        'Deliver features from requirements and technical design through implementation, automated testing, deployment, and production monitoring.',
        'Collaborate with Engineering, DevOps, Business Systems, Product, and Operations on reliable, maintainable solutions.',
      ],
      technologies: ['Node.js', 'TypeScript', 'Express', 'React', 'SQL'],
      featured: true,
      companyUrl: 'https://www.linkedin.com/company/pearson/',
      companyLogo: '/images/companies/pearson.svg',
    },
    {
      period: 'Jan 2026 - Feb 2026',
      role: 'Senior Software Engineer',
      company: 'Fairstone Bank',
      location: 'Canada',
      summary: 'Held a senior software-engineering role immediately before joining Pearson.',
      highlights: ['Contributed as a senior software engineer immediately before joining Pearson.'],
      technologies: [],
      companyUrl: 'https://www.linkedin.com/company/fairstone/',
      companyLogo: '/images/companies/fairstone.svg',
    },
    {
      period: 'Oct 2022 - Oct 2025',
      role: 'Senior Software Developer',
      company: 'Houghton Mifflin Harcourt',
      location: 'Montreal, QC',
      summary:
        'Led and delivered classroom-management and learning-platform capabilities across micro-frontends, GraphQL services, and cloud infrastructure.',
      highlights: [
        'Led a team of six engineers delivering classroom-management solutions for teachers.',
        'Mentored junior developers through code reviews, technical guidance, and knowledge sharing.',
        'Built full-stack features with React, TypeScript, GraphQL, Java/Spring Boot, Node.js, PostgreSQL, and micro-frontends.',
        'Operated services with Docker, Kubernetes, Concourse, Jenkins, Turborepo, and Datadog observability.',
      ],
      technologies: [
        'React',
        'TypeScript',
        'GraphQL',
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
      ],
      featured: true,
      companyUrl: 'https://www.linkedin.com/company/hmhlearn/',
      companyLogo: '/images/companies/hmh.svg',
    },
    {
      period: 'Mar 2020 - Oct 2022',
      role: 'Senior Software Developer',
      company: 'TEKsystems - HMH engagement',
      location: 'Montreal, QC',
      summary:
        'Built responsive, production-ready learning experiences and contributed to UI/UX workflows for HMH products.',
      highlights: [
        'Developed responsive React, TypeScript, HTML5, and CSS interfaces for mobile and desktop learning applications.',
        'Integrated GraphQL APIs with Apollo Client and TanStack React Query and maintained coverage with Jest and Testing Library.',
      ],
      technologies: [
        'React',
        'Redux',
        'TypeScript',
        'JavaScript',
        'GraphQL',
        'HTML5',
        'CSS',
        'Testing Library',
      ],
      featured: true,
      companyUrl: 'https://www.linkedin.com/company/teksystems/',
      companyLogo: '/images/companies/teksystems.png',
      companyLogoVariant: 'color',
    },
    {
      period: 'Feb 2017 - Mar 2020',
      role: 'Software Developer',
      company: 'Neovation Learning Solutions',
      location: 'Winnipeg, MB',
      summary:
        'Developed and evolved adaptive microlearning clients, analytics, deployment workflows, and supporting services.',
      highlights: [
        'Developed React and TypeScript clients using React Hooks, Redux, GraphQL, and Apollo Client.',
        'Built serverless analytics in Node.js and TypeScript on AWS Lambda.',
        'Maintained build and deployment workflows using Gulp, Webpack, Yarn, S3, and CloudFront.',
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Node.js', 'AWS Lambda'],
      featured: true,
      companyUrl: 'https://www.linkedin.com/company/neovation/',
      companyLogo: '/images/companies/neovation.svg',
    },
    {
      period: 'Jan 2016 - Dec 2017',
      role: 'Senior Java Developer',
      company: 'PPI-Multitask',
      location: 'Sao Paulo, Brazil',
      summary:
        'Maintained a legacy Java web system, resolved client issues, and created requested reports.',
      highlights: [
        'Maintained Java web systems and produced client-requested reports using Java, Spring, JPA, SQL Server, JBoss, and EJB.',
        'Worked full-time from Mar-Dec 2016, with a documented part-time engagement from Jan 2016-Dec 2017.',
      ],
      technologies: ['Java', 'Swing', 'JavaFX', 'JPA', 'Spring', 'SQL Server', 'JBoss', 'EJB'],
      companyUrl: 'https://www.linkedin.com/company/ppi-multitask/',
      companyLogo: '/images/companies/ppi-multitask.svg',
    },
    {
      period: 'May 2012 - Mar 2016',
      role: 'System Analyst',
      company: 'Dexco (formerly Duratex)',
      location: 'Sao Paulo, Brazil',
      summary:
        'Analyzed requirements and developed web, desktop, Windows Service, reporting, and SOAP/REST integration solutions.',
      highlights: [
        'Developed Windows applications and services with .NET, C#, Visual Basic, and SOAP/REST integrations.',
        'Performed relational database design and developed reporting solutions with Microsoft SQL Server.',
      ],
      technologies: [
        'ASP.NET MVC',
        'C#',
        'Visual Basic',
        'JavaScript',
        'SQL Server',
        'Entity Framework',
        'WCF',
      ],
      companyUrl: 'https://www.linkedin.com/company/dexcosa',
      companyLogo: '/images/companies/dexco.svg',
      companyLogoAlign: 'center',
    },
    {
      period: 'Feb 2012 - Mar 2012',
      role: 'Java Developer, Level 4',
      company: 'Otimize-TI - Tecnologia Otimizando Negocios',
      location: 'Brazil',
      summary: 'Delivered features, bug fixes, and tests for a JEE application in an Agile team.',
      highlights: [
        'Delivered features, bug fixes, and tests for a Java/JEE application using Struts 2 and JavaServer Faces.',
      ],
      technologies: ['Java', 'Struts 2', 'JavaServer Faces', 'Eclipse'],
      companyUrl: 'https://www.linkedin.com/company/otimize-ti',
      companyLogo: '/images/companies/sei-educacional.png',
      companyLogoVariant: 'color',
    },
    {
      period: '2010 - 2011',
      role: 'Java Developer',
      company: 'Indra',
      location: 'Brazil',
      summary:
        'Developed and maintained enterprise Java web applications, testing reports, and continuous-integration workflows.',
      highlights: [
        'Built enterprise Java applications with Struts 2, Apache Wicket, EJB, Spring, JPA, Hibernate, and Maven.',
      ],
      technologies: [
        'Java',
        'Struts 2',
        'Apache Wicket',
        'EJB',
        'Spring',
        'JPA',
        'Hibernate',
        'Maven',
      ],
      companyUrl: 'https://www.linkedin.com/company/indragroupglobal',
      companyLogo: '/images/companies/indra.svg',
    },
    {
      period: '2008 - 2009',
      role: 'Associate Software Developer',
      company: 'SENAI Goias',
      location: 'Brazil',
      summary:
        'Maintained system architecture and developed Java, Flex, and SQL Server-connected web applications.',
      highlights: [
        'Developed web applications using Java, Flex, ActionScript, Hibernate, Spring, JSP, and SQL Server.',
      ],
      technologies: ['Java', 'Flex', 'ActionScript', 'Hibernate', 'Spring', 'JSP', 'SQL Server'],
      companyUrl: 'https://www.linkedin.com/company/senaigoias/',
      companyLogo: '/images/companies/senai-goias.svg',
    },
    {
      period: '2007 - 2008',
      role: 'Software Developer Intern',
      company: 'Sistema Inteligente de Automacao PLUS - SIAPLUS',
      location: 'Brazil',
      summary:
        'Completed a systems-development internship covering Java web and desktop applications, Visual Basic 6, PHP, and MySQL.',
      highlights: [
        'Developed Java web and desktop applications and worked with Visual Basic 6, PHP, MySQL, Hibernate, and Spring.',
      ],
      technologies: ['Java', 'Visual Basic 6', 'PHP', 'MySQL', 'Hibernate', 'Spring', 'JSP'],
    },
  ] satisfies readonly ResumeExperience[],
  education: [
    {
      credential: 'Bachelor of Science (BSc) in Computer Science (Software Engineering emphasis)',
      institution: 'Pontifical Catholic University of Goias, Brazil',
    },
  ],
  training: [
    'Business Analysis - Fundacao Vanzolini',
    'React Web App Developer',
    'MCSD Web Application',
    'Additional training in AngularJS, Android, iOS, ITIL Foundation, and Java web development',
  ],
} as const;

export type Experience = (typeof resume.experience)[number];

export const profile = {
  name: resume.identity.name,
  role: resume.identity.role,
  email: resume.identity.email,
} as const;

export const socialLinks = [
  { label: 'Email', href: `mailto:${resume.identity.email}`, icon: '@', external: false },
  { label: 'LinkedIn', href: resume.identity.linkedin, icon: 'in', external: true },
  { label: 'GitHub', href: resume.identity.github, icon: 'gh', external: true },
] as const;

export const homeExperiences = resume.experience.filter((experience) => experience.featured);
export const careerExperiences: readonly Experience[] = resume.experience;
