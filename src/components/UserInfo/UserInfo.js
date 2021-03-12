// eslint-disable
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Wrapper, Text } from './UserInfo.styles';
import { Avatar } from '../Avatar';
import { NavItem } from '../Nav/Nav.styles';
import { resetAuthedUser } from '../../redux/actions/authedUser';
// import Button from '../Button';


function UserInfo({ authedUser, users, dispatch }) {

  const [redirect, setRedirect] = useState(false);

  const handleResetAuthedUser = () => {
    dispatch(resetAuthedUser(''));
    setRedirect(true);
  }

  if ( redirect ) return <Redirect to='/' />

  return (
    <Wrapper>
      { authedUser && (
        <>
        <Text>
          {`Logged in as ${users[authedUser]?.name}`}
        </Text>
        <Avatar
          avatarURL={users[authedUser]?.avatarURL}
          className={`avatar-${users[authedUser]?.id}`}
        />
        </>
        )
      }
      { !authedUser && (
        <NavItem to='/'>Login</NavItem>
      )}
      { authedUser && (
        <NavItem to='/' onClick={handleResetAuthedUser}>Log Out</NavItem>
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
  dispatch: PropTypes.func.isRequired,
}


export default connect(mapStateToProps)(UserInfo);