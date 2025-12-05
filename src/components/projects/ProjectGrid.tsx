import React from 'react';
import { Grid, Box, Typography, Container, Alert, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';
import { LoadingSpinner, ErrorMessage } from '@/components/common';

interface ProjectGridProps {
  projects: Project[];
  onProjectClick?: (projectId: string) => void;
  isLoading?: boolean;
  error?: Error | null;
  onRetry?: () => void;
  filterTag?: string | null;
  emptyMessage?: string;
  showArtwork?: boolean;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const MotionGrid = motion(Grid);
const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

/**
 * ProjectGrid Component
 *
 * Displays a responsive grid of ProjectCard components with:
 * - Responsive column layout (1-4 columns based on screen size)
 * - Loading state with spinner
 * - Error state with retry button
 * - Empty state with custom message
 * - Optional filtering by tag
 * - Animation on load and hover
 *
 * Features:
 * - Mobile-first responsive design (1 col on mobile → 3+ cols on desktop)
 * - Accessible grid semantics
 * - Staggered animations for visual appeal
 * - Error recovery with retry mechanism
 */
export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onProjectClick,
  isLoading = false,
  error = null,
  onRetry,
  filterTag = null,
  emptyMessage = 'No projects found',
  showArtwork = true,
  columns = {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 3,
  },
}) => {
  // Filter projects by tag if provided
  // Normalize Technology objects to names to support both string and object inputs
  const filteredProjects = filterTag
    ? projects.filter((project) => {
        const techNames = project.technologies.map((t: any) =>
          typeof t === 'string' ? t : t?.name
        );
        return techNames.includes(filterTag);
      })
    : projects;

  // Loading State
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
        }}
      >
        <LoadingSpinner size="large" message="Loading projects..." />
      </Box>
    );
  }

  // Error State
  if (error) {
    return (
      <Container maxWidth="md">
        <ErrorMessage
          message={error.message || 'Failed to load projects'}
          severity="error"
          onRetry={onRetry}
          sx={{ my: 4 }}
        />
      </Container>
    );
  }

  // Empty State
  if (filteredProjects.length === 0) {
    return (
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px',
        }}
      >
        <Alert
          severity="info"
          sx={{
            width: '100%',
            maxWidth: '500px',
          }}
        >
          <Stack spacing={1}>
            <Typography variant="subtitle1" fontWeight={600}>
              {emptyMessage}
            </Typography>
            {filterTag && (
              <Typography variant="body2" color="textSecondary">
                Try adjusting your filters or browse all projects.
              </Typography>
            )}
          </Stack>
        </Alert>
      </MotionBox>
    );
  }

  return (
    <MotionGrid
      container
      spacing={3}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        width: '100%',
      }}
      role="grid"
      aria-label="Projects grid"
    >
      {filteredProjects.map((project) => (
        <MotionGrid
          item
          key={project.id}
          xs={columns.xs}
          sm={columns.sm}
          md={columns.md}
          lg={columns.lg}
          xl={columns.xl}
          variants={itemVariants}
          role="gridcell"
        >
          <ProjectCard
            project={project}
            onCardClick={onProjectClick}
            showArtwork={showArtwork}
            sx={{
              height: '100%',
            }}
          />
        </MotionGrid>
      ))}
    </MotionGrid>
  );
};

export default ProjectGrid;
