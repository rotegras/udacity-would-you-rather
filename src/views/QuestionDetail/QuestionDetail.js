import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container} from '../../theme/Layout';
import Question from '../../components/Question';
import { TabsWrapper, TabButton } from '../../theme/Layout';
import PageNotFound from '../../components/PageNotFound';


function QuestionDetail({ question, users, id }) {

  if (!question) return <PageNotFound />

  return (
    <Container>
      <TabsWrapper>
        <TabButton>Question</TabButton>
      </TabsWrapper>
      <Question
        question={question}
        key={id}
        users={users}
        isSingleQuestion={true}
      />
    </Container>
  )
}

QuestionDetail.propTypes = {
  question: PropTypes.object.isRequired,
  users: PropTypes.shape.isRequired,
  id: PropTypes.string.isRequired,
}

function mapStateToProps({ authedUser, questions, users }, { match }) {
  const { id } = match.params;
  console.table(users[authedUser.id].questions);
  console.log(id);
  return {
    question: questions[id],
    users,
    id,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetail));
