import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../utils/routes'; // Asegúrate de que la ruta sea correcta
import { GlobalContext } from '../Components/utils/global.context'; // Asegúrate de que la ruta sea correcta
import { AppBar, Toolbar, Typography, Button, IconButton, Container } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';


const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <AppBar position="fixed" color={state.theme === 'light' ? 'default' : 'inherit'}>
      <Toolbar>
        <Container>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DH ODONTO
          </Typography>
          <Button color="inherit" component={Link} to={routes.home}>
            Home
          </Button>
          <Button color="inherit" component={Link} to={routes.contact}>
            Contact
          </Button>
          <Button color="inherit" component={Link} to={routes.favs}>
            Favs
          </Button>
          <IconButton color="inherit" onClick={toggleTheme}>
            {state.theme === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
