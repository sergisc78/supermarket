//ROUTES FOR FOOD
const express=require('express');
const router=express.Router();
const foodController=require('../controllers/FoodController');

//API/FOOD

router.post('/',foodController.createFood);
router.get('/',foodController.getFood);
router.put('/:id',foodController.updateFood);
router.get('/:id',foodController.getOneFood);
router.delete('/:id',foodController.deleteFood);

module.exports=router;