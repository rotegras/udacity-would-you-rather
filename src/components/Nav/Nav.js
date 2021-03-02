import React from 'react';
import { NavItem, Wrapper } from './Nav.styles';


function Nav() {
  return (
    <Wrapper>
        <NavItem to='/home'>Home</NavItem>
        <NavItem to='/add'>Add</NavItem>
        <NavItem to='/leaderboard'>Leaderboard</NavItem>
    </Wrapper>
  )
}


export default Nav;
