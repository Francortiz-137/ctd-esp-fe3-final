import React from 'react';
import Grid from '@mui/material/Grid2';
import { Typography, Paper } from '@mui/material';
import Card from './Card'; 
import CardSkeleton from './CardSkeleton';
import { useTheme } from '@mui/material/styles';

const DentistList = ({ title, dentists, isLoading, noResults }) => {
  const theme = useTheme();
  
  const paperBackgroundColor = theme.palette.paper.backgroundColor;
  const textColor = theme.palette.paper.color;

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      spacing={2}
      sx={{
        minHeight: '100vh', 
        padding: '20px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
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
        // Si está cargando, muestra skeletons en lugar de dentistas
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ justifyContent: 'flex-start', maxWidth: '1000px' }}
        >
          {Array.from(new Array(6)).map((_, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              sx={{ display: 'flex', justifyContent: 'center', minWidth: '290px' }}
            >
              <CardSkeleton />
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          {dentists.length === 0 && !isLoading ? (
            // Mostrar mensaje si no hay resultados y no está cargando
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: '60vh', textAlign: 'center' }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: '20px',
                  maxWidth: '400px',
                  textAlign: 'center',
                  backgroundColor: paperBackgroundColor,
                  color: textColor,
                }}
              >
                <Typography variant="h5">
                  {noResults}
                </Typography>
              </Paper>
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
        </>
      )}
    </Grid>
  );
};

export default DentistList;
