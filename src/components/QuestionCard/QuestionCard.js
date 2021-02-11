import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Left, Right } from './QuestionCard.styles';


export default function QuestionCard({ question }) {
  console.log('render question', question);
  return (
    <Wrapper>
      <Left>
        <div className="user-avatar">avatar</div>
        <div className="author">{question.author}</div>
      </Left>
      <Right>
        <h3>Would you rather...</h3>
        <div>
          {question.optionOne?.text}
        </div>
        <div>
          {question.optionTwo?.text}
        </div>
        <h5>Option one:</h5>
        <ul>
          {
            question.optionOne?.votes.map(v => <li key={v}>{v}</li>)
          }
        </ul>
        <h5>Option two:</h5>
        <ul>
          {
            question.optionTwo?.votes.map(v => <li key={v}>{v}</li>)
          }
        </ul>
        <button>answer</button>
      </Right>
    </Wrapper>
  )
}

QuestionCard.propTypes = {
  question: PropTypes.shape({
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
}