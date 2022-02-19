const Cleaning = require('../models/Cleaning');


//CREATE
exports.createCleaning = async (req, res) => {
    try {
        let cleaning = new Cleaning(req.body);

        //  CREATE PRODUCT

        await cleaning.save();
        res.send(cleaning);

    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");
    }
}


//GET
exports.getCleaning = async (req, res) => {
    try {

        let cleaning = await Cleaning.find();
        res.json(cleaning);

    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");
    }

}


//UPDATE
exports.updateCleaning = async (req, res) => {
    try {
        const {
            productName,
            type,
            stock,
            price
        } = req.body;
        let cleaning = await Cleaning.findById(req.params.id);

        //IF CLEANING PRODUCT DOESN'T EXIST
        if (!cleaning) {
            res.status(400).json({
                message: 'Product not found'
            });
        }


        cleaning.productName = productName,
            cleaning.type = type,
            cleaning.stock = stock,
            cleaning.price = price

        // IF DRINK EXISTS, IT WILL BE UPDATED
        cleaning = await Cleaning.findByIdAndUpdate({ _id: req.params.id}, cleaning, {new: true});
        res.json(cleaning);

    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");
    }
}

// GET CLEANING PRODUCT BY ID
exports.getOneCleaning = async (req, res) => {
    try {
        let cleaning = await Cleaning.findById(req.params.id);

        //IF CLEANING PRODUCT DOESN'T EXIST
        if (!cleaning) {
            res.status(400).json({
                message: 'Product not found'
            });
        }

        res.json(cleaning)

    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");
    }
}

// DELETE  CLEANING PRODUCT BY ID
exports.deleteCleaning = async (req, res) => {
    try {

        let cleaning = await Cleaning.findById(req.params.id);

        //IF CLEANING PRODUCT DOESN'T EXIST
        if (!cleaning) {
            res.status(400).json({
                message: 'Product not found'
            });
        }

        await Cleaning.findOneAndRemove({id: req.params.id});
        res.json({message: 'Cleaning Product deleted succesfully'});

    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");
    }
}