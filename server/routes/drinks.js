//ROUTES FOR DRINKS

const express=require('express');
const router=express.Router();
const drinksController=require('../controllers/DrinksController')

//API/DRINKS

router.post('/',drinksController.createDrink);
router.get('/',drinksController.getDrinks);
router.put('/:id',drinksController.updateDrink);

module.exports=router;