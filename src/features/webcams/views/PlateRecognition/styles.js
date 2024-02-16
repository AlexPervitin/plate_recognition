import styled from 'styled-components';

export const PlateRecognitionWrapper = styled.div`
  display: flex;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.bgSection};
  padding: 16px;
  gap: 8px;
`;

export const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
