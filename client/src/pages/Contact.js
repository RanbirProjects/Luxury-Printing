import React from 'react';
import { Container, Typography, Grid, TextField, Button, Box } from '@mui/material';
import { PageContainer, ContentWrapper, backgroundImages, fadeIn } from '../styles/sharedStyles';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
    },
  },
}));

const ContactBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  animation: `${fadeIn} 0.8s ease-out`,
}));

const Contact = () => {
  return (
    <PageContainer style={{ backgroundImage: `url(${backgroundImages.contact})` }}>
      <ContentWrapper>
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 600,
              mb: 6,
              color: 'white',
              animation: `${fadeIn} 0.8s ease-out`,
            }}
          >
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ContactBox>
                <Typography variant="h6" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography paragraph>
                  123 Luxury Street<br />
                  Brisbane, QLD 4000<br />
                  Phone: (07) 1234 5678<br />
                  Email: info@luxuryprinting.com
                </Typography>
                <Typography variant="body2" sx={{ mt: 4 }}>
                  Business Hours:<br />
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </Typography>
              </ContactBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactBox component="form" noValidate>
                <StyledTextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
                <StyledTextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <StyledTextField
                  margin="normal"
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  id="message"
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send Message
                </Button>
              </ContactBox>
            </Grid>
          </Grid>
        </Container>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Contact; 