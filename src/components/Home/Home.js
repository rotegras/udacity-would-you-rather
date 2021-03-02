/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { TabsWrapper, TabButton } from './Home.style';
import QuestionCard from '../QuestionCard';
import ErrorBoundary from '../ErrorBoundary';


function Home({ questions, users, authedUser, answeredQuestionsIds, notAnsweredQuestionsIds }) {

  const [showAnswered, setShowAnswered] = useState(false);

  const handleClick = () => {
    setShowAnswered(!showAnswered);
  }

  !authedUser?.id && <Redirect to='/' />

  return (
    <div>
      <TabsWrapper>
        <TabButton
          value='notanswered'
          onClick={handleClick}
          active={!showAnswered}
        >
          Not Answered
        </TabButton>
        <TabButton
          value='answered'
          onClick={handleClick}
          active={showAnswered}
        >
          Answered
        </TabButton>
      </TabsWrapper>
        { !showAnswered
          ? notAnsweredQuestionsIds.map((qid) => (
            <div key={qid}>
              <ErrorBoundary>
                <QuestionCard
                  key={qid}
                  question={questions[qid]}
                  users={users}
                  isSingleQuestion={false}
                />
              </ErrorBoundary>
            </div>
          ))
          :
          answeredQuestionsIds.map((qid) => (
            <div key={qid}>
              <ErrorBoundary>
                <QuestionCard
                  key={qid}
                  question={questions[qid]}
                  users={users}
                  isSingleQuestion={false}
                />
              </ErrorBoundary>
            </div>
          ))
        }
    </div>
  )
}

function mapStateToProps({ questions, users, authedUser }) {
  const answeredQuestionsIds = Object.keys(users[authedUser.id].answers);
  const notAnsweredQuestionsIds = Object.keys(questions).filter(q => !answeredQuestionsIds.includes(q));
  return {
    questions,
    users,
    authedUser,
    answeredQuestionsIds,
    notAnsweredQuestionsIds,
  }
}

Home.propTypes = {
  users: PropTypes.object.isRequired,
  authedUser: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired,
  answeredQuestionsIds: PropTypes.array.isRequired,
  notAnsweredQuestionsIds: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Home);
