import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import { Home as HomeIcon, ContactPhone as ContactPhoneIcon, Star as StarIcon } from '@mui/icons-material';
import Logo from './Logo';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 300;

const NavBarDrawer = ({ open, onClose }) => {
  const theme = useTheme();

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
          backgroundColor: theme.palette.drawer.backgroundColor,
          color: theme.palette.drawer.color,
        },
      }}
    >
      <Box onClick={onClose} sx={{ textAlign: 'center' }}>
        <Box p={2}>
          <Logo />
        </Box>
        
        <Divider sx={{ backgroundColor: theme.palette.text.primary }} />
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={item.link}>
                <ListItemIcon sx={{ color: theme.palette.text.primary }}>{item.icon}</ListItemIcon>
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
