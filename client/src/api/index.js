import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api/todo/',
})

export const addItem = payload => api.post('/item', payload);
export const getAllItems = () => api.get('/items');
export const updateItemByID = (id, payload) => api.put(`/item/${id}`, payload);
export const deleteItemByID = id => api.delete(`/item/${id}`);
export const getItemById = id => api.get(`/item/${id}`);

const apis = {
    addItem,
    getAllItems,
    updateItemByID,
    deleteItemByID,
    getItemById,
};

export default apis;