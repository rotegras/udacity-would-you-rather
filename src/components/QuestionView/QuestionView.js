import React from 'react';
// eslint-disable-next-line
import Question from '../Question';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ContainerWrapper } from '../../theme/Container';


// eslint-disable-next-line
function QuestionView({ questions, users }) {

  let { id } = useParams();

  return (
    <ContainerWrapper>
      <Question
        question={questions[id]}
        key={id}
        users={users}
        isSingleQuestion={true}
      />
    </ContainerWrapper>
  )
}

function mapStateToProps({ questions, users}) {
  return {
    questions,
    users,
  }
}

export default connect(mapStateToProps)(QuestionView);
