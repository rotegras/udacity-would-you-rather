import styled from 'styled-components';


const Input = styled.input`
  margin-bottom: 1rem;
  font-size: ${({theme}) => theme.fontSize.medium};
  padding: .25rem;
  width: calc(100% - 1.5rem);

  &::placeholder {
    color: #999;
  }
`;

export { Input };
