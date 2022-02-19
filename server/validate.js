const Joi = require('joi');


// REGISTER VALIDATION

const resgisterValidation = (data) => {

    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
   return Joi.validate(data, schema);
}

module.exports.resgisterValidation=resgisterValidation;