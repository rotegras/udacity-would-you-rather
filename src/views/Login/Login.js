import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../redux/actions/authedUser';
import { Redirect } from 'react-router-dom';
import { Container, Card, Row, Col } from '../../theme/Layout';
import Button from '../../components/Button';
import { StyledHeader, Form, Option, Select } from './Login.style';


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
