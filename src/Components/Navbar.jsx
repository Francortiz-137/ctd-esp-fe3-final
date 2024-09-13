import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Container } from '@mui/material';
import { LightMode, DarkMode, Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useDentistStates } from '../Components/utils/global.context';
import NavBarDrawer from './NavBarDrawer';
import Logo from './Logo';

const Navbar = () => {
  const { state, dispatch } = useDentistStates();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.navbar.backgroundColor,
          color: theme.palette.navbar.color,
        }}
      >
        <Toolbar>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Logo />

            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Container sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ color: theme.palette.navbar.color }}
                component={Link}
                to="/"
              >
                Home
              </Button>
              <Button
                sx={{ color: theme.palette.navbar.color }}
                component={Link}
                to="/contact"
              >
                Contact
              </Button>
              <Button
                sx={{ color: theme.palette.navbar.color }} 
                component={Link}
                to="/favs"
              >
                Favs
              </Button>
            </Container>

            <IconButton
              color="inherit"
              onClick={toggleTheme}
              sx={{ ml: 2 }}
            >
              {state.theme === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>

      <NavBarDrawer open={drawerOpen} onClose={handleDrawerToggle} />
    </>
  );
};

export default Navbar;
