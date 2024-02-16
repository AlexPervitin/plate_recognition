import React from 'react';
import HeadMenu from '../HeadMenu';
import { Wrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <HeadMenu />
      {children}
    </Wrapper>
  );
};

export default Layout;
