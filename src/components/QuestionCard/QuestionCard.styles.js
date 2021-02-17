import styled from 'styled-components';


const FormWrapper = styled.form`
  width: 100%;
  outline: none;
  border: 0;
  margin-bottom: 2rem;

  fieldset {
    border: 0;
  }
`;

const OptionWrapper = styled.div`
  margin-bottom: .5rem;
`;


const StyledInput = styled.input`
  margin-right: 1rem;
  display: ${(props) => props.display ? 'block' : 'none'};
`;




export { FormWrapper, OptionWrapper, StyledInput };
