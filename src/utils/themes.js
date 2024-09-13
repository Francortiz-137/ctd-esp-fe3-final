import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#ffeb3b',
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
    text: {
      primary: '#000',
    },
    navbar: {
      backgroundColor: '#fff',
      color: '#000',
    },
    footer: {
      backgroundColor: '#fff',
      color: '#000',
    },
    card: {
      backgroundColor: '#fff',
      color: '#000',
    },
    paper: {
      backgroundColor: '#fff',
      color: '#000',
    },
    drawer: {
        backgroundColor: '#fff',
        color: '#000',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffeb3b',
    },
    secondary: {
      main: '#3f51b5',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#fff',
    },
    navbar: {
      backgroundColor: '#010101',
      color: '#e0e0e0',
    },
    footer: {
      backgroundColor: '#212121',
      color: '#e0e0e0',
    },
    card: {
      backgroundColor: '#111111',
      color: '#e0e0e0',
    },
    paper: {
      backgroundColor: '#424242',
      color: '#e0e0e0',
    },
    drawer: {
      backgroundColor: '#212121',
      color: '#e0e0e0',
    },
  },
});
