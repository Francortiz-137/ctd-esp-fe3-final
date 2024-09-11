import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import axios from 'axios';
import Card from '../Components/Card';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

const Home = () => {
  const { state } = useContext(GlobalContext);
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setDentists(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: state.theme === 'light' ? '#f0f0f0' : '#333',
        color: state.theme === 'light' ? '#000' : '#fff'
      }}
    >
      <Grid
        size={{ xs: 12 }}
      >
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          mt={4}
          gutterBottom
          sx={{ color: state.theme === 'light' ? '#000' : '#fff' }}
        >
          Our Dentists
        </Typography>
      </Grid>
      <Grid
        container
        rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        
      >
        {dentists.map((dentist) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={dentist.id}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Card
              dentist={dentist}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Home;
