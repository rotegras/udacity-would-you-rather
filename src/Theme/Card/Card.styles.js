import styled from 'styled-components';


const CardWrapper = styled.div`
  background: ${({theme}) => theme.card.background};
  border: 1px solid #999;
  box-shadow: ${({theme}) => theme.card.boxShadow};
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  font-size: ${({theme}) => theme.fontSize.base};
  margin: 0 auto 1rem;
  max-width: ${({theme}) => theme.card.maxWidth};
  padding: ${({theme}) => theme.card.padding};
`;

const Col = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  text-align: left;
  width: ${(props) => props.width || 100}% ;
`;


export { CardWrapper, Col };

