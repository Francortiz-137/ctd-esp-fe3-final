import React,  { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Components/utils/global.context'; // Ajusta la ruta según corresponda
import axios from 'axios';
import Card from '../Components/Card';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(GlobalContext);
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setDentists(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Grid container className={`home ${state.theme}`}>
      <Grid size={{xs: 12}} >
        <Typography variant="h4" 
        component="h1" 
        textAlign="center" 
        mt={10}
        gutterBottom>
          Our Dentists
        </Typography>
      </Grid>
      <Grid container 
        size={{xs: 12}}
        spacing={2}>
        {dentists.map((dentist) => (
          <Grid 
            size={{xs: 12, sm:6, md:4}}
            key={dentist.id}>
            <Card dentist={dentist} className="dentist-card" />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Home;
