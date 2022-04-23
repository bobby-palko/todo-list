/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FunctionComponent, useState } from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CreateIcon from '@material-ui/icons/Create';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import NewItem from './NewItem';
import { StyledCard, StyledButton } from './styles';
import { ItemProps } from '../types';

const Item: FunctionComponent<ItemProps> = ({
  id,
  title,
  description,
  updateItem,
  remove,
}) => {
  const [isEditing, setEdit] = useState(false);

  function updateEdit() {
    setEdit(true);
  }

  let shortDescription = '';
  if (description && description.length > 100) {
    shortDescription = `${description.substring(0, 100)}...`;
  }

  if (isEditing) {
    return (
      <NewItem
        updateItem={updateItem}
        id={id}
        title={title}
        description={shortDescription || description}
      />
    );
  }
  return (
    <StyledCard isMouseOver>
      <CardTitle>
        <h3>{title}</h3>
      </CardTitle>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledButton pencil onClick={() => updateEdit()}>
          <CreateIcon />
        </StyledButton>
        <StyledButton onClick={() => remove(id)}>
          <DeleteOutlineOutlinedIcon />
        </StyledButton>
      </div>
    </StyledCard>
  );
};

export default Item;
