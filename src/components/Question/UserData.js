import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from '../../theme/Layout'
import { Avatar } from '../Avatar';
import { UserName, QuestionDate } from './Question.styles';


export default function UserData({ users, question }) {
  return (
    <>
      <Row>
        <Col width='30'>
          <Avatar
            avatarURL={users[question.author]?.avatarURL}
          />
        </Col>
        <Col align='center'>
          <UserName>{users[question.author].name}</UserName>
          <QuestionDate>asked on {new Date(question.timestamp).toLocaleDateString()}</QuestionDate>
        </Col>
      </Row>
    </>
  )
}

UserData.propTypes = {
  users: PropTypes.object.isRequired,
  question: PropTypes.shape.isRequired,
}

