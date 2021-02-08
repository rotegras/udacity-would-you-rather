// eslint-disable
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Avatar, Wrapper } from './UserInfo.styles';


function UserInfo({
  authedUser,
  users
}) {

  const authId = authedUser.authedUser;

  return (
    <Wrapper>
      <div>
        {authId && `Hello ${users[authId]?.name}`}
      </div>
      <Avatar />
      <button>
        Logout
      </button>
    </Wrapper>
  )
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

UserInfo.propTypes = {
  users: PropTypes.object.isRequired,
  authedUser: PropTypes.object.isRequired,
}


export default connect(mapStateToProps)(UserInfo);