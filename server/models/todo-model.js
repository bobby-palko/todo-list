const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    name: { type: String, required: true},
    notes: { type: String, required: true }
});

module.exports = mongoose.model("Item", itemsSchema);