/**
 * Mock resume data for testing
 */

export const mockResume = {
  profile: {
    name: 'Diogo Bastos',
    title: 'Senior Software Engineer',
    summary:
      'Experienced software engineer with 20+ years of expertise building scalable applications. Specializing in full-stack web development, cloud architecture, and leading high-performing engineering teams.',
    email: 'diogo.bastos@example.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/diogo-bastos',
    github: 'https://github.com/diogobastos',
    website: 'https://diogobastos.com',
  },
  experience: [
    {
      id: 'hmh-1',
      company: 'Houghton Mifflin Harcourt',
      title: 'Senior Software Engineer',
      startDate: '2021-06',
      endDate: 'present',
      description:
        'Leading development of EdTech platforms serving millions of K-12 students. Architected microservices for real-time collaboration features and implemented performance optimizations reducing load times by 40%.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Kubernetes', 'PostgreSQL'],
      highlights: [
        'Led team of 5 engineers building core platform features',
        'Reduced page load time from 3.2s to 1.8s through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
    },
    {
      id: 'hmh-2',
      company: 'Houghton Mifflin Harcourt',
      title: 'Software Engineer',
      startDate: '2018-03',
      endDate: '2021-05',
      description:
        'Developed and maintained full-stack web applications for educational technology platforms. Focused on performance optimization and accessibility compliance.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Docker', 'AWS'],
      highlights: [
        'Implemented WCAG 2.1 AA accessibility standards across product',
        'Built real-time collaboration features using WebSockets',
        'Mentored 3 junior developers, growing their skills to mid-level',
      ],
    },
    {
      id: 'previous',
      company: 'TechCorp Inc.',
      title: 'Full Stack Developer',
      startDate: '2014-01',
      endDate: '2018-02',
      description: 'Developed web applications for enterprise clients using modern JavaScript frameworks.',
      technologies: ['Angular', 'Node.js', 'MySQL', 'AWS', 'Docker'],
      highlights: ['Built 15+ features for SaaS platform', 'Reduced API response time by 45%', 'Implemented comprehensive test suite'],
    },
  ],
  education: [
    {
      id: 'bs-cs',
      institution: 'University of State',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      year: '2013',
      honors: 'Cum Laude',
    },
  ],
  skills: [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Material-UI', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Firebase', 'GraphQL'],
    },
    {
      category: 'DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GitHub Actions'],
    },
    {
      category: 'Soft Skills',
      skills: ['Team Leadership', 'Mentoring', 'Communication', 'Problem Solving', 'Agile'],
    },
  ],
  contact: {
    email: 'diogo.bastos@example.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/diogo-bastos',
    github: 'https://github.com/diogobastos',
    website: 'https://diogobastos.com',
    location: 'San Francisco, CA',
  },
};
