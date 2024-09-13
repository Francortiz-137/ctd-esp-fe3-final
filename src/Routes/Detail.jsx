import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Paper, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Detail = () => {
  const { id } = useParams();
  const theme = useTheme(); // Obtener el tema actual
  const [dentist, setDentist] = useState({});
  const [error, setError] = useState(''); // Estado para manejar los errores
  const [loading, setLoading] = useState(true); // Nuevo estado para controlar el loading
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  // Consumiendo el parámetro dinámico de la URL, se hará un fetch a un usuario específico
  useEffect(() => {
    setLoading(true);
    // Obtener data desde la API
    axios.get(url)
      .then(response => {
        setDentist(response.data);
        setError('');
        // Desactivar la carga después de 2 seg
        setTimeout(() => setLoading(false), 2000);
      })
      .catch(error => {
        setDentist({});
        setError(error.message);
        setLoading(false);
        console.error(error);
      });
  }, [id]);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 2,
      }}
    >
      <Paper
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: theme.palette.paper.backgroundColor,
          color: theme.palette.paper.color,
          width: { xs: '90%', sm: '80%', md: '60%' },
        }}
      >
        {loading ? (
          <Typography
            variant="h5"
            component="p"
            sx={{ color: theme.palette.text.primary }}
          >
            Loading...
          </Typography>
        ) : error ? (
          <Typography variant="h5" component="p" color="error">
            {error} {/* Mostrar mensaje de error si ocurre */}
          </Typography>
        ) : (
          dentist && (
            <>
              <Typography variant="h4" component="h1" gutterBottom>
                Detail Dentist {id}
              </Typography>
              <Box>
                <Typography variant="h6" component="p">
                  <strong>Name:</strong> {dentist.name}
                </Typography>
                <Typography variant="h6" component="p">
                  <strong>Email:</strong> {dentist.email}
                </Typography>
                <Typography variant="h6" component="p">
                  <strong>Phone:</strong> {dentist.phone}
                </Typography>
                <Typography variant="h6" component="p">
                  <strong>Website:</strong> <a
                    href={`http://${dentist.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.palette.primary.main }}
                  >
                    {dentist.website}
                  </a>
                </Typography>
              </Box>
            </>
          )
        )}
      </Paper>
    </Box>
  );
};

export default Detail;
