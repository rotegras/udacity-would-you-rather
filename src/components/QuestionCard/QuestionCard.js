import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '../../Theme/Button';
import { handleSaveQuestionAnswer } from '../../actions/shared';

import { CardWrapper, Col } from '../../Theme/Card';
import { FormWrapper, OptionWrapper, StyledInput } from './QuestionCard.styles';


function QuestionCard({ dispatch, question, authedUser, users }) {

  const [answer, setAnswer] = useState('');
  const [toHome, setToHome] = useState(false);
  const [answered, setAnswered] = useState(false);

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

  const checkIfAnswered = (item) => {
    const option1 = item.optionOne?.votes?.includes(authedUser.id);
    const option2 = item.optionTwo?.votes?.includes(authedUser.id);
    return (option1 || option2 ) ? true : false;
  }


  if (toHome === true) return <Redirect to='/home' />

  return (
    <CardWrapper>
      <Col width='40'>
        <div>avatar</div>
        <h3>{users[question.author].name}</h3>
        <div>{new Date(question.timestamp).toLocaleDateString()}</div>
      </Col>
      <Col width='60'>
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
              />
              <label htmlFor='optiontwo'>
                {question.optionTwo?.text}
              </label>
            </OptionWrapper>
          </fieldset>
        </FormWrapper>
        <Button
          onClick={submitAnswer}
          disabled={answered === false || checkIfAnswered(question) === true}
          name='Submit Answer'
          role='button'
        >
          Submit answer
        </Button>
        <Button
          to={`/question${question.id}`}
          component={Button}
          name='Go to question'
        >
          To Question
        </Button>
      </Col>
    </CardWrapper>
  )
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

QuestionCard.propTypes = {
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
  }).isRequired,
  authedUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(QuestionCard);
