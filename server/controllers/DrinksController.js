const Drinks = require("../models/Drinks");


//POST
exports.createDrink = async (req, res) => {
    try {

        let drink;

        //  CREATE PRODUCT

        drink = new Drinks(req.body);

        await drink.save();
        res.send(drink);


    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");
    }
}


//GET
exports.getDrinks = async (req, res) => {
    try {

        let drinks = await Drinks.find();
        res.json(drinks);

    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");

    }
}

//UPDATE
exports.updateDrink = async (req, res) => {
    try {

        const {productName,type,stock,price} = req.body;
        let drink = await Drinks.findById(req.params.id);

        //IF DRINK DOESN'T EXIST

        if (!drink) {
            res.status(404).json({
                message: 'Product not found'
            });
        }

        drink.productName=productName;
        drink.type=type;
        drink.stock=stock;
        drink.price=price;


        // IF DRINK EXISTS, IT WILL BE UPDATED

        drink = await Drinks.findByIdAndUpdate({_id:req.params.id},drink,{new:true});
        res.json(drink);

    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");
    }
}


//GET DRINK BY ID
exports.getOneDrink=async(req,res)=>{
    try {
        let drink = await Drinks.findById(req.params.id);

        //IF DRINK DOESN'T EXIST

        if (!drink) {
            res.status(404).json({
                message: 'Product not found'
            });
        }
        res.json(drink);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");
    }
}

//DELETE DRINK BY ID
exports.deleteDrink=async(req,res)=>{
    try {
        let drink = await Drinks.findById(req.params.id);

        //IF DRINK DOESN'T EXIST

        if (!drink) {
            res.status(404).json({
                message: 'Product not found'
            });
        }
        await Drinks.findByIdAndRemove({_id:req.params.id});
        res.json({message:'Drink deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error");
    }

}

