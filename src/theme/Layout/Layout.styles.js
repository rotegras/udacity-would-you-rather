import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: hidden;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Card = styled.article`
  background: ${({theme}) => theme.card.background};
  border-radius: ${({theme}) => theme.borderRadius};
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  font-size: ${({theme}) => theme.fontSize.base};
  margin: 0 auto 1rem;
  max-width: ${({theme}) => theme.card.maxWidth};
  box-sizing: border-box;
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
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.active
    ? props.theme.colors.active
    : props.theme.colors.primary };
  margin-right: 2rem;
`;

const Content = styled.div`
  font-size: ${({theme}) => theme.fontSize.medium};
  color: ${(props) => props.active ? props.theme.colors.active : props.theme.colors.primary};
  font-weight: ${(props) => props.active ? 700 : 400};
`;


export { Card, Col, Container, Content, Row, TabButton, TabsWrapper };
