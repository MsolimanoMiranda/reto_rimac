const Service = require('../LMBPRUEBARIMAC/src/services/PruebaRimacService');
const DataAccess = require('../LMBPRUEBARIMAC/src/db//PersonaDB');
const { PAYLOAD_REGISTRAR_CASO, MOCK_RES_INS_ORDEN, MOCK_RES_TAREA, ACTIVIDADES_FLUJO } = require('./stubs/values-stub'); 

beforeAll(() => {
    process.env.REGION = 'us-east-2';
    process.env.STAGE = 'LOCAL';

});

describe('Test Service', () => {
    describe('Validar funciones', () => {
        it('Test crear pERSONA', async () => {
            expect.assertions(1); 

            const mockObtActFlujo = jest.spyOn(DataAccess, 'insertarPersona');
            mockObtActFlujo.mockImplementation(() => ACTIVIDADES_FLUJO);

            const result = await Service.postPruebaRimacStarsWards(PAYLOAD_REGISTRAR_CASO);
            expect(result).toHaveProperty('flujo');
        });
    });
});