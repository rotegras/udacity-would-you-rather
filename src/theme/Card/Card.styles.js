import styled from 'styled-components';


const CardWrapper = styled.div`
  background: ${({theme}) => theme.card.background};
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  font-size: ${({theme}) => theme.fontSize.base};
  margin: 0 auto 1rem;
  max-width: ${({theme}) => theme.card.maxWidth};
  padding: ${({theme}) => theme.card.padding};
  width: 100%;
  transition: all .3s ease;

  &:hover {
    box-shadow: 0 0 15px #ebebeb;
  }
`;

const Col = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: ${(props) => props.align ? props.align : 'flex-start'};
  text-align: left;
  width: ${(props) => props.width || 100}% ;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;


export { CardWrapper, Col, Row };

