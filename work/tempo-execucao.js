'use strict';

module.exports = function (Tempoexecucao) {


    /**
    * Insere novo com os cálculos necessários
    * @param {object} execucao
    * @param {Function(Error)} callback
    */
    Tempoexecucao.Insere = function (execucao, callback) {
        //console.log('Execucao:' , JSON.stringify(execucao));
        Tempoexecucao.create(execucao, callback);

    };


    /**
    * Alteracao com calculos
    * @param {object} execucao
    * @param {Function(Error)} callback
    */
    Tempoexecucao.Altera = function (execucao, callback) {
        //console.log('Execucao:' , JSON.stringify(execucao));
        var ds = Tempoexecucao.dataSource;
        Tempoexecucao.upsert(execucao, (result, err) => {
            if (execucao.recursoProdutoId) {
                var sql1 = "update RecursoProduto set tempoConsumido = " +
                    " (select  SEC_TO_TIME( SUM( TIME_TO_SEC( tempo ) ) ) from TempoExecucao " +
                    " where recursoProdutoId = " + execucao.recursoProdutoId + " ) " +
                    " where id = " + execucao.recursoProdutoId;
                ds.connector.query(sql1, (err,result) => {
                    
                });
            }
            if (execucao.versaoRecursoId) {
                var sql2 = "update VersaoRecurso set tempoConsumido = " +
                    " (select  SEC_TO_TIME( SUM( TIME_TO_SEC( tempo ) ) ) from TempoExecucao " +
                    " where versaoRecursoId = " + execucao.versaoRecursoId + " ) " +
                    " where id = " + execucao.versaoRecursoId;
                ds.connector.query(sql2, (err,result) => {
                    
                });
            }
            var sql = "update PlanoExecucao set TempoExecucao = " +
                " (select  SEC_TO_TIME( SUM( TIME_TO_SEC( tempo ) ) ) from TempoExecucao " +
                " where planoExecucaoId = " + execucao.planoExecucaoId + " ) " +
                " where id = " + execucao.planoExecucaoId;
            
            ds.connector.query(sql, callback)
        });
    };
};
