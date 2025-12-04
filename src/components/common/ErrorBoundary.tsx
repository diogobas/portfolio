import React, { Component, ReactNode } from 'react';
import { Alert, Box, Button, Container, Typography } from '@mui/material';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary Component
 * Catches React render errors and prevents white-screen crashes
 * Displays user-friendly error message with recovery option
 * 
 * @param children - React components to wrap
 * @param fallback - Custom fallback UI (optional, uses default if not provided)
 * @param onError - Callback when error is caught (for logging/reporting)
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error for debugging
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // Call optional error callback (e.g., for reporting to error tracking service)
    this.props.onError?.(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <Box
            sx={{
              minHeight: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <Container maxWidth="sm">
              <Alert severity="error" sx={{ marginBottom: '1rem' }}>
                <Typography variant="h6" gutterBottom>
                  Something went wrong
                </Typography>
                <Typography variant="body2" color="inherit" sx={{ marginBottom: '1rem' }}>
                  We encountered an error while rendering this component. Please try again or 
                  contact support if the problem persists.
                </Typography>
                {process.env.NODE_ENV === 'development' && (
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{
                      marginTop: '1rem',
                      padding: '0.5rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      borderRadius: '4px',
                      fontFamily: 'monospace',
                      wordBreak: 'break-all',
                    }}
                  >
                    {this.state.error?.toString()}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  size="small"
                  onClick={this.handleReset}
                  sx={{ marginTop: '1rem' }}
                >
                  Try Again
                </Button>
              </Alert>
            </Container>
          </Box>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
