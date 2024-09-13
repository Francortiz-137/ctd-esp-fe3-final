import React from 'react';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import Card from './Card'; 
import CardSkeleton from './CardSkeleton'; // Asegúrate de tener un componente de Skeleton

const DentistList = ({ title, dentists, isLoading, style }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      spacing={2}
      sx={{
        minHeight: '85vh', 
        padding: '20px',
        backgroundColor: style.backgroundColor,
        color: style.color,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid
        size={{ xs: 12 }}
        sx={{
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
        >
          {title}
        </Typography>
      </Grid>

      {isLoading ? (
        // Si esta cargando, muestra un skeleton en lugar de los dentistas
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ justifyContent: 'flex-start', maxWidth: '1000px' }}
        >
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: 'flex', justifyContent: 'center' , minWidth: '290px'}}
          >
            <CardSkeleton />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: 'flex', justifyContent: 'center' , minWidth: '290px'}}
          >
            <CardSkeleton />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: 'flex', justifyContent: 'center' , minWidth: '290px'}}
          >
            <CardSkeleton />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: 'flex', justifyContent: 'center' , minWidth: '290px'}}
          >
            <CardSkeleton />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: 'flex', justifyContent: 'center' , minWidth: '290px'}}
          >
            <CardSkeleton />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: 'flex', justifyContent: 'center' , minWidth: '290px'}}
          >
            <CardSkeleton />
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ 
            justifyContent: dentists.length === 1 ? 'center' : 'flex-start', 
            maxWidth: '1000px' 
          }}
        >
          {dentists.map((dentist) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={dentist.id}
              sx={{ display: 'flex', justifyContent: 'center', minWidth: '290px' }}
            >
              <Card dentist={dentist} />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default DentistList;
