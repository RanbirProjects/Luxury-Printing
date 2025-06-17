import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Box,
  Container,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import {
  ShoppingCart as CartIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { totalQuantity } = useSelector((state) => state.cart);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HideOnScroll>
      <AppBar position="sticky" color="default" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'primary.main',
                fontFamily: 'Playfair Display',
                fontWeight: 700,
              }}
            >
              Luxury Printing
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button
                component={RouterLink}
                to="/products"
                color="inherit"
              >
                Products
              </Button>
              <Button
                component={RouterLink}
                to="/faq"
                color="inherit"
              >
                FAQ
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                color="inherit"
              >
                Contact
              </Button>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
              <IconButton
                component={RouterLink}
                to="/cart"
                color="inherit"
                size="large"
              >
                <Badge badgeContent={totalQuantity} color="secondary">
                  <CartIcon />
                </Badge>
              </IconButton>

              {isAuthenticated ? (
                <>
                  <IconButton
                    onClick={handleMenu}
                    color="inherit"
                    size="large"
                  >
                    <PersonIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem component={RouterLink} to="/profile" onClick={handleClose}>
                      Profile
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/orders" onClick={handleClose}>
                      Orders
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  component={RouterLink}
                  to="/login"
                  color="inherit"
                  sx={{ ml: 1 }}
                >
                  Login
                </Button>
              )}

              <IconButton
                sx={{ display: { md: 'none' }, ml: 1 }}
                color="inherit"
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 