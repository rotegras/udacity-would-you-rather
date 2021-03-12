import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';


const theme = {
  colors: {
    primary: '#666',
    active: '#000',
    inactive: '#e8e8e8',
  },
  borderRadius: '3px',
  button: {
    color: '#fff',
    background: '#000',
    fontSize: '1rem',
    hover: {
      color: '#eee',
      background: '#999',
    },
    disabled: {
      color: '#fff',
      background: '#eee',
    },
  },
  fonts: {
    primary: 'Ubuntu, sans-serif',
  },
  fontSize: {
    bigger: '1.5rem',
    big: '1rem',
    medium: '.75rem',
    small: '.5rem',
    tiny: '.375rem',
  },
  header: {
    height: '90px',
  },
  card: {
    background: '#fff',
    maxWidth: '600px',
    padding: '1rem',
    width: '100%',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '99px',
  }
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
