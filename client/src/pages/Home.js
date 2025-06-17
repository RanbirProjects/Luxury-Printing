import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { PageContainer, ContentWrapper, backgroundImages, fadeIn } from '../styles/sharedStyles';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImages.home})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  animation: `${fadeIn} 0.8s ease-out`,
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Business Cards',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury business cards with premium finishes',
  },
  {
    id: 2,
    name: 'Wedding Invitations',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    description: 'Elegant wedding invitations with custom designs',
  },
  {
    id: 3,
    name: 'Art Prints',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    description: 'High-quality art prints on premium paper',
  },
];

const Home = () => {
  return (
    <PageContainer style={{ backgroundImage: `url(${backgroundImages.home})` }}>
      <ContentWrapper>
        <HeroSection>
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: 'Playfair Display',
                fontWeight: 700,
                mb: 4,
                animation: `${fadeIn} 1s ease-out`,
              }}
            >
              Luxury Printing Services
            </Typography>
            <Typography 
              variant="h5" 
              paragraph 
              sx={{ 
                mb: 4,
                animation: `${fadeIn} 1.2s ease-out`,
              }}
            >
              Premium quality printing for your most important projects
            </Typography>
            <Box sx={{ animation: `${fadeIn} 1.4s ease-out` }}>
              <Button
                component={RouterLink}
                to="/products"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mr: 2 }}
              >
                View Products
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                color="inherit"
                size="large"
              >
                Get a Quote
              </Button>
            </Box>
          </Container>
        </HeroSection>

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 600,
              mb: 6,
              color: 'white',
            }}
          >
            Featured Products
          </Typography>

          <Grid container spacing={4}>
            {featuredProducts.map((product, index) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                      ${product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      component={RouterLink}
                      to={`/products/${product.id}`}
                      size="small"
                      color="primary"
                    >
                      Learn More
                    </Button>
                    <Button
                      component={RouterLink}
                      to={`/products/${product.id}`}
                      size="small"
                      color="secondary"
                    >
                      Order Now
                    </Button>
                  </CardActions>
                </ProductCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Home; 