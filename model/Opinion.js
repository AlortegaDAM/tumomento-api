const mongoose = require('mongoose');

const OpinionSchema = mongoose.Schema({
    userid: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    description: String,
    multimedia: String,
    productoid: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    }
});

module.exports = mongoose.model('Opinion', OpinionSchema);