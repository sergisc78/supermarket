const mongoose = require('mongoose');
const {isEmail}=require('validator');


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, "Email is required"],
        trim: true, // clean white spaces
        unique: true,
        lowercase:true,
        validate:[(value)=>{isEmail},'Please enter a valid email']


    },
    password: {
        type: String,
        require: [true, "Password is required"],
        trim: true,
        minlength: [6, 'Password too short, minimum 6 characters']
       
        
    },

}, {
    timestamps: true 
});

module.exports = mongoose.model('Users', UserSchema);

