/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from './Home.style';
import QuestionCard from '../QuestionCard';
import ErrorBoundary from '../ErrorBoundary';


function Home({ questions, users, authedUser }) {

  const questionsToArray = Object.values(questions);

  const [answered, setAnswered] = useState(false);

  const filterQuestions = (items, questionsState) => {
    const filteredQuestions = [];
    if (questionsState === true) {
      items.forEach((item) => {
        (item.optionTwo?.votes?.indexOf(authedUser.id) >= 0 ||
          item.optionOne?.votes?.indexOf(authedUser.id) >= 0)
          && filteredQuestions.push(item)
      });
    } else {
      items.forEach((item) => {
        (item.optionOne?.votes.indexOf(authedUser.id) < 0 &&
         item.optionTwo?.votes.indexOf(authedUser.id) < 0
        ) && filteredQuestions.push(item)
      })
    }
    return filteredQuestions;
  }

  const [displayedQuestions, setDisplayedQuestions] = useState([]);

  useEffect(() => {
    setDisplayedQuestions(filterQuestions(questionsToArray, answered));
  }, [answered])

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
              <ErrorBoundary>
                <QuestionCard
                  key={question.id}
                  question={question}
                  users={users}
                />
              </ErrorBoundary>
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
