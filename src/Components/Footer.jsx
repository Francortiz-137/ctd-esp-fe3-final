import React, { useContext } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { GlobalContext } from './utils/global.context';

const Footer = () => {
  const { state } = useContext(GlobalContext);

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: state.theme === 'dark' ? '#444' : '#fff',
        color: state.theme === 'dark' ? '#fff' : '#000',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, 
        justifyContent: { xs: 'center', sm: 'space-between' }, // En xs, centrar contenido; en sm, espacio entre
        alignItems: 'center',
        padding: 2,
        marginTop: 0,
        minHeight: '9vh',
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{
          mb: { xs: 2, sm: 0 },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Typography variant="body1" sx={{ marginRight: 1 }}>
          Powered by
        </Typography>
        <Box
          component="img"
          src="./images/DH.png"
          alt="DH-logo"
          sx={{ width: 200 }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        sx={{
          mt: { xs: 2, sm: 0 },
          // En xs, los iconos están debajo del texto e imagen; en sm y mayores, a la derecha
        }}
      >
        <IconButton color="inherit" href="https://facebook.com">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit" href="https://whatsapp.com">
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
