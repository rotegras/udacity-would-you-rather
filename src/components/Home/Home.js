/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import QuestionCard from '../QuestionCard';


function Home({ questions, users, authedUser }) {
  console.log(Object.entries(questions));
  return (
    <div>
      Home
    <ul>
      { authedUser &&
        Object.entries(questions).map((q) => (
          <li key={q[1].id}>
            <QuestionCard
              question={q[1]}
            />
          </li>
        ))
      }
    </ul>
    </div>
  )
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser
  }
}


export default connect(mapStateToProps)(Home);
