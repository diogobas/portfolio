import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  onMenuClick?: () => void;
}

/**
 * Header Component
 * Top navigation bar with branding and menu trigger
 * @param title - Header title/brand name
 * @param subtitle - Optional subtitle
 * @param onMenuClick - Callback when hamburger menu is clicked
 */
export const Header: React.FC<HeaderProps> = ({ title = 'Portfolio', subtitle, onMenuClick }) => {
  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.85rem' }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
