const Joi = require('joi');

const validationMessages= {   
  "any": {
      "unknown": "no está permitido",
      "invalid": "contiene un valor inválido",
      "empty": "no debe estar vacío",
      "required": "es requerido",
      "allowOnly": "debe tener uno de estos valores {{valids}}"
  },
  "number": {
      "base": "debe ser un número",
      "min": "debe ser mayor o igual a {{limit}}",
      "max":"'debe ser menor o igual a {{limit}}",
      "less": "debe ser menor que {{limit}}",
      "greater": "debe ser mayor que {{limit}}",
      "float": "debe ser un valor decimal",
      "integer": "debe ser un valor entero",
      "negative": "debe ser un número negativo",
      "positive": "debe ser un número positivo",
      "precision": "no debe tener más de {{limit}} decimales",
      "multiple": "debe ser múltiplo de {{multiple}}"
  },
  "string": {
      "base": "debe tener un valor",
      "min": "la cantidad de caracteres debe ser al menos {{limit}}",
      "max": "la cantidad de caracteres debe ser menos o igual a {{limit}}",
      "length": "la cantidad de caracteres debe ser{{limit}}",
      "alphanum": "debe contener solo caracteres alfanuméricos",
      "token": "debe contener solo caracteres alfanuméricos y guión bajo",
      "regex": {
          "base": "con valor \"{{!value}}\" no coincide para el patrón: {{pattern}}",
          "name": "con valor \"{{!value}}\" no coincide para el patrón {{name}}"
      },
      "email": "debe ser un email válido",
      "uri": "debe ser una uri válida",
      "isoDate": "debe ser una fecha ISO 8601 válida",
      "guid": "debe ser un GUID válido",
      "hex": "debe contener solo caracteres hexadecimales",
      "hostname": "debe ser un hostname válido",
      "lowercase": "debe contener solo letras minúsculas",
      "uppercase": "debe contener solo letras mayúsculas",
      "trim": "no debe haber espacios en blanco al inicio o final de la palabra.",
      "creditCard": "debe ser una tarjeta de crédito"
  }
};

class AwsUtils {


  static async buildResponse(payload) {

    let alert = "SUCCESS";
    let resdata = payload;
    let rescode;
    let isOK = 0;


    const obj = {
      type: alert,
      code: 200,
      data: payload
    };

    const response = {
      statusCode: 200,
      body: JSON.stringify(obj),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'no-referrer-when-downgrade',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      }
    };
    //console.log();
    console.log("BUILD RESPONSE: " + JSON.stringify(response));

    return response;
  }


  static async buildErrorResponse(event, error) {
    const obj = {
      type: "error",
      code: 101,
      data: "null/error/"
    };

    const response = {
      statusCode: 401 ,
      body: JSON.stringify(obj),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'no-referrer-when-downgrade',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      }
    };

    let msgError = "" + error;
    return response;
  }





  static async validateRequest(event, schema) {
    const request = JSON.stringify(event);
      this._validateBody(request);

    if (schema) {
      this._validate(schema, request);
    }
  }

  static _validateBody(request) {
    if (!request) {
      throw new BusinessError({
        code: 401,
        httpCode: 401,
        messages: "NO body",
      });
    }
  }

  static _validate(schema, src) {
    const validation = Joi.validate(src, schema, {
      allowUnknown: true,
      abortEarly: false,
      language: validationMessages,
    });

    if (validation.error) {
      const messagesError = [];
      validation.error.details.forEach((value) => {
        messagesError.push(value.message);
      });
console.log("error validacion::" + messagesError);
      throw new BusinessError({
        code: 401,
        httpCode:401,
        messages: messagesError,
      });
    }
  }
  




}

module.exports = AwsUtils;