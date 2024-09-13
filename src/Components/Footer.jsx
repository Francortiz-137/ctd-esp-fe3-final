import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.footer.backgroundColor,
        color: theme.palette.footer.color,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'center', sm: 'space-between' },
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
          src="/images/LogoDH.svg"
          alt="DH-logo"
          sx={{
            width: 200,
            filter: theme.palette.mode === 'dark' ? 'invert(0)' : 'invert(1)',
          }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{
          mt: { xs: 2, sm: 0 },
          mb: { xs: 2, sm: 0 },
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" sx={{ marginX: 2 }}>
          © 2024 Franco Ortiz.
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        sx={{
          mt: { xs: 2, sm: 0 },
        }}
      >
        <IconButton
          sx={{
            color: theme.palette.text.primary,
          }}
          href="https://facebook.com"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          sx={{
            color: theme.palette.text.primary,
          }}
          href="https://instagram.com"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{
            color: theme.palette.text.primary,
          }}
          href="https://whatsapp.com"
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
