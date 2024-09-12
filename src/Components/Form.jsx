import React, { useState, useContext } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { GlobalContext } from '../Components/utils/global.context';

const Form = ({ onSubmitSuccess }) => {
  const { state } = useContext(GlobalContext);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '' };

    if (formData.name.length <= 5) {
      newErrors.name = 'El nombre debe tener más de 5 caracteres';
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico debe tener un formato válido';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Datos del formulario:', formData);
      onSubmitSuccess(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <Box
      p={3}
      boxShadow={3}
      borderRadius={2}
      bgcolor={state.theme === 'dark' ? '#424242' : '#fff'} // Background color based on theme
      color={state.theme === 'dark' ? '#fff' : '#000'} // Text color based on theme
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Contacto
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre completo"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          fullWidth
          margin="normal"
          sx={{
            '& .MuiInputBase-root': {
              color: state.theme === 'dark' ? '#fff' : '#000', // Input text color based on theme
            },
            '& .MuiFormLabel-root': {
              color: state.theme === 'dark' ? '#aaa' : '#555', // Label color based on theme
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: state.theme === 'dark' ? '#666' : '#ccc', // Border color based on theme
              },
              '&:hover fieldset': {
                borderColor: state.theme === 'dark' ? '#fff' : '#000', // Border color on hover based on theme
              },
            },
          }}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
          margin="normal"
          sx={{
            '& .MuiInputBase-root': {
              color: state.theme === 'dark' ? '#fff' : '#000', // Input text color based on theme
            },
            '& .MuiFormLabel-root': {
              color: state.theme === 'dark' ? '#aaa' : '#555', // Label color based on theme
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: state.theme === 'dark' ? '#666' : '#ccc', // Border color based on theme
              },
              '&:hover fieldset': {
                borderColor: state.theme === 'dark' ? '#fff' : '#000', // Border color on hover based on theme
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color={state.theme === 'dark' ? 'secondary' : 'primary'} 
          sx={{
            mt: 2,
            bgcolor: state.theme === 'dark' ? '#ff5722' : '#3f51b5', 
            '&:hover': {
              bgcolor: state.theme === 'dark' ? '#e64a19' : '#303f9f',
            },
          }}
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default Form;
