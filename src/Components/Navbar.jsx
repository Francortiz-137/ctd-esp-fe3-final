import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Container } from '@mui/material';
import { LightMode, DarkMode, Menu as MenuIcon } from '@mui/icons-material';
import { useDentistStates } from '../Components/utils/global.context';
import NavBarDrawer from './NavBarDrawer'; // Importar el nuevo componente
import Logo from './Logo';

const Navbar = () => {
  const { state, dispatch } = useDentistStates();
  const [drawerOpen, setDrawerOpen] = useState(false);

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
          backgroundColor: state.theme === 'light' ? '#f5f5f5' : '#1e1e1e',
          color: state.theme === 'light' ? '#000' : '#fff',
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
            <Logo/>

            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Container sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button sx={{ color: state.theme === 'light' ? '#000' : '#fff' }} component={Link} to="/">
                Home
              </Button>
              <Button sx={{ color: state.theme === 'light' ? '#000' : '#fff' }} component={Link} to="/contact">
                Contact
              </Button>
              <Button sx={{ color: state.theme === 'light' ? '#000' : '#fff' }} component={Link} to="/favs">
                Favs
              </Button>
            </Container>

            <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 2 }}>
              {state.theme === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Render del Drawer desde el lado */}
      <NavBarDrawer open={drawerOpen} onClose={handleDrawerToggle} />
    </>
  );
};

export default Navbar;
