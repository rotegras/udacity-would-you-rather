import styled from 'styled-components';


const ContainerWrapper = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: calc(100vh - ${({theme}) => theme.header.height});
  overflow-y: hidden;
  width: 100%;
`;


export { ContainerWrapper };
