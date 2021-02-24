import styled from 'styled-components';
import PropTypes from 'prop-types';


const Avatar = styled.div.attrs((props) => ({className: props.className}))`
  width: 50px;
  height: 50px;
  border-radius: 99px;
  border: 1px solid #999;
  margin: 0 1.5rem;
  /* background-image: ${({ avatarURL }) => `url('${avatarURL || "./javiortega.jpeg"}')`}; */
  background-size: cover;
  background-position: center;
  }
  background-size: cover;
  background-position: center;
`;


Avatar.propTypes = {
  avatarURL: PropTypes.string.isRequired,
}

export { Avatar };
