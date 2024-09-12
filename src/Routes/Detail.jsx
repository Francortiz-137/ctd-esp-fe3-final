import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from '../Components/utils/global.context';
import { Container, Typography, Paper, Box } from '@mui/material';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext);
  const [dentist, setDentist] = useState({});
  const [error, setError] = useState('');

  // Consumiendo el parámetro dinámico de la URL, se hará un fetch a un usuario específico
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setDentist(response.data);
        setError('');
      })
      .catch(error => {
        setDentist({});
        setError(error.message);
        console.error(error);
      });
  }, [id]);

  return (
    <Box
      sx={{
        backgroundColor: state.theme === 'light' ? '#f5f5f5' : '#333',
        color: state.theme === 'light' ? '#000' : '#fff',
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
          backgroundColor: state.theme === 'light' ? '#fff' : '#424242',
          color: state.theme === 'light' ? '#000' : '#fff',
          width: { xs: '90%', sm: '80%', md: '60%' },
        }}
      >
        {error ? (
          <Typography variant="h5" component="p" color="error">
            {error}
          </Typography>
        ) : dentist ? (
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
                <strong>Website:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer" style={{ color: state.theme === 'light' ? '#1e88e5' : '#bbdefb' }}>{dentist.website}</a>
              </Typography>
            </Box>
          </>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Paper>
    </Box>
  );
}

export default Detail;
