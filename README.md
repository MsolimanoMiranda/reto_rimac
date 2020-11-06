cliente/obtener : devuleve datos del cliente existe en SAS , Equifax o Journey.

Request:
{
      "documentoIdentidad":{
                    "tipoDocumento":"1",
                    "numeroDocumento":"44444444"
      },
      "auditoria":{
                    "usuario":"prueba@gmail.com",  // CORREO ASESOR
                    "fecha":"2019/10/30",
                    "hora":"20:41:58",
                    "canal":"jvvida",
                    "identificadorUsuario": 123 //-ID ASESOR
                    
      }
}

Response:
{
   "type":"success",
   "code":100,
   "data":{
      "informacionPersonal":{
         "documentoIdentidad":{
            "numeroDocumento":"44444444",
            "tipoDocumento":1
         },
         "apellidoMaterno":"CESPEDES",
         "apellidoPaterno":"DIAZ",
         "nombres":"HEMILIANA",
         "fechaNacimiento":"12/03/1987",
         "sexo":"F",
         "estadoCivil":"Z",
         "nacionalidad":"Peruano",
         "telefono":[
            {
               "codigoArea":1,
               "numeroTelefono":"99999999",
               "tipoTelefono":1
            }
         ],
         "correoElectronico":[
            {
               "codigoTipoCorreo":1,
               "direccionCorreoElectronico":"hemiliana@gmail.com"
            }
         ],
         "direccion":[
            {
               "codigoTipoDireccion":1,
               "codigoPais":80,
               "codigoDepartamento":192,
               "codigoProvincia":413,
               "codigoDistrito":1764,
               "codigoTipoVia":"1",
               "direccionCompleta":"AV ABANCAY 555"
            }
         ]
      },
      "cliente":{
         "idTercero":38084759,
         "marcaLPDP":1
      }
   }
}
