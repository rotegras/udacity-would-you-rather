import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  display: flex;
  `;

const NavItem = styled(NavLink)`
  padding: .5rem 1rem;
  color: #888;
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${({theme}) => theme.fontSize.medium};
  padding: .5rem 1rem;

  &.active,
  &.focus,
  &.hover {
    font-weight: 900;
  }
`;

export { NavItem, Wrapper };
