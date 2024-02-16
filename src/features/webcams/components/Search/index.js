import SearchIcon from '@/assets/images/cars/SearchIcon';
import React from 'react';
import { CloseWrapper, CustomInput, IconsWrapper, SearchWrapper } from './styles';
import CloseIcon from '@/assets/images/cars/CloseIcon';

const Search = ({ placeholder, value, onChange, handleClear }) => {
  return (
    <SearchWrapper>
      <CustomInput placeholder={placeholder} value={value} onChange={onChange} />
      <IconsWrapper>
        {value && (
          <CloseWrapper onClick={handleClear}>
            <CloseIcon />
          </CloseWrapper>
        )}
        <SearchIcon fill={value ? '#258BE0' : '#fff'} />
      </IconsWrapper>
    </SearchWrapper>
  );
};

export default Search;
