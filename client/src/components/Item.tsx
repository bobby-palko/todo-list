import React, { useState } from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CreateIcon from '@material-ui/icons/Create';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import NewItem from './NewItem';
import { StyledCard, StyledButton } from './styles';

const Item = (props: any) => {
  const [isEditing, setEdit] = useState(false);

  function updateEdit() {
    setEdit(true);
  }

  let { description } = props;

  if (description && description.length > 100) {
    description = `${description.substring(0, 100)}...`;
  }

  if (isEditing) {
    return (
      <NewItem
        addItem={props.update}
        id={props.id}
        name={props.name}
        notes={props.notes}
      />
    );
  }
  return (
    <StyledCard isMouseOver>
      <CardTitle>
        <h3>{props.name}</h3>
      </CardTitle>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledButton pencil onClick={() => updateEdit()}>
          <CreateIcon />
        </StyledButton>
        <StyledButton onClick={() => props.delete(props.id)}>
          <DeleteOutlineOutlinedIcon />
        </StyledButton>
      </div>
    </StyledCard>
  );
};

export default Item;
