import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../redux/actions/authedUser';
import { Redirect } from 'react-router-dom';
import { Container, Card, Row, Col } from '../../theme/Layout';
import Button from '../../components/Button';
import { StyledHeader, Form, Option, Select } from './Login.style';
import PATHS from '../../data/CONSTANTS';


function Login({ users, authedUser, dispatch, path, location }) {
  const [user, setUser] = useState('');
  const [redirectTo, setRedirectTo] = useState(false);

  const handleUser = (e) => {
    setUser(e.target.value);
  }

  const submitUser = (e) => {
    e.preventDefault();
    setRedirectTo(true);
    dispatch(setAuthedUser(user));
  }

  if (redirectTo === true) return <Redirect to={path === '/question/:id' ? location.pathname : PATHS.HOME} />

  return (
    <Container direction='column'>
      <StyledHeader>Login</StyledHeader>
      <Card>
        <Row justify='stretch'>
          <Col width={100} align='center'>
            <Form onSubmit={submitUser}>
                <Select onChange={handleUser} defaultValue={authedUser || 'default'}>
                  <Option value='default' disabled>Select user</Option>
                {Object.entries(users).map((user) => {
                  const { name, id } = user[1];
                  return <Option key={id} value={id}>{name}</Option>
                })}
              </Select>
              <Button type='submit' name='Login' disabled={user.length === 0} />
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

function mapStateToProps({ users, authedUser }, path, location) {
  return {
    users,
    authedUser: authedUser.id,
    path,
    location,
  }
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  authedUser: PropTypes.string,
  path: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
}


export default connect(mapStateToProps)(Login);
