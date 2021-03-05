import React from 'react';
// eslint-disable-next-line
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container} from '../../theme/Layout';
import Question from '../../components/Question';
import { TabsWrapper, TabButton } from '../../theme/Layout';


// eslint-disable-next-line
function QuestionView({ questions, users }) {

  let { id } = useParams();

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

function mapStateToProps({ questions, users}) {
  return {
    questions,
    users,
  }
}

export default connect(mapStateToProps)(QuestionView);
