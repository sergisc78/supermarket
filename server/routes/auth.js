const express=require('express');
const router=express.Router();
const Users=require('../controllers/Auth');

//API/AUTH
router.post('/',Users.userRegister);
router.get('/',Users.userLogin);



module.exports=router;