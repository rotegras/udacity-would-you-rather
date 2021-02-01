import React from 'react';
import PropTypes from 'prop-types';

export default function QuestionCard({ question }) {
  return (
    <div>
      <div className="user-avatar">avatar</div>
      <h3>Would you rather...</h3>
      <div>
        {question.optionOne.text}
      </div>
      <div>
        {question.optionTwo.text}
      </div>
    </div>
  )
}

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
}