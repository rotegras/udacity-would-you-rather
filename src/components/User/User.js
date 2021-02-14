import React from 'react';
import PropTypes from 'prop-types';


function User({ user }) {
  const answered = Object.values(user.answers).length;
  const asked = user.questions?.length;
  return (
    <div>
      <div>
        Avatar
      </div>
      <h3>
        {user.name}
      </h3>
      <div>
        {`Answered Questions: ${answered}`}
      </div>
      <div>
        {`Asked Questions: ${asked}`}
      </div>
      <div>
        {`Total: ${asked + answered}`}
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
