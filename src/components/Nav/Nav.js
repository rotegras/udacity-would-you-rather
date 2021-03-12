import React from 'react';
import { NavItem, Wrapper } from './Nav.styles';
import PATHS from '../../data/CONSTANTS';


function Nav() {
  return (
    <Wrapper>
      <NavItem to={PATHS.HOME}>Home</NavItem>
      <NavItem to={PATHS.ADD}>Add</NavItem>
      <NavItem to={PATHS.LEADERBOARD}>Leaderboard</NavItem>
    </Wrapper>
  )
}


export default Nav;
