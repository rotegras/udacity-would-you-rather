import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Content } from '../../theme/Layout';
import * as S from './QuestionStats.style';
import PercentageBar from './PercentageBar';

function QuestionStats({ question, authedUser }) {

  const percentage = (option) => `${(question[option].votes.length / (question.optionOne.votes.length
    + question.optionTwo.votes.length)).toFixed(4) * 100}%`;

  return (
    <>
      <h4>Would you rather...</h4>
      <S.StatsWrapper>
        <Content active={question.optionOne.votes.includes(authedUser)}>
          {question.optionOne.text}
        </Content>
        <PercentageBar
          text={question.optionOne.votes.length}
          percentage={percentage('optionOne')}
        />
        <Content active={question.optionTwo.votes.includes(authedUser)}>
          {question.optionTwo.text}
        </Content>
        <PercentageBar
          text={question.optionTwo.votes.length}
          percentage={percentage('optionTwo')}
        />
      </S.StatsWrapper>
    </>
  );
}


QuestionStats.propTypes = {
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
  authedUser: PropTypes.string.isRequired,
}


export default QuestionStats;
