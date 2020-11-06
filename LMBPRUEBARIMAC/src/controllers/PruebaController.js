
const requestValidator = require('../validators/RequestValidador');
const PruebaRimacService = require('../services/PruebaRimacService');
const AwsUtils = require("../util/AwsUtils");


class PruebaController {

    static async Consultarstarwarsapicontroller(event, context) {
        try {
            console.log("Request received: " + JSON.stringify(event));
		
            const result = await PruebaRimacService.getPruebaRimacStarsWards(event);
            
            return await AwsUtils.buildResponse(result);

        } catch (error) {
            console.log({ error })
            return await AwsUtils.buildErrorResponse(event, error);
        }
    }


    static async regitrarstarwarsapicontroller(event, context) {
        try {
            console.log("Request received: " + JSON.stringify(event));
		
            await AwsUtils.validateRequest(event, requestValidator.validateRequest());
            
            const result = await PruebaRimacService.postPruebaRimacStarsWards(event);
            return await AwsUtils.buildResponse(result);
        } catch (error) {
            console.log({ error })
            return await AwsUtils.buildErrorResponse(event, error);
        }
    }


    static async listarpersonaapicontroller(event, context) {
        try {
            console.log("Request received: " + JSON.stringify(event));
		
            const result = await PruebaRimacService.getListarPersonas(event);
            return await AwsUtils.buildResponse(result);
        } catch (error) {
            console.log({ error })
            return await AwsUtils.buildErrorResponse(event, error);
        }
    }




}
module.exports = PruebaController;