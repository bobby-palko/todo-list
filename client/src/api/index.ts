import axios from 'axios';
import { IItem } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const addItem = (payload: IItem) => api.post('/item', payload);
export const getAllItems = () => api.get('/items');
export const updateItemByID = (id: string, payload: string) =>
  api.put(`/item/${id}`, payload);
export const deleteItemByID = (id: string) => api.delete(`/item/${id}`);
export const getItemById = (id: string) => api.get(`/item/${id}`);

const apis = {
  addItem,
  getAllItems,
  updateItemByID,
  deleteItemByID,
  getItemById,
};

export default apis;
