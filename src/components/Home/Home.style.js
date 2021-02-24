import styled from 'styled-components';


const TabsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${({theme}) => theme.card.maxWidth};
  width: 100%;
  padding: 1rem;
`;

const TabButton = styled.button`
  display: block;
  background: transparent;
  border: none;
  color: ${(props) => props.active ? '#000' : '#999'};
  margin-right: 2rem;
`;

export { TabsWrapper, TabButton };
