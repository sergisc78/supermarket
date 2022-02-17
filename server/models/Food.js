const moongoose = require('mongoose');

const FoodSchema = moongoose.Schema({
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

module.exports = moongoose.model('food', FoodSchema);