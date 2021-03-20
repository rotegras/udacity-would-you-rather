import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({theme}) => theme.fontSize.base}
`;

const Text = styled.div`
  font-size: ${({theme}) => theme.fontSize.small};
  margin-right: .5;
  text-align: right;
`;

const Button = styled(NavLink)`
  padding: .5rem 1rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${({theme}) => theme.fontSize.medium};
  font-weight: 700;
  padding: .5rem 1rem;
  background: ${({theme}) => theme.colors.white};

  &.active,
  &.focus,
  &.hover {
    font-weight: 900;
  }
`;

export { Wrapper, Text, Button };
