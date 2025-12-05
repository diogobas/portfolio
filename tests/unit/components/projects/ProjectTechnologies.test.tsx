import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../setup/test-utils';
import { ProjectTechnologies } from '@/components/projects';

describe('ProjectTechnologies', () => {
  it('renders inline badges', () => {
    renderWithProviders(
      <ProjectTechnologies technologies={["React", "TypeScript", "MUI"]} variant="inline" />
    );
    expect(screen.getByRole('list', { name: /technologies/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/technology: react/i)).toBeInTheDocument();
  });

  it('fires onTechnologyClick when clickable', () => {
    const onClick = jest.fn();
    renderWithProviders(
      <ProjectTechnologies technologies={["React", "TypeScript"]} clickable onTechnologyClick={onClick} />
    );
    fireEvent.keyPress(screen.getByLabelText(/technology: react/i), { key: 'Enter', code: 'Enter' });
    expect(onClick).toHaveBeenCalledWith('React');
  });
});
