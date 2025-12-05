import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Stack,
  Chip,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ImageWithFallback } from '@/components/common';

interface ProjectCardProps {
  project: Project;
  onCardClick?: (projectId: string) => void;
  showArtwork?: boolean;
  variant?: 'default' | 'compact';
  className?: string;
  sx?: SxProps<Theme>;
}

const MotionCard = motion(Card);

/**
 * ProjectCard Component
 *
 * Displays a single project in card format with:
 * - Project image/artwork
 * - Title and company
 * - Brief description
 * - Technology badges
 * - Click handler for navigation
 *
 * Features:
 * - Responsive design (adapts to mobile/tablet/desktop)
 * - Framer Motion animations on hover
 * - Accessible keyboard navigation
 * - Error states with ImageWithFallback
 * - Technology tags using Badge component
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onCardClick,
  showArtwork = true,
  variant = 'default',
  className,
  sx,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(project.id);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  // Extract technology names from Technology objects
  const technologyNames = project.technologies.map((tech) =>
    typeof tech === 'string' ? tech : tech.name
  );

  // Display 2-3 technologies in card preview
  const displayTechnologies = technologyNames.slice(0, variant === 'compact' ? 2 : 3);

  // Get first image or use demo URL
  const imageUrl = project.images?.[0]?.url || project.thumbnailUrl;

  return (
    <MotionCard
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={[
        {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: (theme) => theme.shadows[12],
            transform: 'translateY(-8px)',
          },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      tabIndex={0}
      role="button"
      aria-label={`Project: ${project.title}`}
      onKeyPress={handleKeyPress}
    >
      {/* Project Image */}
      {showArtwork && imageUrl && (
        <CardMedia
          component="div"
          sx={{
            position: 'relative',
            width: '100%',
            paddingTop: '66.66%', // 3:2 aspect ratio
            backgroundColor: (theme) => theme.palette.action.hover,
            overflow: 'hidden',
          }}
        >
          <ImageWithFallback
            src={imageUrl}
            alt={project.title}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease-in-out',
              transform: isHovering ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        </CardMedia>
      )}

      {/* Project Content */}
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Title */}
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            mb: 0.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.title}
        </Typography>

        {/* Short Description */}
        {project.shortDescription && (
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              mb: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: 1.5,
            }}
          >
            {project.shortDescription}
          </Typography>
        )}

        {/* Technologies */}
        {displayTechnologies.length > 0 && (
          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              flexWrap: 'wrap',
              gap: 0.5,
            }}
          >
            {displayTechnologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  height: 'auto',
                  py: 0.25,
                  px: 0.75,
                }}
              />
            ))}
            {technologyNames.length > displayTechnologies.length && (
              <Chip
                label={`+${technologyNames.length - displayTechnologies.length}`}
                size="small"
                variant="outlined"
                sx={{
                  height: 'auto',
                  py: 0.25,
                  px: 0.75,
                }}
              />
            )}
          </Stack>
        )}
      </CardContent>

      {/* Action Buttons */}
      <CardActions>
        <Button
          size="small"
          onClick={handleCardClick}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          View Details
        </Button>
      </CardActions>
    </MotionCard>
  );
};

export default ProjectCard;
