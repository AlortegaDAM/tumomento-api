const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    userid: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    date: Date,
    products: [
        {
            id:{
                type: mongoose.Schema.ObjectId,
                ref: 'Product',
                required: true
            },
            cantidad: {
                type: Number,
                default: 1
            }
        }
    ]
});

module.exports = mongoose.model('Order', OrderSchema);