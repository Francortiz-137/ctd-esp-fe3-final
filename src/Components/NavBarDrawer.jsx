import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer, Typography } from '@mui/material';
import { Home as HomeIcon, ContactPhone as ContactPhoneIcon, Star as StarIcon } from '@mui/icons-material';
import { useDentistStates } from '../Components/utils/global.context'; // Importar el contexto del tema
import Logo from './Logo';

const drawerWidth = 300;

const NavBarDrawer = ({ open, onClose }) => {
  const { state } = useDentistStates(); // Acceder al estado del tema

  const navItems = [
    { text: 'Home', icon: <HomeIcon />, link: '/' },
    { text: 'Contact', icon: <ContactPhoneIcon />, link: '/contact' },
    { text: 'Favs', icon: <StarIcon />, link: '/favs' },
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          backgroundColor: state.theme === 'light' ? '#ffffff' : '#1e1e1e', // Color de fondo según el tema
          color: state.theme === 'light' ? '#000' : '#fff', // Color del texto según el tema
        },
      }}
    >
      <Box onClick={onClose} sx={{ textAlign: 'center' }}>
        <Box p={2}>
            <Logo/>
        </Box>
        
        <Divider sx={{ backgroundColor: state.theme === 'light' ? '#000' : '#fff' }} />
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={item.link}>
                <ListItemIcon sx={{ color: state.theme === 'light' ? '#000' : '#fff' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavBarDrawer;
