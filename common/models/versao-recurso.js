'use strict';

var app = require('../../server/server');

module.exports = function (Versaorecurso) {




    Versaorecurso.ObtemPlanoDia = function (idContexto, callback) {
        //console.log('Contexto' + idContexto);
        var listaProcesso, diaSemana, semana, listaTempoExecucao;
        var dataReferencia = new Date(new Date().toLocaleDateString() + " 00:00:00");
        //var dataHoje = new Date();
        //dataHoje = new Date(dataHoje.getTime() + 86400000);
        var dataReferencia = new Date(dataHoje.toLocaleDateString() + " 00:00:00");
        var posicao = dataReferencia.getDay() - 1;
        //console.log('Posicao:', posicao);
        if (posicao==-1) posicao = 6;
        //console.log('Posicao: ' , posicao);
        //console.log('dataReferencia: ', dataReferencia , 'dataReferencia.getDay():' , dataReferencia.getDay());
        app.models.DiaSemana.findOne({ 'where': { 'posicaoDia': posicao } }, (err, result1) => {
            //console.log('Dia:', result1);
            diaSemana = result1;
            app.models.Semana.ObtemPorData(dataReferencia, (err, result2) => {
                //console.log('Semana', result2);
                semana = result2;
                var filtroPlano = {
                    "include": {
                        "relation" : "versaoRecurso" , "scope" : { "include" : "recursoProduto"}
                    },
                    "where":
                        {
                            "and": [
                                { "semanaId": semana.id },
                                { "diaSemanaId": diaSemana.id },
                                { "tempoEstimado": { "neq": 0 } },
                                { "contextoId": idContexto }
                            ]
                        }
                }
                //console.log('Filtro: ' , JSON.stringify(filtroPlano));
                app.models.PlanoExecucao.find(filtroPlano, (err, result3) => {
                    listaProcesso = result3;
                    var filtroTempo = {
                        "include": [
                            "processoNegocio", 
                            "projetoMySql" , 
                            {
                                "relation" : "versaoRecurso" , "scope" : { "include" : "recursoProduto"}
                            },
                            { "relation" : "recursoProduto" , "scope" : 
                                { "include" : {"relation" : "versaoRecursos" , "scope" : {"where" : {"emExecucao":"1"} } }  }
                            }
                        ],
                        "where": {
                            "and":
                                [
                                    { "semanaId": semana.id },
                                    { "diaSemanaId": diaSemana.id },
                                    { "contextoId": idContexto }
                                ]
                        },
                        "order": "horaInicio DESC"
                    }
                    app.models.TempoExecucao.find(filtroTempo, (err, result) => {
                        listaTempoExecucao = result;
                        callback(null, listaProcesso, diaSemana, semana, listaTempoExecucao);
                    })
                })
            })
        });
    };




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
