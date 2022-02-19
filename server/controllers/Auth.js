const User = require('../models/Auth');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');




exports.userRegister = async (req, res) => {

    
    //CHECKING IF USER IS IN DATABASE
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('Email already exist');

    //HASH PASSWORD

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);


    //CREATE  NEW USER
    const user = new User({
        email: req.body.email,
        password: hashPassword
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");
    }

}

exports.userLogin = async (req, res) => {
    
    //CHECKING IF EMAIL IS IN DATABASE
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Email is not found');

    //IF PASSWORD IS CORRECT

    const validPass=await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Invalid password');

    res.send('Logged in !');

}