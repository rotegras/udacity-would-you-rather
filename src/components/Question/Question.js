import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '../Button';
import { handleSaveQuestionAnswer } from '../../redux/actions/shared';
import UserData from './UserData';
import { Card, Col, Content } from '../../theme/Layout';
import { FormWrapper, OptionWrapper, StyledInput } from './Question.styles';


function Question({ authedUser, dispatch, isAnswered, isSingleQuestion, question, users }) {

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
        <UserData users={users} question={question}/>
      </Col>
      { !isSingleQuestion || !isAnswered ? (
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
            />
          ) : (
            <Button
              to={`/question${question.id}`}
              component={Button}
              name={!isAnswered ? 'Answer Question' : 'See stats'}
              role='link'
              onClick={dummyFunc}
            />
            )
          }
        </Col>
      ) : (
          <Col width='50'>
            <h4>Would you rather...</h4>
            <Content>
              {question.optionOne.text}
            </Content>
            <Content>
              {`${question.optionOne.votes.length} votes`}
            </Content>
            <Content>
              {question.optionTwo.text}
            </Content>
            <Content>
              {`${question.optionTwo.votes.length} votes`}
            </Content>
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
