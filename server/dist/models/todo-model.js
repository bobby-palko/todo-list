"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var mongoose_1 = require("mongoose");
var itemsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    active: { type: Boolean, required: false },
});
var Item = (0, mongoose_1.model)('Item', itemsSchema);
exports.Item = Item;
