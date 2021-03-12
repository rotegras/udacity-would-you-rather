import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../../redux/actions/shared';
import Button from '../Button';
import QuestionStats from '../QuestionStats';
import Avatar from '../Avatar';
import { Card, Col } from '../../theme/Layout';
import * as S from './Question.styles';


function Question({
  authedUser,
  dispatch,
  isAnswered, isSingleQuestion, question, users }) {

  const [answer, setAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [toHome, setToHome] = useState(false);


  const handleClick = (e) => {
    const { value } = e.target;
    setAnswer(value);
    setAnswered(true);
  }

  const submitAnswer = (e) => {
    e.preventDefault();
    answered === true && dispatch(handleSaveQuestionAnswer(authedUser, question.id, answer));
    answered === true && setToHome(true);
  }

  const dummyFunc = (e) => {
    e.preventDefault;
  }


  if (toHome === true) return <Redirect to='/home' />

  return (
    <Card>
      <Col width='40'>
        <Avatar
          username={users[authedUser].name}
          avatarURL={users[authedUser].avatarURL}
          timestamp={question.timestamp}
        />
      </Col>
      { !isSingleQuestion || !isAnswered ? (
        <Col width='60'>
          <S.FormWrapper>
            <fieldset>
              <h3>Would you rather...</h3>
              <S.OptionWrapper>
                <S.StyledInput
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
              </S.OptionWrapper>
              <S.OptionWrapper>
                <S.StyledInput
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
              </S.OptionWrapper>
            </fieldset>
          </S.FormWrapper>
          {isSingleQuestion ? (
            <Button
              onClick={submitAnswer}
              disabled={answer === ''}
              name='Submit Answer'
              role='button'
            />
          ) : (
            <Button
              to={`/question${question.id}`}
              component={Button}
              name={!isAnswered ? 'Answer Question' : 'Show stats'}
              role='link'
              onClick={dummyFunc}
            />
            )
          }
        </Col>
      ) : (
      <Col width='50'>
            <QuestionStats question={question} authedUser={authedUser} />
        <Button
          to='/home'
          component={Button}
          name='Go Back'
          role='link'
          onClick={dummyFunc}
        />
      </Col>
      )}
    </Card>
  )
}

const mapStateToProps = ({ authedUser, users }, { question }) => {
  const isAnswered = Object.keys(users[authedUser.id].answers).includes(question.id);
  console.log(isAnswered)
  return {
    authedUser: authedUser.id,
    users,
    isAnswered,
  }
}

Question.propTypes = {
  authedUser: PropTypes.string.isRequired,
  isAnswered: PropTypes.bool.isRequired,
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
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  isSingleQuestion: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(Question);
