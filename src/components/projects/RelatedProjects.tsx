import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ProjectCard } from '@/components/projects';
import projectService from '@/services/projectService';

interface RelatedProjectsProps {
  projectId: string;
  limit?: number;
  onProjectClick?: (projectId: string) => void;
}

const MotionGrid = motion(Grid);

export const RelatedProjects: React.FC<RelatedProjectsProps> = ({ projectId, limit = 4, onProjectClick }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const related = await projectService.getRelatedProjects(projectId, limit);
        if (mounted) setProjects(related);
      } catch (_) {
        if (mounted) setProjects([]);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [projectId, limit]);

  if (!projects.length) return null;

  return (
    <MotionGrid container spacing={3} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {projects.map((p) => (
        <Grid item key={p.id} xs={12} sm={6} md={3}>
          <ProjectCard project={p} onCardClick={onProjectClick} />
        </Grid>
      ))}
    </MotionGrid>
  );
};

export default RelatedProjects;
