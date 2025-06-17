import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Luxury Printing
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Premium printing services for your luxury needs. Quality that speaks for itself.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link
              component={RouterLink}
              to="/products"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Products
            </Link>
            <Link
              component={RouterLink}
              to="/faq"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              FAQ
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Contact
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              About Us
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              123 Luxury Street
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Brisbane, QLD 4000
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: (07) 1234 5678
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: info@luxuryprinting.com
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Luxury Printing. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

 