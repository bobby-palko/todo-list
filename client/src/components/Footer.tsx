import React from 'react';
import { StyledFooter } from './styles';

const Footer = () => (
  <StyledFooter>
    <p>Copyright © {new Date().getFullYear()} Bobby Palko</p>
  </StyledFooter>
);

export default Footer;
