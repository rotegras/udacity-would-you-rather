/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from './Home.style';
import QuestionCard from '../QuestionCard';
import ErrorBoundary from '../ErrorBoundary';


function Home({ questions, users, authedUser }) {

  const singleQuestion= false;

  const questionsToArray = Object.values(questions);

  const [showAnswered, setShowAnswered] = useState(false);

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
    setDisplayedQuestions(filterQuestions(questionsToArray, showAnswered));
  }, [showAnswered])

  const handleClick = () => {
    setShowAnswered(!showAnswered);
  }


  return (
    <div>
      <Button value='answered' active={showAnswered} onClick={handleClick}>Answered</Button>
      <Button valule='notanswered' active={!showAnswered} onClick={handleClick}>Not Answered</Button>
        {
          displayedQuestions.map((question) => (
            <div key={question.timestamp}>
              <ErrorBoundary>
                <QuestionCard
                  key={question.id}
                  question={question}
                  users={users}
                  singleQuestion={singleQuestion}
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
