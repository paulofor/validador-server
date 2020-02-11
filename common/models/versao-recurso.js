'use strict';

module.exports = function (Versaorecurso) {


    /*
    update VersaoRecurso
    set tempoRestantePlano = sec_to_time(time_to_sec(tempoPlanejado) - time_to_sec(tempoConsumido))

    select 
    DATE_ADD(now(), interval
    ((time_to_sec(tempoRestantePlano) / time_to_sec(tempoPlanejadoSemana)) * 7) day)
    from VersaoRecurso

    */



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
