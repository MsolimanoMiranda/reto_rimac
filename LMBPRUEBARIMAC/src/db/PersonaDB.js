const Query = require("../constants/Query_rds");
const PCCloudConnection = require("./PCCloudConnection");
const PersonaRes = require("../models/response/PersonaRes");
const DetalleRes = require("../models/response/DetalleRes");


class PersonaDB {


  static async insertarPersona(payload) {

    try {
  
      const insert_value= [payload.nombre,
                           payload.altura,
                           payload.masa,
                           payload.color_cabello,
                           payload.color_piel,
                           payload.color_ojos,
                           payload.ano_nacimiento,
                           payload.genero,
                           payload.homeworld,
                           payload.url];


      const resultado = await PCCloudConnection.executeInsertUpdateSQL(
        Query.QUERY_INSERT.Q_INSERT_PERSONA,
        insert_value
      );

      return resultado;

    } catch (error) {
      throw new Error(error);
    }
  }

  static async insertarAtributosPersona(payload) {

    try {
  
      const insert_value= [payload.id_persona,
                           payload.descripcion];
        
      const insert_query={
        'peliculas':Query.QUERY_INSERT.Q_INSERT_ARIBUTOS_PERSONA_PELICULAS,
        'especies':Query.QUERY_INSERT.Q_INSERT_ARIBUTOS_PERSONA_ESPECIES,
        'vehiculos':Query.QUERY_INSERT.Q_INSERT_ARIBUTOS_PERSONA_VEHICULOS,
        'naves':Query.QUERY_INSERT.Q_INSERT_ARIBUTOS_PERSONA_NAVES
      }
     
      const resultado = await PCCloudConnection.executeInsertUpdateSQL(
        insert_query[payload.atributo], 
        insert_value
      );

      return resultado;

    } catch (error) {
      throw new Error(error);
    }
  }

  

  static async listPersonasCreadas() {

    const condicion = [];
    let response = [];

    const templateRes = new PersonaRes({});

    var resultado = await PCCloudConnection.executeSQL(Query.QUERY_SELECT.Q_LISTAR_PERSONA,condicion, templateRes);

    if(resultado.length === 0){
      resultado = undefined;
    }else{

      response = await Promise.all (resultado.map(async (res)=>{

      const templateResDet = new DetalleRes({});
     
      const condicion_det=[res.Id];

      var resultado_detalle_pelis =  await PCCloudConnection.executeSQL(Query.QUERY_SELECT.Q_LIST_ARIBUTOS_PERSONA_PELICULAS,condicion_det, templateResDet);
  
      if(resultado_detalle_pelis.length>0){
        res.peliculas=resultado_detalle_pelis;
      }


      var resultado_detalle_especies = await  PCCloudConnection.executeSQL(Query.QUERY_SELECT.Q_LIST_ARIBUTOS_PERSONA_ESPECIES,condicion_det, templateResDet);
      if(resultado_detalle_especies.length>0){
        res.especies=resultado_detalle_especies;
      }

      var resultado_detalle_vehiculos= await  PCCloudConnection.executeSQL(Query.QUERY_SELECT.Q_LIST_ARIBUTOS_PERSONA_VEHICULOS,condicion_det, templateResDet);
      if(resultado_detalle_vehiculos.length>0){
        res.vehiculos=resultado_detalle_vehiculos;
      }

      var resultado_detalle_naves = await  PCCloudConnection.executeSQL(Query.QUERY_SELECT.Q_LIST_ARIBUTOS_PERSONA_NAVES,condicion_det, templateResDet);
      if(resultado_detalle_naves.length>0){
        res.naves=resultado_detalle_naves;
      }

         return res;
      }));


 
      return response;
    }


  }


}

module.exports = PersonaDB;




