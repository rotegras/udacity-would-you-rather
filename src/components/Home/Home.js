/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionCard from '../QuestionCard';
import { Redirect } from 'react-router-dom';


function Home({ questions, users, authedUser = { authedUser: 'sarahedo' } }) {

  const questionsToArray = Object.values(questions);

  const [items, setItems] = useState([]);
  const [answered, setAnswered] = useState(true);

  useEffect(() => {
    const getQuestions = filterQuestions(questionsToArray);
    setItems(getQuestions);
  }, [answered])


  const handleClick = () => {
    setAnswered(!answered);
  }

  const authUser = authedUser.authedUser;

  const filterQuestions = (items) => {
    const filteredQuestions = [];
    for (let i of items) [
      i.optionOne.votes.includes(authUser) || i.optionTwo.votes.includes(authUser)
      && filteredQuestions.push(i)
    ]
    if (answered === true) { return filteredQuestions}

    return questionsToArray.filter(item => filteredQuestions.indexOf(item) === -1)
  }


  return (
    <div>
      <button value='answered' onClick={handleClick}>Answered</button>
      <button valule='notanswered' onClick={handleClick}>Not Answered</button>

        {
          items.map((i) => (
            <div key={i.id}>
              <QuestionCard
                question={i}
              />
            </div>
          ))
        }
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

Home.propTypes = {
  users: PropTypes.object.isRequired,
  authedUser: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(Home);
