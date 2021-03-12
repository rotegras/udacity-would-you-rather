import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../../components/User';
import { Container, TabsWrapper, TabButton } from '../../theme/Layout';


function LeaderBoard({ users }) {
  const result = (item) => (item.questions.length + Object.keys(item.answers).length);
  const sortUsers = users.sort((a, b) => result(b) - result(a));

  return (
    <Container>
      <TabsWrapper>
        <TabButton>Leaderbord</TabButton>
      </TabsWrapper>
        {
          sortUsers.map((user) => (
            <User key={user.id} user={user} />
          ))
        }
    </Container>
  )
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  }
}

LeaderBoard.propTypes = {
  users: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(LeaderBoard);
