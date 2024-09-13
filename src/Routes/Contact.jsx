import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Form from '../Components/Form';
import Grid from '@mui/material/Grid2';
import { Typography, Box } from '@mui/material';

const Contact = () => {
  const theme = useTheme();
  const [successMessage, setSuccessMessage] = useState('');

  const handleFormSubmitSuccess = (message) => {
    setSuccessMessage(message);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh', 
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Grid 
        size={{ xs: 12, sm: 8, md: 6 }} 
        sx={{ 
          px: { xs: 2, sm: 0 },
        }}
      >
        <Form onSubmitSuccess={handleFormSubmitSuccess} />
        {successMessage && (
          <Typography
            variant="body1"
            color={theme.palette.success.main}
            mt={2}
          >
            {successMessage}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Contact;
