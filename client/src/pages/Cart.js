import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);

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