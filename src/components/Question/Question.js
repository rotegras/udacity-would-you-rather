import React from 'react';
// eslint-disable-next-line
import QuestionCard from '../QuestionCard';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


// eslint-disable-next-line
function Question({ questions, users }) {

  let { id } = useParams();

  return (
    <div>
      <QuestionCard
        question={questions[id]}
        key={id}
        users={users}
      />
    </div>
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
