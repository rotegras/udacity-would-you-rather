import React from 'react';
import Nav from '../Nav';
import UserInfo from '../UserInfo';
import { Wrapper } from './Header.styles';


function Header() {
  return (
    <Wrapper>
      <Nav />
      <UserInfo />
    </Wrapper>
  )
}


export default Header;
