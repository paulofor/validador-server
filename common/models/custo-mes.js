'use strict';

module.exports = function (Customes) {


    /**
     * Criar dados com projeto null, totalizacao para meses
     * @param {Function(Error, object)} callback
     */
    Customes.CriaAno = function (ano, callback) {
        for (let i = 1; i <= 12; i++) {
            let item = { 'mes': i, 'ano': ano };
            Customes.create(item);
        };
        callback(null, { 'concluido': 'ok' });
    };


    /**
    * Cria itens para um projeto no ano 12 + 1
    * @param {number} ano 
    * @param {number} idProjeto 
    * @param {Function(Error, object)} callback
    */

    Customes.CriaAnoProjeto = function (ano, idProjeto, callback) {
        for (let i = 1; i <= 12; i++) {
            console.log('i', i);
            let filtro = { "where": { "and": [{ "mes": i }, { "ano": ano }, { "projetoMySqlId": idProjeto }] } };
            Customes.find(filtro, (err, result) => {
                //console.log('result:', JSON.stringify(result));
                if (result.length == 0) {
                    let item = { 'mes': i, 'ano': ano, 'projetoMySqlId': idProjeto };
                    Customes.create(item);
                }
            })
        };
        let filtro = { "where": { "and": [{ "ano": ano }, { "projetoMySqlId": idProjeto }] } };
        Customes.find(filtro, (err, result) => {
            //console.log('result:', JSON.stringify(result));
            if (result.length == 0) {
                let item = { 'ano': ano, 'projetoMySqlId': idProjeto };
                Customes.create(item);
            }
        })
        callback(null, { 'concluido': 'ok' });
    };


    /**
    * Atualiza Custo Mes
    * @param {number} mes 
    * @param {string} ano 
    * @param {Function(Error, object)} callback
    */
    Customes.AtualizaCustoMes = function (mes, ano, callback) {
        var ds = Customes.dataSource;
        var sqlSemProjeto = "update CustoMes " +
            " set valorCampanha = " +
            " ( " +
            " select COALESCE(sum(orcamentoTotalExecutado),0)  " +
            " from CampanhaAds " +
            " where " +
            " month(dataFinal) = " + mes + " and year(dataFinal) = " + ano +
            " ) " +
            " where mes = " + mes + " and ano = " + ano + " and projetoMySqlId is null";
        ds.connector.query(sqlSemProjeto, (err, result) => {
            //console.log('err:' , err);
        });
        var sqlComProjeto = "update CustoMes " +
            " set valorCampanha = " +
            " ( " +
            " select COALESCE(sum(orcamentoTotalExecutado),0)  " +
            " from CampanhaAds " +
            " where CampanhaAds.projetoMySqlId = CustoMes.projetoMySqlId " +
            " and month(dataFinal) = " + mes + " and year(dataFinal) = " + ano +
            " ) " +
            " where mes = " + mes + " and ano = " + ano + " and projetoMySqlId is not null";
        ds.connector.query(sqlComProjeto, callback);
    };



};
