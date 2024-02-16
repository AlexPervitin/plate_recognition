import React, { Fragment } from 'react';
import {
  DateWrapper,
  ExpandedCellText,
  ExpandedRowWrapper,
  ExpandedWrapper,
  ImageWrapper,
  Stack,
  Status,
  TableCell,
  TableCellExpanded,
  TableCellText,
  TableTr,
} from './styles';

import { TABLE_DATA } from '@/common/constants';
import { useTableContext } from '@/context/TableContext';

const testImg2 = 'https://i.ibb.co/rG6s6J5/TestImg2.png';

const TableResults = () => {
  const { activeRowId, toggleRow, searchValue } = useTableContext();

  const data = searchValue
    ? TABLE_DATA.filter((item) => item.text.includes(searchValue))
    : TABLE_DATA;

  return data.map(({ number, text, time, camera, status, id, baseStatus }, index) => {
    const isRowExpanded = activeRowId === id;

    return (
      <Fragment key={index}>
        {isRowExpanded ? (
          <tr
            onClick={() => {
              toggleRow(id);
            }}>
            <TableCellExpanded colSpan="4">
              <ExpandedWrapper>
                <ImageWrapper>
                  <img src={testImg2} alt="img-big" />
                </ImageWrapper>
                <ExpandedRowWrapper>
                  <img src={number} alt="number" />
                  <ExpandedCellText>{text}</ExpandedCellText>
                  <Stack>
                    <DateWrapper>
                      <span>{time.split(' ')[0]} </span>
                      <span>{time.split(' ')[1]}</span>
                    </DateWrapper>
                    <span>{camera}</span>
                  </Stack>
                  <Status $status={status} />
                </ExpandedRowWrapper>
              </ExpandedWrapper>
            </TableCellExpanded>
          </tr>
        ) : (
          <TableTr
            $baseStatus={baseStatus}
            onClick={() => {
              toggleRow(id);
            }}
            key={index}>
            <TableCell>
              <img src={number} alt="number" />
            </TableCell>
            <TableCellText>{text}</TableCellText>
            <TableCell>
              <Stack>
                <DateWrapper>
                  <span>{time.split(' ')[0]} </span>
                  <span>{time.split(' ')[1]}</span>
                </DateWrapper>
                <span>{camera}</span>
              </Stack>
            </TableCell>
            <TableCell>
              <Status $status={status} />
            </TableCell>
          </TableTr>
        )}
      </Fragment>
    );
  });
};

export default TableResults;
