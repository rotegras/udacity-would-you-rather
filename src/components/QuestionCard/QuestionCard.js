import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Left, Right } from './QuestionCard.styles';


export default function QuestionCard({ question }) {
  return (
    <Wrapper>
      <Left>
        <div className="user-avatar">avatar</div>
      </Left>
      <Right>
        <h3>Would you rather...</h3>
        <div>
          {question.optionOne.text}
        </div>
        <div>
          {question.optionTwo.text}
        </div>
        <button>answer</button>
      </Right>
    </Wrapper>
  )
}

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
}