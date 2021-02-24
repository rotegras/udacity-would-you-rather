import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledLink } from './Button.style';


function Button({ to, name, role = 'button', onClick, disabled = false }) {
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

Button.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default Button;
