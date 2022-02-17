//ROUTES FOR CLEANING PRODUCTS
const express = require('express');
const router = express.Router();
const CleaningProductsController = require('../controllers/CleaningProductsController')

//API/CLEANING

router.post('/', CleaningProductsController.createCleaning);
router.get('/', CleaningProductsController.getCleaning);
router.put('/:id', CleaningProductsController.updateCleaning);
router.get('/:id', CleaningProductsController.getOneCleaning);
router.delete('/:id', CleaningProductsController.deleteCleaning);

module.exports = router;