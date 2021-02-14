import React from 'react';
import PropTypes from 'prop-types';


function User({ user }) {
  return (
    <div>
      <h3>
        {user.name}
      </h3>
      <div>
        {`Answered Questions: ${Object.values(user.answers).length}`}
      </div>
      <div>
        {`Asked Questions: ${user.questions?.length}`}
      </div>
    </div>

  )
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    answers: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
  }).isRequired,
}


export default User;
