import { describe, expect, it } from 'vitest';
import { experiences, profile, socialLinks } from './profile';

describe('profile content', () => {
  it('exposes a public email address without a phone number', () => {
    expect(profile.email).toBe('diogovvb@gmail.com');
    expect(Object.values(profile).join(' ')).not.toMatch(/\+\d[\d\s()-]{7,}/);
  });

  it('keeps the experience list ordered from current to earlier roles', () => {
    expect(experiences.map((experience) => experience.company)).toEqual([
      'Pearson Education · eDynamic Learning',
      'Houghton Mifflin Harcourt',
      'TEKsystems · HMH engagement',
      'Neovation Learning Solutions',
    ]);
  });

  it('provides email, LinkedIn, and GitHub contact paths', () => {
    expect(socialLinks.map((link) => link.label)).toEqual(['Email', 'LinkedIn', 'GitHub']);
  });
});
