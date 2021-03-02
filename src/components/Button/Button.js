import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledLink } from './Button.style';


function Button({ to, name, role = 'button', onClick, disabled }) {
  if( role === 'button')  return (
    <StyledButton onClick={onClick} disabled={disabled}>
    {name}
    </StyledButton>
  );
  return (
    <StyledLink to={to}>
      { name}
    </StyledLink>
  )
}

Button.defaultProp = {
  disabled: false,
  role: 'button',
  to: '#'
}

Button.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default Button;
