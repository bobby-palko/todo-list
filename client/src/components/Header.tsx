import React from 'react';
import { StyledHeader } from './styles';

const Header = ({ children }: any) => (
  <StyledHeader primary>{children}</StyledHeader>
);

export default Header;
