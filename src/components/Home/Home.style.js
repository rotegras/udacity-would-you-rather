import styled from 'styled-components';


const Button = styled.button`
  background: #fff;
  border: 0;
  border-radius: 0;
  padding: 1rem 2rem;
  font-size: 14px;
  color: ${props => props.active === true ? '#000' : '#999'};

  cursor: {$props => props.active === true ? 'initial' : 'pointer'}
`;


export { Button };
