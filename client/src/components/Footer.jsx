import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    position: relative;
    text-align: center;
    bottom: 0;
    color: rgba(0,0,0,0.5);
`

const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright © {new Date().getFullYear()} Bobby Palko</p>
        </StyledFooter>
    )
};

export default Footer;