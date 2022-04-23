/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FunctionComponent, useCallback, useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { NewItemProps } from '../types';
import {
  StyledCard,
  StyledCardHeader,
  StyledCardBody,
  StyledInput,
  StyledTextArea,
  HRule,
  StyledFabButton,
} from './styles';

const NewItem: FunctionComponent<NewItemProps> = ({
  id,
  title,
  description,
  addItem,
  updateItem,
}) => {
  const [item, setItem] = useState({
    title,
    description,
  });

  const handleChange = useCallback(({ target: { name, value } }) => {
    setItem((prevItem) => ({
      ...prevItem,
      [name as string]: value as string,
    }));
  }, []);

  const submitItem = useCallback(() => {
    // only add the item if text is in both fields
    if (item.title && item.description) {
      if (id) {
        updateItem(id, item);
      } else if (addItem) {
        addItem(item);
      } else {
        console.log(`ERROR: Unable to submit item with title '${item.title}'.`);
        return;
      }
      setItem({
        title: '',
        description: '',
      });
    }
  }, [addItem, updateItem, id, item]);

  return (
    <StyledCard>
      <StyledCardHeader inputColor="rgb(255,255,255)">
        <h3>I Have a new idea!</h3>
      </StyledCardHeader>
      <StyledCardBody>
        <div>
          <form>
            <StyledInput
              name="title"
              placeholder="What's your idea?"
              value={item.title}
              onChange={handleChange}
            />
            <HRule />
            <StyledTextArea
              name="description"
              placeholder="Tell me about it!"
              value={item.description}
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
