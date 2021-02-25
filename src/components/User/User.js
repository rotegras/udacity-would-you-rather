import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, Col } from '../../theme/Card';


function User({ user }) {
  const answered = Object.values(user.answers).length;
  const asked = user.questions?.length;
  return (
    <CardWrapper>
      <Col width='40'>
        <div>
          Avatar
        </div>
        <h3>
          {user.name}
        </h3>
      </Col>
      <Col width='60'>
        <div>
          {`Answered Questions: ${answered}`}
        </div>
        <div>
          {`Asked Questions: ${asked}`}
        </div>
        <div>
          {`Total: ${asked + answered}`}
        </div>
      </Col>
    </CardWrapper>

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
