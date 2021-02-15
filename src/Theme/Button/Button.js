import React from 'react';
import { StyledButton, StyledLink } from './Button.style';

function Button({ to, name, role, onClick }) {

  if( role === 'button')  return (
    <StyledButton onClick={onClick}>
    {name}
    </StyledButton>
  );
  return (
    <StyledLink to={to}>
      { name}
    </StyledLink>
  )
}

export default Button;
