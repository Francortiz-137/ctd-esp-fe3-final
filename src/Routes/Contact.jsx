import { useState } from 'react';
import { useDentistStates } from '../Components/utils/global.context';
import Form from '../Components/Form'; 
import Grid from '@mui/material/Grid2';
import { Typography, Box } from '@mui/material';

const Contact = () => {
  const { state } = useDentistStates();
  const [successMessage, setSuccessMessage] = useState('');

  const handleFormSubmitSuccess = (message) => {
    setSuccessMessage(message);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: '85vh', 
        backgroundColor: state.theme === 'light' ? '#f5f5f5' : '#333',
      }}
    >
      <Grid 
        size={{xs:12, sm:8, md:6}} 
        sx={{ 
          px: { xs: 2, sm: 0 }, // Añade margen horizontal en xs, sin margen en sm y mayores
        }}
      >
        <Form onSubmitSuccess={handleFormSubmitSuccess} />
        {successMessage && (
          <Typography
            variant="body1"
            color={state.theme === 'light' ? 'success.main' : 'success.light'}
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
