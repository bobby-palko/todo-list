import React from "react";
import styled from "styled-components";

const StyledCardHeader = styled.div`
    background-color: rgba(0,170,170,0.9);
    text-align: center;
    border-radius: 10px 10px 0 0;
    border-bottom: 5px solid rgb(0,200,200);
    color: ${props => props.inputColor || "inherit"};
`

const CardTitle = ({children}) => {
    return (
        <StyledCardHeader>
            {children}
        </StyledCardHeader>
    )
}

export default CardTitle;
export {StyledCardHeader};