import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from '../Components/utils/global.context'; // Ajusta la ruta según corresponda
import { Container, Typography, Paper, Box } from '@mui/material';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext);
  const [dentist, setDentist] = useState({});

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setDentist(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!dentist) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box
      sx={{
        backgroundColor: state.theme === 'light' ? '#f5f5f5' : '#333',
        color: state.theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', // Asegura que el contenedor use todo el ancho
        padding: 2, // Añade padding si es necesario
      }}
    >
      <Paper
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: state.theme === 'light' ? '#fff' : '#424242',
          color: state.theme === 'light' ? '#000' : '#fff',
          width: { xs: '90%', sm: '80%', md: '60%' },
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Detail Dentist {id}
        </Typography>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
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
            <strong>Website:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer" style={{ color: state.theme === 'light' ? '#1e88e5' : '#bbdefb' }}>{dentist.website}</a>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Detail;
