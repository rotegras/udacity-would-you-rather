import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../../redux/actions/shared';
import { Container, Card, Row, Col } from '../../theme/Layout';
import { TabsWrapper, TabButton } from '../../theme/Layout';
import { Input } from './AddQuestion.style';
import Button from '../Button';


function AddQuestion({ dispatch, authedUser }) {

  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'optionOne') {
      setOptionOneText(value);
    }
    if (name === 'optionTwo') {
      setOptionTwoText(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const question = {
      author: authedUser.id,
      optionOneText,
      optionTwoText
    }

    dispatch(handleAddQuestion(question));
    setRedirect(true);
  }

  if (redirect === true) return <Redirect to='/home' />

  return (
    <Container>
      <TabsWrapper>
        <TabButton>Add a new question</TabButton>
      </TabsWrapper>
      <Card>
        <Row>
          <Col>
            <h3>Would you rather...</h3>
          </Col>
          <Col>
            <Input placeholder='Set Option One' type='text' name='optionOne' value={optionOneText} onChange={handleChange} />
            <Input placeholder='Set Option Two' type='text' name='optionTwo' value={optionTwoText} onChange={handleChange} />
            <Button onClick={handleSubmit} disabled={optionOneText === '' || optionTwoText === ''} name='New Question' />
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

AddQuestion.propTypes = {
  dispatch: PropTypes.func.isRequired,
  authedUser: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(AddQuestion);
