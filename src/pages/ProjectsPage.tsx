import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useProjects } from '@/hooks/useProjects';
import { ProjectGrid, ProjectDetailModal } from '@/components/projects';

const ProjectsPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const { data: projects = [], isLoading, error, refetch } = useProjects(true);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ProjectGrid
        projects={projects}
        isLoading={isLoading}
        error={error ?? null}
        onRetry={refetch}
        onProjectClick={(id) => {
          setSelectedId(id);
          setOpen(true);
        }}
        showArtwork
      />

      <ProjectDetailModal
        open={open}
        projectId={selectedId}
        onClose={() => setOpen(false)}
      />
    </Container>
  );
};

export default ProjectsPage;
