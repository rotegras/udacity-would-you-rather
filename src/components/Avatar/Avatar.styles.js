import styled from 'styled-components';
import PropTypes from 'prop-types';



const Avatar = styled.div.attrs((props) => ({className: props.className}))`
  width: 50px;
  height: 50px;
  border-radius: 99px;
  margin: 0 1.5rem 0 0 ;
  display: block;
  //read images from public directory
  box-shadow: 0 2px 5px #999;
  /* background-image: ${({ avatarURL }) => `url('${process.env.REACT_APP_PUBLIC_URL}/${avatarURL}')`}; */
  background-image: ${({ avatarURL }) => `url('${avatarURL}')`};
  background-size: cover;
  background-position: center;
`;


Avatar.propTypes = {
  avatarURL: PropTypes.string.isRequired,
}

export { Avatar };
