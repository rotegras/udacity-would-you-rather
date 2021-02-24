import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  border: 1px solid #eee;
  font-size: {({theme}) => theme.fontSize.small};
  padding: .5rem;
  text-decoration: none;
`;

const StyledButton = styled.button`
  border: 1px solid #eee;
  font-size: {({theme}) => theme.fontSize.small};
  padding: .5rem;
  text-decoration: 'none;
`;


export { StyledButton, StyledLink };