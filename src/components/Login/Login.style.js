import styled from 'styled-components';


const StyledHeader = styled.h2`
  min-width: 100%;
  margin-bottom: .5rem;
  text-align: center;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 200px;
  display: flex;
`;

const Option = styled.option`
  height: 20px;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.medium};

  &:placeholder {
    color: #999;
  }
`;

const Select = styled.select`
  background: #fff;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: 1px solid #eee;
  width: 100%;
  padding: .25rem .5rem;
  height: 24px;
  margin-right: 2rem;
  appearance: none
`;

export { StyledHeader, Form, Option, Select };