import React from 'react';
import { Container, ContainerProps, Box, Typography } from '@mui/material';

export interface PageContainerProps extends Omit<ContainerProps, 'children'> {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
}

/**
 * PageContainer Component
 * Consistent container for all pages with optional title and subtitle
 * Provides responsive padding and maxWidth constraints
 * 
 * @param children - Page content
 * @param title - Optional page title
 * @param subtitle - Optional page subtitle/description
 * @param headerAction - Optional action component (button, link, etc.)
 * @param maxWidth - Container maxWidth (default: 'lg')
 * @param ...rest - Additional Container props
 */
export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  subtitle,
  headerAction,
  maxWidth = 'lg',
  ...rest
}) => {
  return (
    <Container maxWidth={maxWidth} {...rest}>
      <Box sx={{ paddingY: '2rem' }}>
        {/* Page Header */}
        {(title || subtitle || headerAction) && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '2rem',
              gap: '1rem',
            }}
          >
            <Box sx={{ flex: 1 }}>
              {title && (
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {title}
                </Typography>
              )}
              {subtitle && (
                <Typography variant="body1" color="text.secondary">
                  {subtitle}
                </Typography>
              )}
            </Box>
            {headerAction && (
              <Box sx={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                {headerAction}
              </Box>
            )}
          </Box>
        )}

        {/* Page Content */}
        <Box>
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default PageContainer;
