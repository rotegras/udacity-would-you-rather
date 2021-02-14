import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../User';


// eslint-disable-next-line
function LeaderBoard({ users }) {
  return (
    <ul>
      {
        users.map((user) => (
          <User key={user.id} user={user} />
        ))
      }
    </ul>
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
