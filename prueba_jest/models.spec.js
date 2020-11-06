const ReqFlujo = require('../LMBPRUEBARIMAC/src/models/request/PersonaReq');
const ResFlujo = require('../LMBPRUEBARIMAC/src/models/response/PersonaRes');

const { OBJECT_FLUJO } = require('./stubs/values-stub');

describe('Test Models', () => {
    it('Test Models ReqFlujo', async () => {
        expect.assertions(1);
        const flujo = new ReqFlujo(OBJECT_FLUJO);
        expect(flujo).toHaveProperty('id_flujo');
    });
    it('Test Models ResFlujo', async () => {
        expect.assertions(14);
        const flujo = new ResFlujo(OBJECT_FLUJO);
        expect(flujo).toHaveProperty('id_flujo');
        expect(flujo).toHaveProperty('nombre');
        expect(flujo).toHaveProperty('altura');
        expect(flujo).toHaveProperty('masa');
        expect(flujo).toHaveProperty('color_cabello');
        expect(flujo).toHaveProperty('color_piel');
        expect(flujo).toHaveProperty('color_ojos');
        expect(flujo).toHaveProperty('ano_nacimiento');
        expect(flujo).toHaveProperty('genero');
        expect(flujo).toHaveProperty('homeworld');
        expect(flujo).toHaveProperty('peliculas');
        expect(flujo).toHaveProperty('especies');
        expect(flujo).toHaveProperty('vehiculos');
        expect(flujo).toHaveProperty('naves');

    });
});


