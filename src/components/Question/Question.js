import React from 'react';
// eslint-disable-next-line
import QuestionCard from '../QuestionCard';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ContainerWrapper } from '../../Theme/Container';


// eslint-disable-next-line
function Question({ questions, users }) {

  let { id } = useParams();

  return (
    <ContainerWrapper>
      <QuestionCard
        question={questions[id]}
        key={id}
        users={users}
      />
    </ContainerWrapper>
  )
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(Question);
