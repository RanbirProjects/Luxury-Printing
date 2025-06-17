import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Product Details
      </Typography>
      <Grid container spacing={4}>
        {/* Product details will be added here */}
      </Grid>
    </Container>
  );
};

export default ProductDetail; 