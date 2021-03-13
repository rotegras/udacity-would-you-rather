/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { TabsWrapper, TabButton, Card } from '../../theme/Layout';
import Question from '../../components/Question';
import NoResultsToShow from '../../components/NoResultsToShow';
import PATHS from '../../data/CONSTANTS';


function Home({ questions, users, authedUser, answeredQuestionsIds, notAnsweredQuestionsIds }) {

  const [showAnswered, setShowAnswered] = useState(false);

  const handleClick = () => {
    setShowAnswered(!showAnswered);
  }

  !authedUser && <Redirect to={PATHS.LOGIN} />

  return (
    <div>
      <TabsWrapper>
        <TabButton
          value='notanswered'
          onClick={handleClick}
          active={!showAnswered}
        >
          {`Not Answered (${notAnsweredQuestionsIds.length})`}
        </TabButton>
        <TabButton
          value='answered'
          onClick={handleClick}
          active={showAnswered}
        >
          {`Answered (${answeredQuestionsIds.length})`}
        </TabButton>
      </TabsWrapper>
        { !showAnswered
        ? (
          notAnsweredQuestionsIds.length === 0
          ? <NoResultsToShow />
          : notAnsweredQuestionsIds
            .map((qid) => (
              <div key={qid}>
                <Question
                  key={qid}
                  question={questions[qid]}
                  users={users}
                  isSingleQuestion={false}
                  isAnswered={false}
                />
              </div>
            )
          )
        )
        : (
          answeredQuestionsIds?.length === 0
          ? <NoResultsToShow />
          : answeredQuestionsIds
            .map((qid) => (
              <div key={qid}>
                <Question
                  key={qid}
                  question={questions[qid]}
                  users={users}
                  isSingleQuestion={false}
                  isAnswered={true}
                />
              </div>
            )
          )
        )
      }
    </div>
  )
}

function mapStateToProps({ questions, users, authedUser }) {
  const answeredQuestionsIds = Object.keys(users[authedUser.id].answers)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  const notAnsweredQuestionsIds = Object.keys(questions).filter((q) => !answeredQuestionsIds.includes(q))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    questions,
    users,
    authedUser: authedUser.id,
    answeredQuestionsIds,
    notAnsweredQuestionsIds,
  }
}

Home.propTypes = {
  users: PropTypes.object.isRequired,
  authedUser: PropTypes.string.isRequired,
  questions: PropTypes.object.isRequired,
  answeredQuestionsIds: PropTypes.array.isRequired,
  notAnsweredQuestionsIds: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Home);
