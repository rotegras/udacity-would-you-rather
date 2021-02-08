import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import { Redirect } from 'react-router-dom';


function Login({ users, dispatch }) {
  const [user, setUser] = useState('');
  const [toHome, setToHome] = useState(false);

  const handleUser = (e) => {
    setUser(e.target.value)
  }

  const submitUser = (e) => {
    e.preventDefault();
    setToHome(true);
    dispatch(setAuthedUser(user));
  }

  if (toHome === true) return <Redirect to='/home' />

  return (
    <div className="login">
      <h3>Login</h3>
      <form onSubmit={submitUser}>
        <select onChange={handleUser} defaultValue='default'>
            <option value='default' disabled>Select user</option>
          {Object.entries(users).map((user) => {
            const { name, id } = user[1];
            return <option key={id} value={id}>{name}</option>
          })}
        </select>
        <button type='submit' disabled={user.length === 0}>Login</button>
      </form>
    </div>
  )
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(Login);
