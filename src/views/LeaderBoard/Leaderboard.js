import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../../components/User';
import { Container, TabsWrapper, TabButton } from '../../theme/Layout';


function LeaderBoard({ users }) {
  return (
    <Container>
      <TabsWrapper>
        <TabButton>Leaderbord</TabButton>
      </TabsWrapper>
      <ul>
        {
          users.map((user) => (
            <User key={user.id} user={user} />
          ))
        }
      </ul>
    </Container>
  )
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  }
}

LeaderBoard.propTypes = {
  users: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(LeaderBoard);
