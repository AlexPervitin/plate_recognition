import styled from 'styled-components';

export const TableWrapper = styled.div`
  height: 538px;
  overflow: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TheadCell = styled.th`
  text-align: start;
  padding: 12px;
  border-top: 1px solid ${(props) => props.theme.colors.brTable};
  border-bottom: 1px solid ${(props) => props.theme.colors.brTable};
  color: ${(props) => props.theme.colors.theadText};
`;

export const TheadCellBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: ${(props) => (props.$isClick ? 'pointer' : '')};
  user-select: none;
`;

export const SpacingCell = styled.td`
  height: 12px;
`;
