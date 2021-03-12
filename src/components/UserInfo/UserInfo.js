// eslint-disable
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Wrapper, Text } from './UserInfo.styles';
import Avatar from '../Avatar';
import { NavItem } from '../Nav/Nav.styles';
import { resetAuthedUser } from '../../redux/actions/authedUser';
import PATHS from '../../data/CONSTANTS';


function UserInfo({ authedUser, users, dispatch }) {

  const [redirect, setRedirect] = useState(false);

  const handleResetAuthedUser = () => {
    dispatch(resetAuthedUser(''));
    setRedirect(true);
  }

  useEffect(() => {
    console.log(authedUser);
  }, [authedUser]);

  if ( redirect ) return <Redirect to={PATHS.LOGIN} />

  return ( <Wrapper>
      {
        authedUser !== '' && authedUser !== undefined && (
        <>
          <Text>
            Logged in as
          </Text>
          <Avatar
            avatarURL={users[authedUser]?.avatarURL}
            username={users[authedUser].name}
          />
        </>
        )
      }
      { !authedUser && (
        <NavItem to={PATHS.LOGIN}>Login</NavItem>
      )}
      { authedUser?.length && (
        <NavItem to={PATHS.LOGIN} onClick={handleResetAuthedUser}>Log Out</NavItem>
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
