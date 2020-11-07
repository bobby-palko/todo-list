import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    margin-top:0;
    background-color: rgba(0,170,170,0.7);
    height: 100px;
    text-align: center;
    font-size: 1.1rem;
    padding: 1rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3); 
`


const Header = ({ children }) => {

    return (
        <StyledHeader primary>
            {children}
        </StyledHeader>
    );
}

export default Header;