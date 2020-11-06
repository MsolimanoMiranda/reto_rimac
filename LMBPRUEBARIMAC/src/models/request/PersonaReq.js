class PersonaReq {
    constructor({
        nombre = undefined,
        altura = undefined,
        masa = undefined,
        color_cabello = undefined,
        color_piel = undefined,
        color_ojos = undefined,
        ano_nacimiento = undefined,
        genero = undefined,
        homeworld = undefined,
        url = undefined,
    }) {
        this.nombre = nombre;
        this.altura = altura;
        this.masa = masa;
        this.color_cabello = color_cabello;
        this.color_piel = color_piel;
        this.color_ojos = color_ojos;
        this.ano_nacimiento = ano_nacimiento;
        this.genero = genero;
        this.homeworld = homeworld;
        this.url = url
    }
}

module.exports = PersonaReq;



