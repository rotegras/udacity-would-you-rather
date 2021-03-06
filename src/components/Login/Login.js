import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../redux/actions/authedUser';
import { Redirect } from 'react-router-dom';
import { CardWrapper, Col } from '../../theme/Card';
import { ContainerWrapper } from '../../theme/Container';
import { StyledHeader } from './Login.style';


function Login({ users, authedUser, dispatch }) {
  const [user, setUser] = useState('');
  const [toHome, setToHome] = useState(false);

  const handleUser = (e) => {
    setUser(e.target.value);
  }

  const submitUser = (e) => {
    e.preventDefault();
    setToHome(true);
    dispatch(setAuthedUser(user));
  }

  if (toHome === true) return <Redirect to='/home' />

  return (
    <ContainerWrapper direction='column'>
      <StyledHeader>Login</StyledHeader>
      <CardWrapper>
        <Col width='100'>
        <form onSubmit={submitUser}>
            <select onChange={handleUser} defaultValue={authedUser || 'default'}>
              <option value='default' disabled>Select user</option>
            {Object.entries(users).map((user) => {
              const { name, id } = user[1];
              return <option key={id} value={id}>{name}</option>
            })}
          </select>
          <button type='submit' disabled={user.length === 0}>Login</button>
        </form>
        </Col>
      </CardWrapper>
    </ContainerWrapper>
  )
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser: authedUser.id,
  }
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  authedUser: PropTypes.string,
}


export default connect(mapStateToProps)(Login);
