/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Home.style';
import { connect } from 'react-redux';
import QuestionCard from '../QuestionCard';
import { Redirect } from 'react-router-dom';


function Home({ questions, users, authedUser = { authedUser: 'sarahedo' } }) {

  const questionsToArray = Object.values(questions);
  const authUser = authedUser.id;

  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  const [answered, setAnswered] = useState(true);

  useEffect(() => {
    const getQuestions = filterQuestions(questionsToArray);
    setDisplayedQuestions(getQuestions);
  }, [answered, questions])

  const filterQuestions = (items) => {
    const filteredQuestions = [];
    items.forEach((item) => {
      (item.optionTwo?.votes?.includes(authUser) ||
      item.optionOne?.votes?.includes(authUser))
      && filteredQuestions.push(item)
    })
    if (answered === true) { return filteredQuestions}

    return questionsToArray.filter(item => filteredQuestions.indexOf(item) === -1)
  }

  const handleClick = () => {
    setAnswered(!answered);
  }


  return (
    <div>
      <Button value='answered' active={answered} onClick={handleClick}>Answered</Button>
      <Button valule='notanswered' active={!answered} onClick={handleClick}>Not Answered</Button>
        {
          displayedQuestions.map((question) => (
            <div key={question.timestamp}>
              <QuestionCard
                key={question.id}
                question={question}
                users={users}
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
  questions: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(Home);
