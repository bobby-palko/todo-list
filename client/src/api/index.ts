import axios from 'axios';
import { IItem } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

const addItem = async (payload: IItem) => api.post('/item', payload);
const getAllItems = async () => api.get('/items');
const updateItemByID = async (id: string, payload: IItem) =>
  api.put(`/item/${id}`, payload);
const deleteItemByID = async (id: string) => api.delete(`/item/${id}`);
const getItemById = async (id: string) => api.get(`/item/${id}`);

const apis = {
  addItem,
  getAllItems,
  updateItemByID,
  deleteItemByID,
  getItemById,
};

export default apis;
