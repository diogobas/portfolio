import React from 'react';
import { Box, Container, Typography, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export interface SocialLink {
  label: string;
  url: string;
  icon?: React.ReactNode;
}

interface FooterProps {
  copyright?: string;
  socialLinks?: SocialLink[];
  email?: string;
}

/**
 * Footer Component
 * Footer with copyright, social links, and contact info
 * @param copyright - Copyright notice
 * @param socialLinks - Array of social media links
 * @param email - Contact email
 */
export const Footer: React.FC<FooterProps> = ({
  copyright = `© ${new Date().getFullYear()} Diogo Bastos. All rights reserved.`,
  socialLinks = [],
  email,
}) => {
  return (
    <Box
      component="footer"
      sx={{
        marginTop: 'auto',
        padding: '2rem 1rem',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          {/* Social Links */}
          {socialLinks.length > 0 && (
            <Stack direction="row" spacing={2} justifyContent="center">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  sx={{
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'primary.dark',
                    },
                  }}
                >
                  {link.icon}
                </Link>
              ))}
            </Stack>
          )}

          {/* Email Contact */}
          {email && (
            <Link
              href={`mailto:${email}`}
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {email}
            </Link>
          )}

          {/* Copyright */}
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {copyright}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
