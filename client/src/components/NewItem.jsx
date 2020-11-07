import React, { useState } from "react";
import {StyledCard} from "./Item";
import {StyledCardHeader} from "./CardTitle";
import {StyledCardBody} from "./CardBody";
import styled from "styled-components";
import Fab from '@material-ui/core/Fab';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const StyledInput = styled.input`
    display: block;
    background: inherit;
    font-family: inherit;
    font-size: 1rem;
    width: 80%;
    max-width: 80%;
    height: 30%;
    margin: 10px 0 0 10px;
    border: none;
    overflow: auto;
    outline: none;
    resize: none;
`

const StyledTextArea = styled.textarea`
    display: block;
    background: inherit;
    margin: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    width: 80%;
    max-width: 80%;
    border: none;
    overflow: auto;
    outline: none; 
    resize: none;
`

const HRule = styled.hr`
    border-style: dotted none none;
    border-color: rgba(50,50,50,0.5);
    border-width: 2px;
    width: 100%;
`

const StyledButton = styled(Fab)`
    && {
        position: relative;
        border: none;
        color: rgb(0,0,0);
        background-color: rgb(230,128,10);
        left: 200px;
        top: -135px;
        &:hover {
            background-color: rgb(255,128,0);
        }
    }
`

const NewItem = (props) => {

    const [item, setItem] = useState({
        name: props.name,
        notes: props.notes
    });

    function handleChange(event){
        const {name, value} = event.target;
        setItem(prevItem => {
            return {
                ...prevItem,
                [name]: value
            }
        })
    }

    function submitItem(event){    
        event.preventDefault(); //stops the page from reloading
        // only add the item if text is in both fields
        if(item.name && item.notes){
            if(props.id){
                props.addItem(props.id, item)
            } else {
                props.addItem(item);
            }   
            setItem({
                name: "",
                notes: ""
            })
        }
    }

    return (
        <StyledCard>
            <StyledCardHeader inputColor="rgb(255,255,255)">
                <h3>I Have a new idea!</h3>
            </StyledCardHeader>
            <StyledCardBody>
                <div>
                    <form>
                        <StyledInput 
                            name="name" 
                            placeholder="What's your idea?"
                            value={item.name}
                            onChange={handleChange}
                        />
                        <HRule/>
                        <StyledTextArea 
                            name="notes" 
                            placeholder="Tell me about it!"
                            value={item.notes}
                            onChange={handleChange}
                        />
                        <StyledButton onClick={submitItem}>
                            <AddCircleOutlineIcon fontSize="large"/>
                        </StyledButton>
                    </form>
                </div>
            </StyledCardBody>
        </StyledCard>
    )
};

export default NewItem;
