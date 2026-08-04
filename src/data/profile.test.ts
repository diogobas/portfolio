import { describe, expect, it } from 'vitest';
import { careerExperiences, homeExperiences, profile, resume, socialLinks } from './resume';

describe('profile content', () => {
  it('exposes a public email address without a phone number', () => {
    expect(profile.email).toBe('diogovvb@gmail.com');
    expect(resume.identity.location).toBe('Canada');
    expect(JSON.stringify(resume)).not.toMatch(/\+\d[\d\s()-]{7,}/);
  });

  it('keeps a single complete chronology and derives the home selection from it', () => {
    expect(careerExperiences).toBe(resume.experience);
    expect(resume.experience.map((experience) => experience.company)).toEqual([
      'Pearson Education - eDynamic Learning',
      'Fairstone Bank',
      'Houghton Mifflin Harcourt',
      'TEKsystems - HMH engagement',
      'Neovation Learning Solutions',
      'PPI-Multitask',
      'Dexco (formerly Duratex)',
      'Otimize-TI - Tecnologia Otimizando Negocios',
      'Indra',
      'SENAI Goias',
      'Sistema Inteligente de Automacao PLUS - SIAPLUS',
    ]);
    expect(homeExperiences.map((experience) => experience.company)).toEqual([
      'Pearson Education - eDynamic Learning',
      'Houghton Mifflin Harcourt',
      'TEKsystems - HMH engagement',
      'Neovation Learning Solutions',
    ]);
  });

  it('provides email, LinkedIn, and GitHub contact paths', () => {
    expect(socialLinks.map((link) => link.label)).toEqual(['Email', 'LinkedIn', 'GitHub']);
  });
});
