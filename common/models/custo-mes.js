'use strict';

module.exports = function (Customes) {


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
        var sqlAno = "update CustoMes " +
            " set valorCampanha = " + 
            " ( " +
            " select sum(orcamentoTotalExecutado) " + 
            " from CampanhaAds " + 
            " where CampanhaAds.projetoMySqlId = CustoMes.projetoMySqlId " +
            " year(dataFinal) = " + ano +
            " ) " +
            " where ano = " + ano;
        ds.connector.query(sqlAno,(err,result) => {
            
        });
        var sqlMes = "update CustoMes " +
                " set valorCampanha = " + 
                " ( " +
                " select sum(orcamentoTotalExecutado) " + 
                " from CampanhaAds " + 
                " where CampanhaAds.projetoMySqlId = CustoMes.projetoMySqlId " +
                " and month(dataFinal) = " + mes + " and year(dataFinal) = " + ano +
                " ) " +
                " where mes = " + mes + " and ano = " + ano;
        ds.connector.query(sqlMes,callback);
    };



};
