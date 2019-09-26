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
        listaRelacionamento.forEach((etapa) => {
            if (etapa.processoNegocioEtapaProjetos != null) {
                delete etapa.processoNegocioEtapaProjetos.id;
                Processonegocioetapaprojeto.create(etapa.processoNegocioEtapaProjetos);
            }
        });
        callback(null, { 'result': 'ok' });
    });
  };
  
};
