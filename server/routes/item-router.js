const express = require('express');

const ItemCtrl = require('../controllers/item-ctrl');

const router = express.Router();

router.post('/item', ItemCtrl.createItem);
router.put('/item/:id', ItemCtrl.updateItem);
router.delete('/item/:id', ItemCtrl.deleteItem);
router.get('/item/:id', ItemCtrl.getItemById);
router.get('/items', ItemCtrl.getAllItems);

module.exports = router;