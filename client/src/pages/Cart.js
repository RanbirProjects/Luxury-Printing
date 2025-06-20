import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Cart = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={4}>
        {/* Cart items will be added here */}
      </Grid>
    </Container>
  );
};

export default Cart; 