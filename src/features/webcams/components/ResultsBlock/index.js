import React, { useState } from 'react';
import { ResultsBlockWrapper } from './styles';
import SettingPanel from '../SettingPanel';
import TableComponent from '../Tables';
import { THEAD_TABLE_RESULT, THEAD_TABLE_RESULT_WITH_OPT } from '@/common/constants';
import { useTableContext } from '@/context/TableContext';

export const tabs = [
  {
    id: 'live',
    title: 'Live',
  },
  {
    id: 'archive',
    title: 'Archive',
  },
];

const ResultsBlock = () => {
  const { searchValue } = useTableContext();

  const [tab, setTab] = useState(tabs[0].id);

  const handleChangeTab = (tab) => {
    setTab(tab);
  };

  return (
    <ResultsBlockWrapper>
      <SettingPanel tab={tab} handleChangeTab={handleChangeTab} />
      {tab === 'live' ? <TableComponent headData={THEAD_TABLE_RESULT} /> : <div>Archive</div>}
    </ResultsBlockWrapper>
  );
};

export default ResultsBlock;
