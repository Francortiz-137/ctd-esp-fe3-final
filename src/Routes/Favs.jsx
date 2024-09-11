import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../Components/utils/global.context'; // Ajusta la ruta según corresponda
import Card from "../Components/Card";
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useContext(GlobalContext);
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavDentists(savedFavs);
  }, []);

  return (
    <>
     <Grid container className={`favs ${state.theme}`}>
     <Grid size={{xs: 12}} >
        <Typography variant="h4" 
        component="h1" 
        textAlign="center" 
        mt={10}
        gutterBottom>
          Dentists Favs
        </Typography>
      </Grid>
      <Grid container 
        size={{xs: 12}}
        spacing={2}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favDentists.map(dentist => (
          <Grid 
          size={{xs: 12, sm:6, md:4}}
          key={dentist.id}>
            <Card key={dentist.id} dentist={dentist} 
            className={`dentist-card ${state.theme}`}/>
          </Grid>
        ))}
      </Grid>
     </Grid>
    </>
  );
};

export default Favs;
