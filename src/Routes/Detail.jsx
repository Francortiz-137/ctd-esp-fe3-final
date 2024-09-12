import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Paper, Box } from '@mui/material';
import { useDentistStates } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const { state } = useDentistStates();
  const [dentist, setDentist] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // Nuevo estado para controlar la carga


  // Consumiendo el parámetro dinámico de la URL, se hará un fetch a un usuario específico
  useEffect(() => {

    setLoading(true);
    // Fetch data from API
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        // Set the fetched data and clear error
        setDentist(response.data);
        setError('');
        // Set loading to false after 2 seconds
        setTimeout(() => setLoading(false), 2000);
      })
      .catch(error => {
        // Handle errors and clear loading state
        setDentist(null);
        setError(error.message);
        setLoading(false);
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
        {loading ? (
          <Typography
            variant="h5"
            component="p"
            sx={{ color: state.theme === 'light' ? '#000' : '#fff' }}
          >
            Loading...
          </Typography>
        ) : error ? (
          <Typography variant="h5" component="p" color="error">
            {error}
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
                    style={{ color: state.theme === 'light' ? '#1e88e5' : '#bbdefb' }}
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
}

export default Detail;
