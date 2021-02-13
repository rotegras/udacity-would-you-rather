import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Left, Right } from './QuestionCard.styles';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { handleSaveQuestionAnswer } from '../../actions/shared';


// eslint-disable-next-line
function QuestionCard({ dispatch, question, authedUser }) {

  const [answer, setAnswer] = useState('');
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
  }

  return (
    <Wrapper>
      <Left>
        <div className="user-avatar">avatar</div>
        <div className="author">{question.author}</div>
      </Left>
      <Right>
        <form>
          <fieldset>
        <h3>Would you rather...</h3>
        <h5>Option one:</h5>
            <input
              type='radio'
              id='optionone'
              name='answer'
              value='optionOne'
              onClick={handleClick}
            />
        <label htmlFor='optionone'>
          {question.optionOne?.text}
        </label>
        <div>Votes:</div>
        <ul>
          {
            question.optionOne?.votes.map(v => <li key={v}>{v}</li>)
          }
        </ul>
        <h5>Option two:</h5>
            <input
              type='radio'
              id='optiontwo'
              name='answer'
              value='optionTwo'
              onClick={handleClick}
            />
        <label htmlFor='optiontwo'>
          {question.optionTwo?.text}
        </label>
        <div>Votes:</div>
        <ul>
          {
            question.optionTwo?.votes.map(v => <li key={v}>{v}</li>)
          }
        </ul>
        </fieldset>
        </form>
        <button onClick={submitAnswer} disabled={answered === false}>answer</button>
      </Right>
    </Wrapper>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
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
}

export default connect(mapStateToProps)(QuestionCard);
