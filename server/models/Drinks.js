const mongoose = require('mongoose');


const DrinksSchema = mongoose.Schema({
    productName: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    stock: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    dateCreation:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('drinks', DrinksSchema);