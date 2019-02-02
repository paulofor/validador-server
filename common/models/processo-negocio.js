'use strict';

var app = require('../../server/server');

module.exports = function (Processonegocio) {


    /**
     * Atualiza uma lista com os dados de plano para semana
     * @param {array} listaProcesso 
     * @param {Function(Error)} callback
     */

    Processonegocio.AtualizaListaComPlano = function (listaProcesso, callback) {
        //console.log('Lista de processo: ', listaProcesso.length);
        listaProcesso.forEach((item) => {
            //console.log('Lista de plano: ', item.planoExecucaos.length);
            /*
            app.models.PlanoExecucao.bulkUpdate(item.listaProcesso, null, (err, result) => {
                console.log('Erro:', err);
                console.log("Resultado: ", JSON.stringify(result));
            })
            */
            
            item.planoExecucaos.forEach((plano) => {
                //console.log('Plano: ', JSON.stringify(plano)); 
                app.models.PlanoExecucao.upsert(plano, (err, result) => {
                    //console.log('Erro:', err);
                    //console.log("Resultado: ", JSON.stringify(result));
                })
            })
            
            
        });
        console.log('Finalizado');
        callback(null);
    };



    /**
    * Obtem lista de processo com filtro de contexto e semana
    * @param {number} idSemana
    * @param {string} contexto
    * @param {Function(Error, array)} callback
    */

    Processonegocio.ObtemComPlanoPorSemana = function (idSemana, idContexto, callback) {
        var listaProcesso;
        var filtro = {
            "where": { "ativo": "1" },
            "include": {
                "relation": "planoExecucaos",
                "scope": { "where": { "and": [{ "semanaId": idSemana }, { "contextoId": idContexto }] } }
            }
        };
        Processonegocio.find(filtro, callback);
    };
};
