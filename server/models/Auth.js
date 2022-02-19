const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        require: [true, "Email is required"],
        trim: true, // clean white spaces
        unique: true,


    },
    password: {
        type: String,
        require: [true, "Password is required"],
        trim: true,
        min: [6, 'Password too short'],
        max: [10, 'Password too long']
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Users', UserSchema);