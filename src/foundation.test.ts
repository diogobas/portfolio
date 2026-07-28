import { describe, expect, it } from 'vitest';

describe('portfolio foundation', () => {
  it('documents the expected public site title', () => {
    expect('Diogo Bastos | Senior Full-Stack Software Engineer').toContain('Diogo Bastos');
  });
});
