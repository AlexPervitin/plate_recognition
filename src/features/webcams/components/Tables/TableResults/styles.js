import styled from 'styled-components';

export const TableCell = styled.td`
  text-align: start;
  padding: 7px 0 7px 12px;
  vertical-align: middle;
  color: ${(props) => props.theme.colors.tableText};
  cursor: pointer;
  white-space: nowrap;
`;

export const TableCellExpanded = styled.td`
  text-align: center;
  padding: 12px;
  background: ${(props) => props.theme.colors.brTable};
  border-radius: 6px;
  cursor: pointer;
`;

export const TableCellText = styled(TableCell)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const ExpandedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ExpandedRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  gap: 10px;
  text-align: start;
  border-radius: 3px;
  background: ${(props) => props.theme.colors.bgExpandedCell};
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.tableText};
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
`;

export const Status = styled.div`
  border-radius: 100px;
  width: 6px;
  height: 6px;
  background: ${(props) =>
    props.$status === 'green'
      ? props.theme.colors.textSuccess
      : props.$status === 'yellow'
      ? props.theme.colors.textPartial
      : props.theme.colors.textFailed};
`;

export const ExpandedCellText = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  color: ${(props) => props.theme.colors.tableText};
  white-space: nowrap;
`;

export const DateWrapper = styled.div`
  span {
    &:last-child {
      color: ${(props) => props.theme.colors.textTime};
    }
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

export const TableTr = styled.tr`
  background: ${(props) =>
    props.$baseStatus === 'green'
      ? props.theme.colors.bgTableCellStatusGreen
      : props.$baseStatus === 'red'
      ? props.theme.colors.bgTableCellStatusRed
      : 'transparent'};
  &:hover {
    background: ${(props) =>
      props.$baseStatus === 'green'
        ? props.theme.colors.bgTableCellStatusGreen
        : props.$baseStatus === 'red'
        ? props.theme.colors.bgTableCellStatusRed
        : props.theme.colors.bgTableTrHover};
  }
`;
