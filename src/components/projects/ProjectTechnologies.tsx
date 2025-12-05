import React from 'react';
import { Box, Stack, Typography, Chip, Paper, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { Badge } from '@/components/common';

interface ProjectTechnologiesProps {
  technologies: string[];
  variant?: 'inline' | 'list' | 'grid' | 'wrapped';
  onTechnologyClick?: (technology: string) => void;
  clickable?: boolean;
  title?: string;
  maxDisplay?: number;
  showAll?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const MotionChip = motion(Chip);
const MotionBadge = motion(Badge);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

/**
 * ProjectTechnologies Component
 *
 * Displays technology stack for a project in multiple formats:
 * - Inline: Horizontal flow of tags (default)
 * - List: Vertical list with descriptions
 * - Grid: Organized grid layout
 * - Wrapped: Wrapped flow layout
 *
 * Features:
 * - Multiple display variants
 * - Click handler for filtering projects by tech
 * - Responsive sizing
 * - Animated appearance
 * - Keyboard accessible
 * - Limit display with "show more" option
 */
export const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({
  technologies,
  variant = 'inline',
  onTechnologyClick,
  clickable = false,
  title,
  maxDisplay,
  showAll = false,
  size = 'medium',
}) => {
  const displayTechs = !showAll && maxDisplay ? technologies.slice(0, maxDisplay) : technologies;
  const hiddenCount = !showAll && maxDisplay ? technologies.length - maxDisplay : 0;

  const handleTechClick = (tech: string) => {
    if (onTechnologyClick) {
      onTechnologyClick(tech);
    }
  };

  const getSizeProps = () => {
    switch (size) {
      case 'small':
        return { variant: 'outlined' as const, fontSize: '0.75rem' };
      case 'large':
        return { variant: 'filled' as const, fontSize: '1rem' };
      default:
        return { variant: 'outlined' as const, fontSize: '0.875rem' };
    }
  };

  // Inline Variant (wrapped flow)
  if (variant === 'inline' || variant === 'wrapped') {
    return (
      <Box>
        {title && (
          <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
            {title}
          </Typography>
        )}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            flexWrap: 'wrap',
            gap: 1,
          }}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          role="list"
          aria-label="Technologies"
        >
          {displayTechs.map((tech) => (
            <MotionBadge
              key={tech}
              label={tech}
              onClick={clickable ? () => handleTechClick(tech) : undefined}
              sx={{
                cursor: clickable ? 'pointer' : 'default',
                '&:hover': clickable
                  ? {
                      backgroundColor: (theme) => theme.palette.primary.light,
                      color: 'white',
                    }
                  : {},
              }}
              variants={itemVariants}
              role="listitem"
              tabIndex={clickable ? 0 : -1}
              aria-label={`Technology: ${tech}`}
              onKeyPress={(e) => {
                if (clickable && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleTechClick(tech);
                }
              }}
            />
          ))}
          {hiddenCount > 0 && (
            <Chip
              label={`+${hiddenCount} more`}
              variant="outlined"
              size="small"
              component={motion.div}
              variants={itemVariants}
            />
          )}
        </Stack>
      </Box>
    );
  }

  // List Variant
  if (variant === 'list') {
    return (
      <Box>
        {title && (
          <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
            {title}
          </Typography>
        )}
        <Paper elevation={0} variant="outlined">
          <List
            component={motion.ul}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            sx={{ py: 0 }}
            aria-label="Technologies list"
          >
            {displayTechs.map((tech, index) => (
              <motion.li key={tech} variants={itemVariants} style={{ listStyle: 'none' }}>
                <ListItem
                  button
                  disabled={!clickable}
                  onClick={clickable ? () => handleTechClick(tech) : undefined}
                  sx={{
                    py: 1,
                    borderBottom: index < displayTechs.length - 1 ? '1px solid' : 'none',
                    borderColor: 'divider',
                    '&:hover': clickable
                      ? {
                          backgroundColor: (theme) => theme.palette.action.hover,
                        }
                      : {},
                  }}
                >
                  <ListItemText
                    primary={tech}
                    primaryTypographyProps={{
                      variant: 'body2',
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              </motion.li>
            ))}
          </List>
        </Paper>
      </Box>
    );
  }

  // Grid Variant
  if (variant === 'grid') {
    return (
      <Box>
        {title && (
          <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
            {title}
          </Typography>
        )}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 2,
          }}
          role="list"
          aria-label="Technologies"
        >
          {displayTechs.map((tech) => (
            <MotionBadge
              key={tech}
              label={tech}
              onClick={clickable ? () => handleTechClick(tech) : undefined}
              sx={{
                width: '100%',
                justifyContent: 'center',
                cursor: clickable ? 'pointer' : 'default',
                '&:hover': clickable
                  ? {
                      backgroundColor: (theme) => theme.palette.primary.light,
                      color: 'white',
                    }
                  : {},
              }}
              variants={itemVariants}
              role="listitem"
              tabIndex={clickable ? 0 : -1}
              aria-label={`Technology: ${tech}`}
              onKeyPress={(e) => {
                if (clickable && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleTechClick(tech);
                }
              }}
            />
          ))}
        </Box>
      </Box>
    );
  }

  return null;
};

export default ProjectTechnologies;
