import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Form from '../Components/Form'; 
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

const Contact = () => {
  const { state } = useContext(GlobalContext);
  const [successMessage, setSuccessMessage] = useState('');

  // Esta función será pasada al Form para manejar el mensaje de éxito
  const handleFormSubmitSuccess = (message) => {
    setSuccessMessage(message);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid size={{xs:12, sm:8, md:6}} >
        <Form onSubmitSuccess={handleFormSubmitSuccess} />
        {successMessage && (
          <Typography variant="body1" color="success.main" mt={2}>
            {successMessage}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Contact;
