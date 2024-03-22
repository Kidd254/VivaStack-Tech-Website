/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/navbar';

// Define your Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#ff6f00',
    },
  },
});

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
      <Navbar />
      <div className="container">{children}</div>
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
