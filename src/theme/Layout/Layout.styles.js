import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: calc(100vh - ${({theme}) => theme.header.height});
  overflow-y: hidden;
  width: 100%;
`;

const Card = styled.article`
  background: ${({theme}) => theme.card.background};
  border-radius: ${({theme}) => theme.borderRadius};
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  font-size: ${({theme}) => theme.fontSize.base};
  margin: 0 auto 1rem;
  max-width: ${({theme}) => theme.card.maxWidth};
  padding: ${({theme}) => theme.card.padding};
  width: 100%;
  transition: all .3s ease;

  &::hover {
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


  h1,h2,h3,h4,h5,h6 {
    margin-top: 0
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(justify) => justify || 'flex-start'};
  width: 100%;
`;

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

const Content = styled.div`
  font-size: ${({theme}) => theme.fontSize.medium};
  color: ${({theme}) => theme.colors.primary};
`;


export { Card, Col, Container, Content, Row, TabButton, TabsWrapper };
