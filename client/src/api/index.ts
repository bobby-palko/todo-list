import axios from 'axios';
import { IItem } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

const addItem = (payload: IItem) => api.post('/item', payload);
const getAllItems = () => api.get('/items');
const updateItemByID = (id: string, payload: IItem) =>
  api.put(`/item/${id}`, payload);
const deleteItemByID = (id: string) => api.delete(`/item/${id}`);
const getItemById = (id: string) => api.get(`/item/${id}`);

const apis = {
  addItem,
  getAllItems,
  updateItemByID,
  deleteItemByID,
  getItemById,
};

export default apis;
