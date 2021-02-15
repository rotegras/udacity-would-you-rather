import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';


const theme = {
  colors: {
    primary: '#000',
  },
  fonts: {
    primary: 'Ubuntu, sans-serif',
  },
  fontSize: {
    base: '.75rem',
  },
  header: {
    height: '50px',
  },
  card: {
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 0 25px #999',
    padding: '1rem 2rem',
    background: '#ebebeb',
  },
};


function Theme({ children }) {
  return (
    <ThemeProvider
      theme={theme}
    >
      <GlobalStyles />
      { children }
    </ThemeProvider>
  )
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme;
