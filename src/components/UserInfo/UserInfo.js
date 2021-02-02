import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Wrapper } from './UserInfo.styles';


function UserInfo() {
  return (
    <Wrapper>
      <div>
        Hello Username
      </div>
      <Avatar />
      <button>
        Logout
      </button>
    </Wrapper>
  )
}

export default connect()(UserInfo);