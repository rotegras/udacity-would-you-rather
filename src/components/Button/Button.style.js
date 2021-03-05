import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


const buttonCss = css`
  align-items: center;
  background-color: ${({theme}) => theme.button.background};
  border: none;
  border-radius: ${({theme}) => theme.borderRadius};
  box-sizing: border-box;
  color: ${({theme}) => theme.button.color};
  display: flex;
  font-size: ${({theme}) => theme.fontSize.small};
  font-weight: 900;
  height: 20px;
  padding: .75rem 1rem;
  text-decoration: none;
  text-transform: uppercase;

  &:disabled {
    background-color: ${({theme}) => theme.button.disabled.background};
    color: ${({theme}) => theme.button.disabled.color};
  }
  &:not(:disabled):hover {
    background-color: ${({theme}) => theme.button.hover.background};
    color: ${({theme}) => theme.button.hover.color};
  }
`;

const StyledLink = styled(Link)`
  ${buttonCss};
`;

const StyledButton = styled.button`
  ${buttonCss};
`;


export { StyledButton, StyledLink };