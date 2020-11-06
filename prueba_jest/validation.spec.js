
const { PAYLOAD_REGISTRAR_CASO } = require('./stubs/values-stub');

describe('Test Validation', () => {
    describe('Test Validar Registrar Caso Parametros', () => {

        it('Test NOMBRE-REQUERIDO', async () => {
            expect.assertions(2);
            try {
                const payload = {  persona: {
                    id_flujo: "e7cb26c9-7664-428f-b810-d3720fa340db",
                    altura: "172",
                    masa: "77",
                    color_cabello: "blond",
                    color_piel: "fair",
                    color_ojos: "blue",
                    ano_nacimiento: "19BBY",
                    genero: "male",
                    homeworld: "https://swapi.py4e.com/api/planets/1/",
                    peliculas: [
                        "https://swapi.py4e.com/api/films/1/",
                        "https://swapi.py4e.com/api/films/2/",
                        "https://swapi.py4e.com/api/films/3/",
                        "https://swapi.py4e.com/api/films/6/",
                        "https://swapi.py4e.com/api/films/7/"
                        ],
                    especies: [
                        "https://swapi.py4e.com/api/species/1/"
                        ],
                        vehiculos: [
                        "https://swapi.py4e.com/api/vehicles/14/",
                        "https://swapi.py4e.com/api/vehicles/30/"
                        ],
                        naves: [
                        "https://swapi.py4e.com/api/starships/12/",
                        "https://swapi.py4e.com/api/starships/22/"
                        ],
                        url: "https://swapi.py4e.com/api/people/1/",
                } };
                
            } catch (error) {
                expect(error).toBeInstanceOf(BusinessException);
                expect(error).toHaveProperty('message', "ERRO");
                expect(error).toHaveProperty('details', ['El campo nombre es requerido para la inserccion.']);
            }
        });
        it('Test altura-requerido-numerico', async () => {
            expect.assertions(3);
            try {
                const payload = {  persona: {
                    id_flujo: "e7cb26c9-7664-428f-b810-d3720fa340db",
                    altura: "xxx",
                    masa: "77",
                    color_cabello: "blond",
                    color_piel: "fair",
                    color_ojos: "blue",
                    ano_nacimiento: "19BBY",
                    genero: "male",
                    homeworld: "https://swapi.py4e.com/api/planets/1/",
                    peliculas: [
                        "https://swapi.py4e.com/api/films/1/",
                        "https://swapi.py4e.com/api/films/2/",
                        "https://swapi.py4e.com/api/films/3/",
                        "https://swapi.py4e.com/api/films/6/",
                        "https://swapi.py4e.com/api/films/7/"
                        ],
                    especies: [
                        "https://swapi.py4e.com/api/species/1/"
                        ],
                        vehiculos: [
                        "https://swapi.py4e.com/api/vehicles/14/",
                        "https://swapi.py4e.com/api/vehicles/30/"
                        ],
                        naves: [
                        "https://swapi.py4e.com/api/starships/12/",
                        "https://swapi.py4e.com/api/starships/22/"
                        ],
                        url: "https://swapi.py4e.com/api/people/1/",
                }};
               
            } catch (error) {
                expect(error).toBeInstanceOf(BusinessException);
                expect(error).toHaveProperty('message', "Error");
                expect(error).toHaveProperty('details', ['campo altura tiene que ser un numero']);
            }
        });
    });
});
