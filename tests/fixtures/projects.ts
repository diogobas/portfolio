/**
 * Mock project data for testing
 */

export const mockProjects = [
  {
    id: 'classcraft',
    name: 'Classcraft',
    company: 'Houghton Mifflin Harcourt',
    brief: 'Gamified learning platform for K-12 classrooms',
    description:
      'Classcraft is a web-based gamification platform designed for K-12 education. It transforms classroom management and student engagement by combining game mechanics with learning objectives. Teachers can manage their classrooms using a fantasy RPG interface where students are characters, attendance is tracked through character attributes, and behavioral expectations are enforced through a points-based system.',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    imageUrl: '/project-images/classcraft.jpg',
    referenceUrl: 'https://www.classcraft.com',
    demoUrl: 'https://www.classcraft.com/demo',
    artwork: {
      filename: 'classcraft-artwork.png',
      prompt: 'Fantasy RPG classroom management interface',
      model: 'DALL-E 3',
      generatedAt: '2024-01-15T10:00:00Z',
      altText: 'Fantasy RPG-style classroom dashboard with student character profiles',
    },
  },
  {
    id: 'session-organizer',
    name: 'Session Organizer',
    company: 'Houghton Mifflin Harcourt',
    brief: 'Meeting and session scheduling application',
    description: 'A comprehensive scheduling solution for organizing professional meetings and training sessions.',
    technologies: ['React', 'Express.js', 'MongoDB', 'Material-UI'],
    imageUrl: '/project-images/session-organizer.jpg',
    referenceUrl: 'https://example.com/session-organizer',
    artwork: {
      filename: 'session-organizer-artwork.png',
      prompt: 'Modern calendar and scheduling interface',
      model: 'DALL-E 3',
      generatedAt: '2024-01-15T10:15:00Z',
      altText: 'Modern calendar scheduling dashboard with color-coded sessions',
    },
  },
  {
    id: 'coachly',
    name: 'Coachly',
    company: 'Houghton Mifflin Harcourt',
    brief: 'Virtual coaching and mentorship platform',
    description: 'A platform connecting educators with coaches and mentors for professional development.',
    technologies: ['React', 'Firebase', 'Stripe', 'WebRTC'],
    imageUrl: '/project-images/coachly.jpg',
    referenceUrl: 'https://example.com/coachly',
    artwork: {
      filename: 'coachly-artwork.png',
      prompt: 'Virtual mentorship video coaching session interface',
      model: 'DALL-E 3',
      generatedAt: '2024-01-15T10:30:00Z',
      altText: 'Video conference interface for virtual coaching sessions',
    },
  },
  {
    id: 'teacher-pathways',
    name: 'Teacher Pathways',
    company: 'Houghton Mifflin Harcourt',
    brief: 'Professional development and career tracking for teachers',
    description: 'Teacher Pathways helps educators track their professional development journey and plan career progression.',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
    imageUrl: '/project-images/teacher-pathways.jpg',
    referenceUrl: 'https://example.com/teacher-pathways',
    artwork: {
      filename: 'teacher-pathways-artwork.png',
      prompt: 'Career progression and development path visualization',
      model: 'DALL-E 3',
      generatedAt: '2024-01-15T10:45:00Z',
      altText: 'Career development timeline showing education and certification pathways',
    },
  },
];

export const mockProject = mockProjects[0];
