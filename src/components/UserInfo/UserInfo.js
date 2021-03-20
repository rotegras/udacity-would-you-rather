// eslint-disable
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as S from './UserInfo.styles';
import Avatar from '../Avatar';
import { resetAuthedUser } from '../../redux/actions/authedUser';
import PATHS from '../../data/CONSTANTS';


function UserInfo({ authedUser, users, dispatch }) {

  const handleResetAuthedUser = () => {
    dispatch(resetAuthedUser(''));
  }

  return (
    <S.Wrapper>
      {
        authedUser && (
          <>
            <S.Text>
              Logged in as
            </S.Text>
            <Avatar
              avatarURL={users[authedUser]?.avatarURL}
              username={users[authedUser]?.name}
            />
          </>
        )
      }
      { authedUser && <S.Button to={PATHS.LOGIN} onClick={handleResetAuthedUser}>Logout</S.Button>}
      { !authedUser && <S.Button to={PATHS.LOGIN}>Login</S.Button>}
    </S.Wrapper>
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
