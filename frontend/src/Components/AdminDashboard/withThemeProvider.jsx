import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const withThemeProvider = (Component) => (props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...props} />
  </ThemeProvider>
);

export default withThemeProvider;