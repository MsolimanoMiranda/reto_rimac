

module.exports = {
    PAYLOAD_REGISTRAR_PERSONA: {
        persona: {
            id_flujo: "e7cb26c9-7664-428f-b810-d3720fa340db",
            nombre: "Luke Skywalker",
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
        }
    },
    ACTIVIDADES_FLUJO: [
        {
            idflujoactividad: 10,
            idactividadini: undefined,
            idactividadfin: 1,
            procesoini: undefined,
            procesofin: undefined,
            idarea: 1,
            idusuarioresp: 1
        },
        {
            idflujoactividad: 11,
            idactividadini: 1,
            idactividadfin: 2,
            procesoini: undefined,
            procesofin: undefined,
            idarea: 2,
            idusuarioresp: 2
        }
    ],
    MOCK_RES_INS_ORDEN: {
        id_insorden: 20
    },
    MOCK_RES_TAREA: {
        id_tarea: 24
    },
    OBJECT_FLUJO: {
        descripcion: "Flujo de Registro",
        usucreacion: "PREUBA",
        usumodificacion: "PREUBA",
        fecmodificacion: "26102020_124333",
        feccreacion: "26102020_124333",
        id_flujo: "e7cb26c9-7664-428f-b810-d3720fa340db",
        sts_flujo: "ACT"
    }
}
