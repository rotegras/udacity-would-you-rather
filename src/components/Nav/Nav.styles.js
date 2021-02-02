import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  display: flex;
  `;

const NavItem = styled(NavLink)`
  padding: .5rem 1rem;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
`;

export { NavItem, Wrapper };
