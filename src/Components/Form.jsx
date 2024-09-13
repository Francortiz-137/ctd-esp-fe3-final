import React, { useState } from 'react';
import { Box, Typography, TextField, Button, useTheme } from '@mui/material';
import { useDentistStates } from '../Components/utils/global.context';

const Form = ({ onSubmitSuccess }) => {
  const { state } = useDentistStates();
  const theme = useTheme(); // Obtener el tema actual
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
      bgcolor={theme.palette.background.paper}
      color={theme.palette.text.primary}
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
              color: theme.palette.text.primary,
            },
            '& .MuiFormLabel-root': {
              color: theme.palette.text.secondary,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: theme.palette.divider,
              },
              '&:hover fieldset': {
                borderColor: theme.palette.text.primary,
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
              color: theme.palette.text.primary,
            },
            '& .MuiFormLabel-root': {
              color: theme.palette.text.secondary,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: theme.palette.divider,
              },
              '&:hover fieldset': {
                borderColor: theme.palette.text.primary,
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            bgcolor: theme.palette.primary.main, 
            '&:hover': {
              bgcolor: theme.palette.primary.dark,
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
