import styled from 'styled-components';


const Wrapper = styled.article`
  border: 1px solid #999;
  display: flex;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 400px;
  box-shadow: 0 0 15px #eee;
`;

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Right = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
`;


export { Wrapper, Left, Right };
