import React from 'react';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import { Container} from '../../theme/Layout';
import Question from '../../components/Question';
import { TabsWrapper, TabButton } from '../../theme/Layout';


// eslint-disable-next-line
function QuestionView({ questions, users, id }) {

  // const { id } = useParams();

  return (
    <Container>
      <TabsWrapper>
        <TabButton>Question</TabButton>
      </TabsWrapper>
      <Question
        question={questions[id]}
        key={id}
        users={users}
        isSingleQuestion={true}
      />
    </Container>
  )
}

function mapStateToProps({ questions, users}, props) {
  const { id } = props.match.params;
  return {
    questions,
    users,
    id,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionView));
