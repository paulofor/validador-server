'use strict';

var app = require('../../server/server');

module.exports = function (Processonegocio) {



    /**
    * Obtem todas as informações para o dia
    * @param {Function(Error, array, object, object, array)} callback
    */
    Processonegocio.ObtemPlanoDia = function (callback) {
        var listaProcesso, diaSemana, semana, listaTempoExecucao;
        var dataReferencia = new Date();
        app.models.DiaSemana.findOne({ 'where': { 'posicaoDia': dataReferencia.getDay } }, (err, result1) => {
            console.log('Dia:', result1);
            diaSemana = result1;
            app.models.Semana.ObtemPorData(dataReferencia, (err, result2) => {
                console.log('Semana', result2);
                semana = result2;
                var filtroPlano = { 
                    "include" : "processoNegocio" ,
                    "where" : 
                    { "and" : [
                        {"semanaId" : semana.id},
                        {"diaSemanaId": diaSemana.id},
                        {"tempoEstimado" : { "neq" : 0 }},
                        {"contextoId" : 1 }
                    ] } 
                }
                console.log('Filtro: ' , JSON.stringify(filtroPlano));
                app.models.PlanoExecucao.find(filtroPlano, (err,result3) => {
                    listaProcesso = result3;
                    var filtroTempo = {
                        "include" : ["processoNegocio" , "projetoMySql"],
                        "where" : {
                            "and" : 
                            [
                            {"semanaId" : semana.id},
                            {"diaSemanaId": diaSemana.id},
                            {"contextoId" : 1 }
                            ]
                        },
                        "order" : "horaInicio"
                    }
                    app.models.TempoExecucao.find(filtroTempo, (err,result)=> {
                        listaTempoExecucao = result;
                        callback(null, listaProcesso, diaSemana, semana, listaTempoExecucao);
                    })
                })
            })
        });
    };


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
