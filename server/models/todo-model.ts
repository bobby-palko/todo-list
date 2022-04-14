import { Schema, model } from 'mongoose';

interface IItem {
  title: string;
  description: string;
}

const itemsSchema = new Schema<IItem>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Item = model<IItem>('Item', itemsSchema);

export { Item, IItem };
