const User = require('../models/Auth.js');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



exports.userRegister = async (req, res) => {


    //CHECKING IF USER IS IN DATABASE
    const emailExist = await User.findOne({
        email: req.body.email
    });
    if (emailExist) return res.status(400).send('Email already exist');

    //HASH PASSWORD

    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    try {
        //CREATE  NEW USER
        const user = new User({
            email: req.body.email,
            password: hashPassword
        });
        //const savedUser = 
        await user.save();
        //res.send(savedUser);
        res.json({message:"User created successfuly"})
    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");
    }

}

exports.userLogin = async (req, res) => {

    //CHECKING IF EMAIL IS IN DATABASE
    const user = await User.findOne({
        email: req.body.email
    });
    if (!user) return res.status(400).send('Email is not found');

    //IF PASSWORD IS CORRECT

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    res.send('Logged in !');

}