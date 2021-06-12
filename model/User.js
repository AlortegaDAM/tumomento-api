const mongoose = require('mongoose');

const UserSchema = new Schema({
    name: String,
    email: {
        type:String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: String,
    direction: String,
    longitude: String,
    latitude: String,
});

module.exports = mongoose.model('User', UsertSchema);