import styled from 'styled-components';
import PropTypes from 'prop-types';



const AvatarImage = styled.div.attrs((props) => ({className: props.className}))`
  width: 50px;
  height: 50px;
  border-radius: 99px;
  margin: 0 1.5rem 0 0 ;
  display: block;
  background-image: ${({ avatarURL }) => `url('${avatarURL}')`};
  background-size: cover;
  background-position: center;
`;

const QuestionDate = styled.div`
  font-size: .5rem;
`;

const QuestionAuthor = styled.h3`
  font-size: .75rem;
  margin: 0 0 .25rem;
`;


AvatarImage.propTypes = {
  avatarURL: PropTypes.string.isRequired,
}

export { AvatarImage, QuestionDate, QuestionAuthor };
