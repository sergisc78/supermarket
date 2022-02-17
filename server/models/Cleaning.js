const mongoose = require('mongoose');

const CleaningSchema = mongoose.Schema({
    productName: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    dateCreation: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('cleaning', CleaningSchema);