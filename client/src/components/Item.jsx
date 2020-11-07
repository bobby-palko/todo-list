import React, {useState} from "react";
import styled, {css} from "styled-components";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import Button from '@material-ui/core/Button';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CreateIcon from '@material-ui/icons/Create';
import NewItem from "./NewItem"

const StyledCard = styled.div`
    background-color: #EEE;
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.3);
    flex: 1;
    max-width: 240px;
    min-width: 240px;
    min-height: 260px;
    max-height: 260px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 5fr 1fr;
    ${props => props.isMouseOver && css`
        &:hover {
        transition: all .2s ease-in-out;
        transform: scale(1.05);
        }
    `}
`

const StyledButton = styled(Button)`
    && {
        width: 25%;
        border-radius: 10px 0 10px 0;
        border: none;
        color: rgb(0,0,0);
        background-color:rgb(0,200,200);
        ${props => props.pencil && css`
            border-radius: 0 10px 0 10px;
        `}
        &:hover {
            background-color: rgb(230,128,10);
        }
    }
`

const Item = (props) => {

    const [isEditing, setEdit] = useState(false);

    function updateEdit(){
        setEdit(true);
    };

    let notes = props.notes;

    if (notes && notes.length > 100) {
        notes = notes.substring(0,100) + "...";
    };


    if (isEditing) {
        return (
            <NewItem
                addItem={props.update}
                id={props.id}
                name={props.name}
                notes={props.notes}
            />
        )
    } else return (
        <StyledCard isMouseOver>
            <CardTitle><h3>{props.name}</h3></CardTitle>
            <CardBody><p>{notes}</p></CardBody>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <StyledButton pencil onClick={()=>updateEdit()}>
                <CreateIcon/>
            </StyledButton>
            <StyledButton onClick={()=>props.delete(props.id)}>
                <DeleteOutlineOutlinedIcon/>
            </StyledButton>
            </div>
        </StyledCard>
    );
}

export default Item;
export {StyledCard};