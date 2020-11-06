const Joi = require('joi');

class RequestValidator {


    static validateRequest() {
        const schemaPersonaStartWars = Joi.object().keys({
            nombre: Joi.string().required(),
            altura: Joi.number().required(),
            masa: Joi.number().required(),
            color_cabello:Joi.string().required(),
            color_piel:Joi.string().required(),
            color_ojos:Joi.string().required(),
            ano_nacimiento:Joi.string().required(),
            genero:Joi.string().required(),
            homeworld:Joi.string().required(),
            url:Joi.string().required(),
            peliculas: Joi.array().items(Joi.string()),
            especies: Joi.array().items(Joi.string()),
            vehiculos: Joi.array().items(Joi.string()),
            naves: Joi.array().items(Joi.string()),
        });

       

        const schema = Joi.object().keys({
            personaStartWars: schemaPersonaStartWars
        });

        return schema;
    }

}

module.exports = RequestValidator;


 