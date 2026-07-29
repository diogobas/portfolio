export type ProjectImageStatus = 'approved' | 'fallback' | 'pending';

export interface ProjectImage {
  src: string;
  alt: string;
  decorative: boolean;
  status: ProjectImageStatus;
  source: string;
  creditOrPermission: string;
}

/**
 * Visual assets are deliberately kept separate from project copy. This makes
 * their provenance and publication approval reviewable before an asset ships.
 */
export const projectImages = {
  'career-ready-launch-studio': {
    src: '/images/projects/career-ready-launch-studio.png',
    alt: 'Career Ready Launch Studio dashboard showing a selected UX Designer career path.',
    decorative: false,
    status: 'approved',
    source: 'Product screenshot supplied by Diogo Bastos',
    creditOrPermission: 'Approved for use in this portfolio.',
  },
  classcraft: {
    src: '/images/projects/classcraft.png',
    alt: 'HMH Classcraft teacher panel interface.',
    decorative: false,
    status: 'approved',
    source: 'Product screenshot supplied by Diogo Bastos',
    creditOrPermission: 'Approved for use in this portfolio.',
  },
  'session-organizer': {
    src: '/images/projects/session-organizer.png',
    alt: 'Session Organizer interface showing lesson sessions and a session overview panel.',
    decorative: false,
    status: 'approved',
    source: 'Product screenshot supplied by Diogo Bastos',
    creditOrPermission: 'Approved for use in this portfolio.',
  },
  coachly: {
    src: '/images/projects/coachly.png',
    alt: 'HMH Coachly panel alongside an HMH Ed instructional resources page.',
    decorative: false,
    status: 'approved',
    source: 'Product screenshot supplied by Diogo Bastos',
    creditOrPermission: 'Approved for use in this portfolio.',
  },
  ottolearn: {
    src: '/images/projects/ottolearn.png',
    alt: 'OttoLearn analytics dashboard with module engagement and mastery charts.',
    decorative: false,
    status: 'approved',
    source: 'Product screenshot supplied by Diogo Bastos',
    creditOrPermission: 'Approved for use in this portfolio.',
  },
  'teacher-success-pathways': {
    src: '/images/projects/teacher-success-pathways.png',
    alt: 'Teacher Success Pathway interface showing classroom instructional resources.',
    decorative: false,
    status: 'approved',
    source: 'Product screenshot supplied by Diogo Bastos',
    creditOrPermission: 'Approved for use in this portfolio.',
  },
  gymrats: {
    src: '/images/projects/learning.jpg',
    alt: '',
    decorative: true,
    status: 'fallback',
    source: 'Original abstract cover',
    creditOrPermission: 'Created for this portfolio; used as a safe fallback until an approved project visual is supplied.',
  },
  etikagis: {
    src: '/images/projects/learning.jpg',
    alt: '',
    decorative: true,
    status: 'fallback',
    source: 'Original abstract cover',
    creditOrPermission: 'Created for this portfolio; used as a safe fallback until an approved project visual is supplied.',
  },
  'taskflow-fullstack': {
    src: '/images/projects/learning.jpg',
    alt: '',
    decorative: true,
    status: 'fallback',
    source: 'Original abstract cover',
    creditOrPermission: 'Created for this portfolio; used as a safe fallback until an approved project visual is supplied.',
  },
  'json-transformer-api': {
    src: '/images/projects/learning.jpg',
    alt: '',
    decorative: true,
    status: 'fallback',
    source: 'Original abstract cover',
    creditOrPermission: 'Created for this portfolio; used as a safe fallback until an approved project visual is supplied.',
  },
  deckgame: {
    src: '/images/projects/learning.jpg',
    alt: '',
    decorative: true,
    status: 'fallback',
    source: 'Original abstract cover',
    creditOrPermission: 'Created for this portfolio; used as a safe fallback until an approved project visual is supplied.',
  },
} as const satisfies Record<string, ProjectImage>;
