export interface IItem {
  title: string;
  description: string;
}

export interface JItem {
  _id: string;
  title: string;
  description: string;
}

export interface ItemProps {
  id: string;
  title: string;
  description: string;
  updateItem: (id: string, item: IItem) => void;
  addItem?: (newItem: IItem) => void;
  remove: (id: string) => void;
}

export interface NewItemProps {
  id?: string;
  title: string;
  description: string;
  addItem?: (newItem: IItem) => void;
  updateItem: (id: string, item: IItem) => void;
}

export interface StyledCardHeaderProps {
  inputColor?: string;
}

export interface StyledCardProps {
  isMouseOver?: boolean;
}

export interface StyledButtonProps {
  pencil?: boolean;
}

export interface StyledHeaderProps {
  primary?: boolean;
}
