import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as S from './Avatar.style';


export default function Avatar({ username, timestamp, avatarURL }) {
  return (
    <>
      <S.AvatarWrapper>
          <S.AvatarImage
            avatarURL={avatarURL}
            username={username}
          />
          <div>
            <S.QuestionAuthor>{username}</S.QuestionAuthor>
            {timestamp &&
              <S.QuestionDate>asked on {new Date(timestamp).toLocaleDateString()}</S.QuestionDate>
            }
          </div>
      </S.AvatarWrapper>
    </>
  )
}

Avatar.propTypes = {
  username: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  timestamp: PropTypes.number,
}

