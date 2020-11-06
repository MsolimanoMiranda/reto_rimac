
const PersonaReq = require("../models/request/PersonaReq");
const ResponseUserCreado = require("../models/response/ResponseUserCreado");
const axios = require('axios');
const PersonaDB = require("../db/PersonaDB");
const PersonaRes = require("../models/response/PersonaRes");

class PruebaRimacService {

 

  static async getPruebaRimacStarsWards(payload) {
  
    const id_people = payload.queryStringParameters && payload.queryStringParameters.id ? payload.queryStringParameters.id : "";
    const url = process.env.API_SERVICE_STARS_WARS+id_people;
    try {
      const { data } = await axios.get(url);

      return data;


    } catch (error) {
      throw error;
    }
  }

  


  static async postPruebaRimacStarsWards(payload) {

    const payloadreq = JSON.parse(payload.body);
    const personaReq = new PersonaReq(payloadreq);
    const detalles_persona= ['peliculas','especies','vehiculos','naves'];


    try {
     
      let resultado = await PersonaDB.insertarPersona(personaReq);

      if(resultado.insertId && resultado.insertId >0){

        detalles_persona.map((x)=>{
          if(payloadreq[x] && payloadreq[x].length>0 ){
            payloadreq[x].map(async (y)=>{
              let payloadDetalle={id_persona:resultado.insertId,descripcion:y,atributo:x};
              await PersonaDB.insertarAtributosPersona(payloadDetalle);
            })

        }
        });


      }
      
      const result= new ResponseUserCreado({codigo_usuario:resultado.insertId});

      return result;


    } catch (error) {
      throw error;
    }
  }


  

  
 

  static async getListarPersonas(payload) {
  
    let response = [];


    try {

      const result=  await PersonaDB.listPersonasCreadas();

      if(result.length>0){

      response = await Promise.all(result.map(async(x)=>{
          let rs=[];
          rs = new PersonaRes(x);
            if(x.peliculas && x.peliculas.length>0){

              let peliculas = await Promise.all(x.peliculas.map(async (y)=>{
                const { data } = await axios.get(y.descripcion);
              return data;
              }));
              
              rs.peliculas = peliculas;
            }
            if(x.especies && x.especies.length>0){
            
            let especies = await Promise.all(x.especies.map(async (y)=>{
              const { data } = await axios.get(y.descripcion);
            return data;
            }));
            rs.especies = especies;
          }

            if(x.vehiculos && x.vehiculos.length>0){
            let vehiculos = await Promise.all(x.vehiculos.map(async (y)=>{
              const { data } = await axios.get(y.descripcion);
            return data;
            }));
            rs.vehiculos = vehiculos;
          }
            if(x.naves && x.naves.length>0){
            let naves = await Promise.all(x.naves.map(async (y)=>{
              const { data } = await axios.get(y.descripcion);
            return data;
            }));
            rs.naves = naves;
          }
        
        
          return rs;
          
         
        }));

      }
      

      return response;


    } catch (error) {
      throw error;
    }
  }




}

module.exports = PruebaRimacService;