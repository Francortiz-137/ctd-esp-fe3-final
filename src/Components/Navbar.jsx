import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';
import { useDentistStates } from '../Components/utils/global.context';
import { AppBar, Toolbar, Typography, Button, IconButton, Container, Menu, MenuItem } from '@mui/material';
import { LightMode, DarkMode, Menu as MenuIcon } from '@mui/icons-material';

const Navbar = () => {
  const { state, dispatch } = useDentistStates();
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: state.theme === 'light' ? '#f5f5f5' : '#1e1e1e',
          color: state.theme === 'light' ? '#000' : '#fff',
          height: '6vh',
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'red' }}>D</span><span>H</span>
              <span style={{ fontWeight: '400', paddingLeft: '8px' }}>ODONTO</span>
            </Typography>

            <IconButton
              color="inherit"
              edge="start"
              onClick={handleMenuOpen}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Container sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button 
                sx={{ color: state.theme === 'light' ? '#000' : '#fff' }} 
                component={Link} 
                to={routes.home}
              >
                Home
              </Button>
              <Button 
                sx={{ color: state.theme === 'light' ? '#000' : '#fff' }} 
                component={Link} 
                to={routes.contact}
              >
                Contact
              </Button>
              <Button 
                sx={{ color: state.theme === 'light' ? '#000' : '#fff' }} 
                component={Link} 
                to={routes.favs}
              >
                Favs
              </Button>
            </Container>
            <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 2 }}>
              {state.theme === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            bgcolor: state.theme === 'light' ? '#ffffff' : '#1e1e1e',
            color: state.theme === 'light' ? '#000000' : '#ffffff',
            border: `1px solid ${state.theme === 'light' ? '#e0e0e0' : '#333333'}`,
            boxShadow: state.theme === 'light'
              ? '0px 4px 8px rgba(0, 0, 0, 0.2)'
              : '0px 4px 8px rgba(0, 0, 0, 0.5)',
          }
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem component={Link} to={routes.home} onClick={handleMenuClose} sx={{ color: state.theme === 'light' ? '#000' : '#fff' }}>
          Home
        </MenuItem>
        <MenuItem component={Link} to={routes.contact} onClick={handleMenuClose} sx={{ color: state.theme === 'light' ? '#000' : '#fff' }}>
          Contact
        </MenuItem>
        <MenuItem component={Link} to={routes.favs} onClick={handleMenuClose} sx={{ color: state.theme === 'light' ? '#000' : '#fff' }}>
          Favs
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
