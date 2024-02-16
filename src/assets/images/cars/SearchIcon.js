import React from 'react';

const SearchIcon = ({ fill }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 6H6V7.2759C6 7.74377 6.16403 8.19684 6.46356 8.55627L10.5364 13.4437C10.836 13.8032 11 14.2562 11 14.7241V19L13 18V14.7241C13 14.2562 13.164 13.8032 13.4636 13.4437L17.5364 8.55627C17.836 8.19684 18 7.74377 18 7.2759V6Z"
        fill={fill}
        fillOpacity={fill === '#fff' ? '0.75' : '1'}
      />
    </svg>
  );
};

export default SearchIcon;
