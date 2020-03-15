'use strict';

var app = require('../../server/server');

module.exports = function (Versaorecurso) {





    /*
    update VersaoRecurso
    set tempoRestantePlano = sec_to_time(time_to_sec(tempoPlanejado) - time_to_sec(tempoConsumido))

    select 
    DATE_ADD(now(), interval
    ((time_to_sec(tempoRestantePlano) / time_to_sec(tempoPlanejadoSemana)) * 7) day)
    from VersaoRecurso

    */


    Versaorecurso.ObtemComPlanoPorSemana = function (idSemana, idContexto, callback) {
        var listaProcesso;
        var filtro = {
            "where": { "emExecucao": "1" },
            "include": 
            [
                {
                "relation": "planoExecucaos",
                "scope": { "where": { "and": [{ "semanaId": idSemana }, { "contextoId": idContexto }] } },
                },
                "recursoProduto"
            ] 
        };
        Versaorecurso.find(filtro, callback);
    };


    Versaorecurso.AtualizaListaComPlano = function (listaVersaoRecurso, callback) {

        var listaProcesso2 = listaVersaoRecurso.lista;
        listaProcesso2.forEach((item) => {
            //console.log('Lista de plano: ', item.planoExecucaos.length);
            /*
            app.models.PlanoExecucao.bulkUpdate(item.listaProcesso, null, (err, result) => {
                console.log('Erro:', err);
                console.log("Resultado: ", JSON.stringify(result));
            })
            */
            //console.log('Item: ', item);
            item.planoExecucaos.forEach((plano) => {
                //console.log('Plano: ', JSON.stringify(plano));
                app.models.PlanoExecucao.upsert(plano, (err, result) => {
                    //console.log('Erro:', err);
                    //console.log("Resultado: ", JSON.stringify(result));
                })
            })


        });
        //console.log('Finalizado');
        callback(null);
    };

    /**
    * 
    * @param {Function(Error, object)} callback
    */
    Versaorecurso.CalculaDataFinalizacao = function (callback) {
        let sql1 = " update VersaoRecurso  " +
            " set tempoRestantePlano = sec_to_time(time_to_sec(tempoPlanejado) - time_to_sec(tempoConsumido))  " +
            " where emExecucao = 1 ";

        let sql2 = "update VersaoRecurso " +
            " set dataPrevista = DATE_ADD(now(), interval " +
            " ((time_to_sec(tempoRestantePlano) / time_to_sec(tempoPlanejadoSemana)) * 7) day) " +
            " where emExecucao = 1 ";

        var ds = Versaorecurso.dataSource;
        ds.connector.query(sql1, (err, result) => {
            //console.log("Sql1-err:" + err);
            ds.connector.query(sql2, (err, result) => {
                //console.log("Sql2-err:" + err);
                callback(err, result);
            })
        })
    };



};
