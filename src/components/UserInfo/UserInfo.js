// eslint-disable
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Wrapper } from './UserInfo.styles';
import { Avatar } from '../Avatar';
import { NavItem } from '../Nav/Nav.styles';
import Button from '../Button';


function UserInfo({ authedUser, users }) {

  console.log(users[authedUser]?.avatarURL);
  return (
    <Wrapper>
      <div>
        {authedUser?.length && `Hello ${users[authedUser]?.name}`}
      </div>
      { authedUser?.length > 0 &&
        <Avatar
          avatarURL={users[authedUser]?.avatarURL}
          className={`avatar-${users[authedUser]?.id}`}
        />

      }
      { !authedUser && (
        <NavItem to='/'>Login</NavItem>
      )}
      { authedUser && (
        <Button role='link' to='/' name='Logout' />
      )}
    </Wrapper>
  )
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser.id,
    users
  }
}

UserInfo.propTypes = {
  users: PropTypes.object.isRequired,
  authedUser: PropTypes.string,
}


export default connect(mapStateToProps)(UserInfo);