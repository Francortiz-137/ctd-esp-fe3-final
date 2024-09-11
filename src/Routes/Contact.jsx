import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Components/utils/global.context'; // Ajusta la ruta según corresponda
import Form from '../Components/Form'
import Grid from '@mui/material/Grid2';
import { Box, Typography, TextField, Button } from '@mui/material';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(GlobalContext);
  // Estado para manejar los campos del formulario y los mensajes de error/success
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [successMessage, setSuccessMessage] = useState('');

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
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
      // Limpiar formulario después de éxito
      setFormData({ name: '', email: '' });
    } else {
      setSuccessMessage('');
    }
  };


  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6}>
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
          {successMessage && (
            <Typography variant="body1" color="success.main" mt={2}>
              {successMessage}
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact