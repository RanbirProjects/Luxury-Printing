import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { PageContainer, ContentWrapper, backgroundImages, fadeIn } from '../styles/sharedStyles';
import { styled } from '@mui/material/styles';

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

const products = [
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
  {
    id: 4,
    name: 'Custom Stationery',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    description: 'Personalized stationery for your business',
  },
  {
    id: 5,
    name: 'Photo Books',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    description: 'Premium photo books with custom layouts',
  },
  {
    id: 6,
    name: 'Event Programs',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    description: 'Elegant programs for special events',
  },
];

const Products = () => {
  return (
    <PageContainer style={{ backgroundImage: `url(${backgroundImages.products})` }}>
      <ContentWrapper>
        <Container maxWidth="lg" sx={{ py: 8 }}>
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
            Our Products
          </Typography>
          <Grid container spacing={4}>
            {products.map((product, index) => (
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
                      size="small"
                      color="primary"
                      href={`/products/${product.id}`}
                    >
                      Learn More
                    </Button>
                    <Button
                      size="small"
                      color="secondary"
                      href={`/products/${product.id}`}
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

export default Products; 