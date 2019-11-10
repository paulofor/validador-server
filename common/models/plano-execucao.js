'use strict';

module.exports = function (Planoexecucao) {




    /**
    * Cria por um processo todas as semanas existentes
    * @param {number} idProcessoNegocio
    * @param {Function(Error)} callback
    */

    Planoexecucao.CriaPorProcesso = function (idProcessoNegocio, idContexto, callback) {
        // TODO
        var sql = "select id from Semana where id not in " +
            " ( select semanaId from PlanoExecucao where processoNegocioId = " + idProcessoNegocio +
            " and contextoId = " + idContexto + " ) "
        var ds = Planoexecucao.dataSource;
        ds.connector.query(sql, (err, result) => {
            if (err) {
                //console.log(err);
               // callback(err,null);
                return;
            }
            result.map((item) => {
                //console.log('Item:' , item);
                var plano = {   "contextoId" : idContexto , 
                                "processoNegocioId" : idProcessoNegocio,
                                "semanaId" : item.id,
                                "tempoEstimadoStr" : "00:00",
                                "tempoEstimado" : new Date(0),
                                "tempoExecucao" : new Date(0),
                                "tempoExecucaoStr" : "00:00",
                                "diaSemanaId" : 1
                            }
                 Planoexecucao.create(plano, (err,res) => {
                    if (err) {
                        //console.log(err);
                        //callback(err,null);
                        return;
                    }
                    //console.log("err:" , err);
                    plano.diaSemanaId = 2;
                    Planoexecucao.create(plano, (err,res) => {
                        if (err) {
                            //console.log(err);
                            //callback(err,null);
                            return;
                        }
                        //console.log("err:" , err);
                        plano.diaSemanaId = 3;
                        Planoexecucao.create(plano, (err,res) => { 
                            if (err) {
                                //console.log(err);
                                //callback(err,null);
                                return;
                            }
                            plano.diaSemanaId = 4;
                            Planoexecucao.create(plano, (err,res) => { 
                                if (err) {
                                    //console.log(err);
                                    //callback(err,null);
                                    return;
                                }
                                plano.diaSemanaId = 5;
                                Planoexecucao.create(plano, (err,res) => {
                                    if (err) {
                                        //console.log(err);
                                        //callback(err,null);
                                        return;
                                    }
                                    plano.diaSemanaId = 6;
                                    Planoexecucao.create(plano, (err,res) => {
                                        if (err) {
                                            //console.log(err);
                                            //callback(err,null);
                                            return;
                                        }
                                        plano.diaSemanaId = 7;
                                        Planoexecucao.create(plano);
                                    })
                                })
                            })   
                        })
                    })
                });

            })
        });
        callback(null);
    };
};
