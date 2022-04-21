import React, { useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {
  StyledCard,
  StyledCardHeader,
  StyledCardBody,
  StyledInput,
  StyledTextArea,
  HRule,
  StyledFabButton,
} from './styles';

const NewItem = (props: any) => {
  const [item, setItem] = useState({
    name: props.name,
    notes: props.notes,
  });

  function handleChange(event: any) {
    const { name, value } = event.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  }

  function submitItem(event: any) {
    event.preventDefault(); // stops the page from reloading
    // only add the item if text is in both fields
    if (item.name && item.notes) {
      if (props.id) {
        props.addItem(props.id, item);
      } else {
        props.addItem(item);
      }
      setItem({
        name: '',
        notes: '',
      });
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
            <HRule />
            <StyledTextArea
              name="notes"
              placeholder="Tell me about it!"
              value={item.notes}
              onChange={handleChange}
            />
            <StyledFabButton onClick={submitItem}>
              <AddCircleOutlineIcon fontSize="large" />
            </StyledFabButton>
          </form>
        </div>
      </StyledCardBody>
    </StyledCard>
  );
};

export default NewItem;
