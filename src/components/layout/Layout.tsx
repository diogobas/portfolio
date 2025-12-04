import React, { useState } from 'react';
import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Header } from './Header';
import { Navigation, NavigationLink } from './Navigation';
import { Footer, SocialLink } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  navigationLinks?: NavigationLink[];
  footerSocialLinks?: SocialLink[];
  footerEmail?: string;
  onNavigate?: (path: string) => void;
}

/**
 * Layout Component
 * Main layout wrapper combining Header, Navigation, Footer with main content area
 * Handles responsive layout with mobile drawer navigation
 * @param children - Main content to display
 * @param title - Page title for header
 * @param subtitle - Optional subtitle for header
 * @param navigationLinks - Navigation menu links
 * @param footerSocialLinks - Social media links for footer
 * @param footerEmail - Contact email for footer
 * @param onNavigate - Callback when navigation link is clicked
 */
export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Portfolio',
  subtitle,
  navigationLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ],
  footerSocialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com',
      icon: <GitHubIcon />,
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <LinkedInIcon />,
    },
  ],
  footerEmail = 'diogo@example.com',
  onNavigate,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigationClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate?.(path);
  };

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <Header title={title} subtitle={subtitle} onMenuClick={handleMenuClick} />

      {/* Main Layout Container */}
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          width: '100%',
        }}
      >
        {/* Navigation - Desktop */}
        {!isMobile && (
          <Box
            sx={{
              width: 240,
              borderRight: '1px solid #e0e0e0',
              overflowY: 'auto',
            }}
          >
            <Navigation links={navigationLinks} onLinkClick={handleNavigationClick} />
          </Box>
        )}

        {/* Mobile Navigation Drawer */}
        {isMobile && (
          <Drawer
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            sx={{
              width: 240,
              '& .MuiDrawer-paper': {
                width: 240,
              },
            }}
          >
            <Navigation links={navigationLinks} onLinkClick={handleNavigationClick} />
          </Drawer>
        )}

        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flex: 1,
            overflow: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>

      {/* Footer */}
      <Footer socialLinks={footerSocialLinks} email={footerEmail} />
    </Box>
  );
};

export default Layout;
