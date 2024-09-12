import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { GlobalContext } from '../Components/utils/global.context';

const Error = () => {
  const { state } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: state.theme === 'dark' ? '#333' : '#f5f5f5',
        color: state.theme === 'dark' ? '#fff' : '#000',
        textAlign: 'center',
        gap: { xs: 1, sm: 4 },
        padding: 2
      }}
    >
      <Typography variant="h1" component="div">
        <span style={{ color: 'red' }}>E</span>rror 404
      </Typography>
      <Typography variant="h6" component="div">
        <span style={{ color: 'red' }}>P</span>age not Found
      </Typography>
    </Box>
  );
};

export default Error;
