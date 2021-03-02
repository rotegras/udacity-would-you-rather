import styled from 'styled-components';


const FormWrapper = styled.form`
  width: 100%;
  outline: none;
  border: 0;
  margin-bottom: 2rem;

  fieldset {
    border: 0;
    padding: 0;
  }
`;

const OptionWrapper = styled.div`
  margin-bottom: .5rem;
  display: flex;
`;

const StyledInput = styled.input`
  margin-right: 1rem;
  display: ${(props) => props.isSingleQuestion ? 'block' : 'none'};
`;

const UserName = styled.h3`
  font-size: .75rem;
  margin: 0 0 .25rem;
`;

const QuestionDate = styled.div`
  font-size: .5rem;
`;


export { FormWrapper, OptionWrapper, QuestionDate, StyledInput, UserName };
