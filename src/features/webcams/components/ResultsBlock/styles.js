import styled from 'styled-components';

export const ResultsBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
  padding: 16px;
  background: ${(props) => props.theme.colors.bgSecSection};
  height: 100%;
`;
