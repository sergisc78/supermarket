const Food = require('../models/Food');

//POST
exports.createFood = async (req, res) => {
    try {

        let food;

        //  CREATE PRODUCT
        food = new Food(req.body);

        await food.save();
        res.send(food);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}


// GET
exports.getFood = async (req, res) => {
    try {
        let food = await Food.find();
        res.json(food);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

//UPDATE 
exports.updateFood = async (req, res) => {
    try {

        const {productName,type,stock,price} = req.body;
        let food = await Food.findById(req.params.id);


        //IF FOOD DOESN'T EXIST
        if (!food) {
            res.status(400).json({
                message: 'Product not found'
            })

        }

        food.productName = productName;
        food.type = type;
        food.stock = stock;
        food.price = price;

        // IF DRINK EXISTS, IT WILL BE UPDATED

        food = await Food.findByIdAndUpdate({id: req.params.id}, food, {new: true});
        res.json(food);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}


// GET FOOD BY ID
exports.getOneFood = async (req, res) => {
    try {
        let food = await Food.findById(req.params.id);


        //IF FOOD DOESN'T EXIST
        if (!food) {
            res.status(400).json({
                message: 'Product not found'
            });
        }

        res.json(food);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

//DELETE DRINK BY ID
exports.deleteFood = async (req, res) => {
    try {
        let food = await Food.findById(req.params.id);

        if (!food) {
            res.status(400).json({
                message: 'Product not found'
            });

        }

        await Food.findOneAndRemove({
            _id: req.params.id
        });
        res.json({message: "Food deleted successfuly"});

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}