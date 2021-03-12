import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from '../../theme/Layout';
import Avatar from '../Avatar';
import * as S from './User.style';


function User({ user }) {
  const answered = Object.values(user.answers).length;
  const asked = user.questions?.length;
  return (
    <Card>
      <Col width='40'>
        <Avatar
          username={user.name}
          avatarURL={user.avatarURL}
        />
      </Col>
      <Col width='60'>
        <S.ResultsWrapper >
          <S.ResultsColumn>
            <S.ResultsLabel>
              Answered
            </S.ResultsLabel>
            <S.ResultsNumber>
              {answered}
            </S.ResultsNumber>
          </S.ResultsColumn>
          <S.ResultsColumn>
            <S.ResultsLabel>
              Asked
            </S.ResultsLabel>
            <S.ResultsNumber>
              {asked}
            </S.ResultsNumber>
          </S.ResultsColumn>
          <S.ResultsColumn>
            <S.ResultsLabel>
              Score
            </S.ResultsLabel>
            <S.ResultsNumber>
              {asked + answered}
            </S.ResultsNumber>
          </S.ResultsColumn>
        </S.ResultsWrapper >
      </Col>
    </Card>

  )
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    answers: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
  }).isRequired,
}


export default User;
