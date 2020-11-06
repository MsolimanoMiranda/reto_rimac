exports.QUERY_INSERT = {
    Q_INSERT_PERSONA:
       `INSERT INTO reto_rimac.persona (nombre, altura, masa, color_cabello, color_piel, color_ojos, ano_nacimiento, genero, homeworld,url) VALUES 
       (?,?,?,?,?,?,?,?,?,?)`,
    Q_INSERT_ARIBUTOS_PERSONA_PELICULAS:`INSERT INTO reto_rimac.peliculas(id_persona,descripcion)values(?,?)`,
    Q_INSERT_ARIBUTOS_PERSONA_ESPECIES:`INSERT INTO reto_rimac.especies(id_persona,descripcion)values(?,?)`,
    Q_INSERT_ARIBUTOS_PERSONA_VEHICULOS:`INSERT INTO reto_rimac.vehiculos(id_persona,descripcion)values(?,?)`,
    Q_INSERT_ARIBUTOS_PERSONA_NAVES:`INSERT INTO reto_rimac.naves(id_persona,descripcion)values(?,?)`,

   
}


exports.QUERY_SELECT = {

    Q_LISTAR_PERSONA : `SELECT persona.Id,
    persona.nombre,
    persona.altura,
    persona.masa,
    persona.color_cabello,
    persona.color_piel,
    persona.color_ojos,
    persona.ano_nacimiento,
    persona.genero,
    persona.homeworld,
    persona.url
    FROM reto_rimac.persona;`,
    Q_LIST_ARIBUTOS_PERSONA_PELICULAS:`SELECT  id_persona,descripcion FROM reto_rimac.peliculas where id_persona=?`,
    Q_LIST_ARIBUTOS_PERSONA_ESPECIES:`SELECT  id_persona,descripcion FROM reto_rimac.especies where id_persona=?`,
    Q_LIST_ARIBUTOS_PERSONA_VEHICULOS:`SELECT  id_persona,descripcion FROM reto_rimac.vehiculos where id_persona=?`,
    Q_LIST_ARIBUTOS_PERSONA_NAVES:`SELECT  id_persona,descripcion FROM reto_rimac.naves where id_persona=?`,





}