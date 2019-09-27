'use strict';

module.exports = function(Valorversao) {

 /**
 * Atualizacao do relacionamento de um versao app
 * @param {number} idVersaoApp 
 * @param {array} listaRelacionamento 
 * @param {Function(Error, object)} callback
 */

Valorversao.AtualizaPorVersaoApp = function(idVersaoApp, listaRelacionamento, callback) {

    var sqlDelete = "delete from ValorVersao where versaoAppId = " + idVersaoApp;
    var ds = Valorversao.dataSource;
    ds.connector.query(sqlDelete, (err1, result1) => {
        //console.log('Retorno 1: ' , result , " - Erro: " , )
        if (err1) {
            callback(err1, null);
            return;
        }
        listaRelacionamento.forEach((itemValor) => {
            if (itemValor.valorVersaos.length > 0) {
                let rel = itemValor.valorVersaos[0];
                //delete itemValor.processoNegocioEtapaProjetos.id;
                Valorversao.create(rel);
            }
        });
        callback(null, { 'result': 'ok' });
    });
  };
  
};
