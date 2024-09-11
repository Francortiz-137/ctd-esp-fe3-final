import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Form = ({ onSubmitSuccess }) => {
  // Estado para manejar los campos del formulario y los mensajes de error/success
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validar el formulario
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

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Datos del formulario:', formData);
      onSubmitSuccess(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
      // Limpiar formulario después de éxito
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <Box p={3} boxShadow={3} borderRadius={2} bgcolor="background.paper">
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
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default Form;
