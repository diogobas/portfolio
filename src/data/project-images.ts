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
    src: '/images/projects/career-ready.jpg',
    alt: '',
    decorative: true,
    status: 'fallback',
    source: 'Original abstract cover',
    creditOrPermission: 'Created for this portfolio; used as a safe fallback pending approved product imagery.',
  },
  classcraft: {
    src: '/images/projects/classcraft.jpg',
    alt: '',
    decorative: true,
    status: 'fallback',
    source: 'Original abstract cover',
    creditOrPermission: 'Created for this portfolio; used as a safe fallback pending approved product imagery.',
  },
  'session-organizer': {
    src: '/images/projects/classcraft.jpg',
    alt: '',
    decorative: true,
    status: 'fallback',
    source: 'Original abstract cover',
    creditOrPermission: 'Created for this portfolio; used as a safe fallback pending approved product imagery.',
  },
  coachly: {
    src: '/images/projects/coachly.jpg',
    alt: '',
    decorative: true,
    status: 'fallback',
    source: 'Original abstract cover',
    creditOrPermission: 'Created for this portfolio; used as a safe fallback pending approved product imagery.',
  },
  ottolearn: {
    src: '/images/projects/learning.jpg',
    alt: '',
    decorative: true,
    status: 'fallback',
    source: 'Original abstract cover',
    creditOrPermission: 'Created for this portfolio; used as a safe fallback pending approved product imagery.',
  },
  'teacher-success-pathways': {
    src: '/images/projects/learning.jpg',
    alt: '',
    decorative: true,
    status: 'fallback',
    source: 'Original abstract cover',
    creditOrPermission: 'Created for this portfolio; used as a safe fallback pending approved product imagery.',
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
