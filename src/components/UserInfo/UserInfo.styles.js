import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({theme}) => theme.fontSize.base}
`;

const Text = styled.div`
  font-size: ${({theme}) => theme.fontSize.medium};
  margin-right: 2rem;
`;


export { Wrapper, Text };
