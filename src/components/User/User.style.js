import styled from 'styled-components';


const ResultsWrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: .5rem;
`;

const ResultsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1;
`;

const ResultsLabel = styled.div`
  font-size: .5rem;
  line-break: auto;
  padding-right: .5rem;
`;

const ResultsNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #999;

`;

export { ResultsWrapper, ResultsColumn, ResultsLabel, ResultsNumber };
