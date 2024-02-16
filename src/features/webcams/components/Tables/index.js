import React from 'react';
import { SpacingCell, Table, TableWrapper, TheadCell, TheadCellBlock } from './styles';
import TableResults from './TableResults';

const TableComponent = ({ headData }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {headData.map(({ title, icon: Icon, onClick }, index) => {
              return (
                <TheadCell key={index}>
                  <TheadCellBlock $isClick={!!Icon} onClick={onClick}>
                    {title}
                    {Icon && <Icon />}
                  </TheadCellBlock>
                </TheadCell>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <SpacingCell colSpan="4"></SpacingCell>
          </tr>
          <TableResults />
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default TableComponent;
