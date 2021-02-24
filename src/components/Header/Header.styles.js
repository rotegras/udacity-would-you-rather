import styled from 'styled-components';


const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .5rem;
  height: ${({theme}) => theme.header.height};
  margin-bottom: 4rem;
`;


export { Wrapper };
