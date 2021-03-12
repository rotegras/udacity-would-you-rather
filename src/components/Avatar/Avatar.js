import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from '../../theme/Layout'
import { AvatarImage, QuestionAuthor, QuestionDate } from './Avatar.style';


export default function Avatar({ username, timestamp, avatarURL }) {
  return (
    <>
      <Row>
        <Col width='30'>
          <AvatarImage
            avatarURL={avatarURL}
            username={username}
          />
        </Col>
        <Col align='center'>
          <QuestionAuthor>{username}</QuestionAuthor>
          {timestamp &&
            <QuestionDate>asked on {new Date(timestamp).toLocaleDateString()}</QuestionDate>
          }
        </Col>
      </Row>
    </>
  )
}

Avatar.propTypes = {
  username: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  timestamp: PropTypes.number,
}

