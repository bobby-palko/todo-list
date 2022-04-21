import { Router } from 'express';

import {
  createItem,
  updateItem,
  deleteItem,
  getItemById,
  getAllItems,
} from '../controllers/item-ctrl';

const router = Router();

router.post('/item', createItem);
router.put('/item/:id', updateItem);
router.delete('/item/:id', deleteItem);
router.get('/item/:id', getItemById);
router.get('/items', getAllItems);

export default router;
