const Cleaning = require('../models/Cleaning');

exports.createCleaning = async (req, res) => {
    try {
        let cleaning = new Cleaning(req.body);

        //  CREATE PRODUCT

        await Cleaning.save();
        res.send(cleaning);

    } catch (error) {
        console.log(error);
        res.status(400).send("There was an error");
    }
}

exports.getCleaning = async (req, res) => {

}

exports.updateCleaning = async (req, res) => {

}
exports.getOneCleaning = async (req, res) => {

}
exports.deleteCleaning = async (req, res) => {

}