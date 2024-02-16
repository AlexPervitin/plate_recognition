import React from 'react';
import { SearchBlockWrapper } from './styles';
import Search from '../Search';
import { ButtonOpenGate } from '../Search/styles';
import { useTableContext } from '@/context/TableContext';

const SearchBlock = ({ placeholder }) => {
  const { searchValue, onChangeSearch, handleClearSearch } = useTableContext();

  return (
    <SearchBlockWrapper>
      <Search
        placeholder={placeholder}
        value={searchValue}
        onChange={onChangeSearch}
        handleClear={handleClearSearch}
      />
      <ButtonOpenGate>Open gate</ButtonOpenGate>
    </SearchBlockWrapper>
  );
};

export default SearchBlock;
