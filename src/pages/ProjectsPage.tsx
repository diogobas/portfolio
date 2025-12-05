import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useProjects } from '@/hooks/useProjects';
import { ProjectGrid, ProjectDetailModal } from '@/components/projects';
import { VideoModal } from '@/components/common';

const ProjectsPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
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
        onDemoClick={(id) => {
          if (id === 'teacher-pathways') setOpenVideo(true);
        }}
        showArtwork
      />

      <ProjectDetailModal
        open={open}
        projectId={selectedId}
        onClose={() => setOpen(false)}
      />

      <VideoModal
        open={openVideo}
        title="Teacher Success Pathways - Demo"
        videoUrl="https://youtu.be/cO-ZP9HM-r8?si=PMrxD6WkV9CjThfe"
        onClose={() => setOpenVideo(false)}
      />
    </Container>
  );
};

export default ProjectsPage;
