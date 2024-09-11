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
        backgroundColor: state.theme === 'dark' ? '#333' : '#fff',
        color: state.theme === 'dark' ? '#fff' : '#000',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        mt: 4,
      }}
    >
      <Box display="flex" alignItems="center">
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

      <Box display="flex">
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
