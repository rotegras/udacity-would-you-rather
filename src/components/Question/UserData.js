import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from '../../theme/Card'
import { Avatar } from '../Avatar';
import { UserName, QuestionDate } from './Question.styles';


export default function UserData({ users, question }) {
  return (
    <Col width='50'>
      <Row>
        <Col>
          <Avatar
            avatarURL={users[question.author]?.avatarURL}
          />
        </Col>
        <Col align='center'>
          <UserName>{users[question.author].name}</UserName>
          <QuestionDate>asked on {new Date(question.timestamp).toLocaleDateString()}</QuestionDate>
        </Col>
      </Row>
    </Col>
  )
}

UserData.propTypes = {
  users: PropTypes.shape.isRequired,
  question: PropTypes.shape.isRequired,
}

