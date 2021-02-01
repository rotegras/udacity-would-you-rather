/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import QuestionCard from '../QuestionCard';


function Home({ questions }) {
  console.log(Object.entries(questions));
  return (
    <ul>
      {
        Object.entries(questions).map((q) => (
          <li key={q[1].id}>
            <QuestionCard
              question={q[1]}
            />
          </li>
        ))
      }
    </ul>
  )
}

function mapStateToProps({ questions }) {
  return {
    questions
  }
}


export default connect(mapStateToProps)(Home);
