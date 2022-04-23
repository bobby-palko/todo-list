import { Schema, model } from 'mongoose';

interface IItem {
  title: string;
  description: string;
  active: boolean;
}

const itemsSchema = new Schema<IItem>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  active: { type: Boolean, required: false },
});

const Item = model<IItem>('Item', itemsSchema);

export { Item, IItem };
