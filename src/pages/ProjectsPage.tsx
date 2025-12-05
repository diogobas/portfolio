import React from 'react';
import { Container } from '@mui/material';
import { useProjects } from '@/hooks/useProjects';
import { ProjectGrid } from '@/components/projects';

const ProjectsPage: React.FC = () => {
  const { data: projects = [], isLoading, error, refetch } = useProjects(true);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ProjectGrid
        projects={projects}
        isLoading={isLoading}
        error={error ?? null}
        onRetry={refetch}
        showArtwork
      />
    </Container>
  );
};

export default ProjectsPage;
