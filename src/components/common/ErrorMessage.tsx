import React from 'react';
import { Alert, AlertProps, Button, Box } from '@mui/material';

export interface ErrorMessageProps extends Omit<AlertProps, 'severity'> {
  title?: string;
  message: string;
  onRetry?: () => void;
  showDetails?: boolean;
  details?: string;
  severity?: 'error' | 'warning' | 'info' | 'success';
}

/**
 * ErrorMessage Component
 * Display error/warning messages with optional retry action and expandable details
 * 
 * @param title - Optional title for the error message
 * @param message - Main error message text
 * @param onRetry - Optional callback for retry button
 * @param showDetails - Whether to show expandable details section
 * @param details - Additional error details (stack trace, error code, etc.)
 * @param severity - Alert severity level (default: 'error')
 * @param ...rest - Additional Alert component props
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title,
  message,
  onRetry,
  showDetails = false,
  details,
  severity = 'error',
  ...rest
}) => {
  const [expandDetails, setExpandDetails] = React.useState(false);

  return (
    <Alert
      severity={severity}
      sx={{
        marginY: '1rem',
      }}
      {...rest}
    >
      <Box>
        {title && (
          <Box
            component="h3"
            sx={{
              margin: '0 0 0.5rem 0',
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            {title}
          </Box>
        )}
        <Box sx={{ marginBottom: onRetry || (showDetails && details) ? '0.75rem' : 0 }}>
          {message}
        </Box>
        
        <Box sx={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {onRetry && (
            <Button
              size="small"
              variant="outlined"
              onClick={onRetry}
              sx={{
                color: `${severity}.main`,
                borderColor: `${severity}.main`,
                '&:hover': {
                  borderColor: `${severity}.dark`,
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              Retry
            </Button>
          )}
          
          {showDetails && details && (
            <Button
              size="small"
              variant="text"
              onClick={() => setExpandDetails(!expandDetails)}
              sx={{
                color: `${severity}.main`,
                textTransform: 'none',
                padding: '4px 8px',
              }}
            >
              {expandDetails ? 'Hide Details' : 'Show Details'}
            </Button>
          )}
        </Box>

        {expandDetails && details && (
          <Box
            sx={{
              marginTop: '0.75rem',
              padding: '0.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              borderRadius: '4px',
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              maxHeight: '200px',
              overflow: 'auto',
            }}
          >
            {details}
          </Box>
        )}
      </Box>
    </Alert>
  );
};

export default ErrorMessage;
