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
  font-size: ${({theme}) => theme.fontSize.medium};
  text-transform: uppercase;
  color: ${(props) => props.active
    ? props.theme.colors.active
    : props.theme.colors.inactive };
  margin-right: 2rem;

`;

export { TabsWrapper, TabButton };
