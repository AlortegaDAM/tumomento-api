const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    imgURL: String,
});

module.exports = mongoose.model('Product', ProductSchema);