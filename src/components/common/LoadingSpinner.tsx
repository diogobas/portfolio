import React from 'react';
import { Box, CircularProgress, CircularProgressProps, Typography } from '@mui/material';

export interface LoadingSpinnerProps extends Omit<CircularProgressProps, 'variant'> {
  message?: string;
  fullHeight?: boolean;
  containerProps?: React.ComponentProps<typeof Box>;
}

/**
 * LoadingSpinner Component
 * Display loading state with optional message
 * 
 * @param message - Optional text to display below spinner
 * @param fullHeight - If true, uses minHeight 100vh for full-screen loading
 * @param containerProps - Additional Box component props
 * @param ...rest - CircularProgress props (size, color, thickness, etc.)
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message,
  fullHeight = false,
  containerProps,
  size = 40,
  color = 'primary',
  ...rest
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: fullHeight ? '100vh' : 'auto',
        padding: '2rem',
        gap: '1rem',
      }}
      {...containerProps}
    >
      <CircularProgress size={size} color={color} {...rest} />
      {message && (
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LoadingSpinner;
