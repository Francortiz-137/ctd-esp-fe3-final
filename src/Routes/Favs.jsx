import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Card from '../Components/Card';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

const Favs = () => {
  const { state } = useContext(GlobalContext);
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavDentists(savedFavs);
  }, []);

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      sx={{
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: state.theme === 'light' ? '#f0f0f0' : '#333',
        color: state.theme === 'light' ? '#000' : '#fff',
        
      }}
    >
      <Grid xs={12}>
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          mt={4}
          gutterBottom
          sx={{ color: state.theme === 'light' ? '#000' : '#fff' }}
        >
          Favorite Dentists
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent="center"
      >
        {favDentists.map((dentist) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={dentist.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card dentist={dentist} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Favs;
