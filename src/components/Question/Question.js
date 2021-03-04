import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '../Button';
import { handleSaveQuestionAnswer } from '../../redux/actions/shared';
import { Avatar } from '../Avatar';

import { CardWrapper, Col, Row } from '../../theme/Card';
import { FormWrapper, OptionWrapper, QuestionDate, StyledInput, UserName } from './Question.styles';


function Question({ dispatch, question, authedUser, users, isSingleQuestion }) {

  const [answer, setAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [toHome, setToHome] = useState(false);

  const user = authedUser.id;

  const handleClick = (e) => {
    const { value } = e.target;
    setAnswer(value);
    setAnswered(true);
  }

  const submitAnswer = (e) => {
    e.preventDefault();
    answered === true && dispatch(handleSaveQuestionAnswer(user, question.id, answer));
      answered === true && setToHome(true);
  }

  const dummyFunc = (e) => {
    e.preventDefault;
  }


  if (toHome === true) return <Redirect to='/home' />

  return (
    <CardWrapper>
      <Col width='50'>
        <Row>
          <Col>
            <Avatar
              avatarURL={users[question.author]?.avatarURL}
            />
          </Col>
          <Col align='center'>
            <UserName>{users[question.author].name}</UserName>
            <QuestionDate>asked on {new Date(question.timestamp).toLocaleDateString()}</QuestionDate>
          </Col>
        </Row>
      </Col>
      <Col width='50'>
        <FormWrapper>
          <fieldset>
            <h3>Would you rather...</h3>
            <OptionWrapper>
              <StyledInput
                type='radio'
                id='optionone'
                name='answer'
                value='optionOne'
                onClick={handleClick}
                isSingleQuestion={isSingleQuestion}
              />
            <label htmlFor='optionone'>
              {question.optionOne?.text}
            </label>
            </OptionWrapper>
            <OptionWrapper>
              <StyledInput
                type='radio'
                id='optiontwo'
                name='answer'
                value='optionTwo'
                onClick={handleClick}
                isSingleQuestion={isSingleQuestion}
              />
              <label htmlFor='optiontwo'>
                {question.optionTwo?.text}
              </label>
            </OptionWrapper>
          </fieldset>
        </FormWrapper>
        {isSingleQuestion ? (
          <Button
            onClick={submitAnswer}
            disabled={answer === ''}
            name='Submit Answer'
            role='button'
          >
            Answer
          </Button>
        ) : (
            <Button
              to={`/question${question.id}`}
              component={Button}
              name='Go to question'
              role='link'
              onClick={dummyFunc}
            >
              To Question
            </Button>
          )}
      </Col>
    </CardWrapper>
  )
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  }
}

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    optionOne: PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.array.isRequired,
    }).isRequired,
    optionTwo: PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.array.isRequired,
    }).isRequired,
    timestamp: PropTypes.number.isRequired,
  }).isRequired,
  authedUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  isSingleQuestion: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(Question);
