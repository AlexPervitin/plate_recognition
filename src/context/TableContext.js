import { TABLE_DATA } from '@/common/constants';
import React, { useContext, useState, createContext } from 'react';

const TableContext = createContext();
export const useTableContext = () => {
  return useContext(TableContext);
};
export const TableProvider = ({ children }) => {
  const [activeRowId, setActiveRowId] = useState(null);
  const [isExpandedVideo, setIsExpandedVideo] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleRow = (id) => {
    setActiveRowId((prevActiveRow) => (prevActiveRow === id ? null : id));
  };

  const handleExpandVideo = () => {
    setIsExpandedVideo((prev) => !prev);
  };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
  };

  const currentRow = TABLE_DATA.find((item) => item.id === activeRowId);

  const value = {
    activeRowId,
    currentRow,
    toggleRow,

    isExpandedVideo,
    handleExpandVideo,

    searchValue,
    onChangeSearch,
    handleClearSearch,
  };
  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
