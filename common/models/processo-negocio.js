'use strict';

module.exports = function (Processonegocio) {



    /**
 * Obtem lista de processo com filtro de contexto e semana
 * @param {number} idSemana
 * @param {string} contexto
 * @param {Function(Error, array)} callback
 */

    Processonegocio.ObtemComPlanoPorSemana = function (idSemana, idContexto, callback) {
        var listaProcesso;
        var filtro = {  "where" : { "ativo" : "1" } , 
                        "include" : {
                            "relation" : "planoExecucaos" , 
                            "scope" : {"where" : { "and" : [{"semanaId" : idSemana} , {"contextoId" : idContexto }] }}
                            } 
                    };
        Processonegocio.find(filtro,callback);
    };
};
