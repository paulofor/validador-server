'use strict';

module.exports = function (Processonegocioetapaprojeto) {
    /**
     * 
     * @param {number} idProcesso 
     * @param {array} listaEtapa 
     * @param {Function(Error, object)} callback
     */

    Processonegocioetapaprojeto.AtualizaPorProcesso = function (idProcesso, listaEtapa, callback) {
        var sqlDelete = "delete from ProcessoNegocioEtapaProjeto where processoNegocioId = " + idProcesso;
        var ds = Processonegocioetapaprojeto.dataSource;
        ds.connector.query(sqlDelete, (err1, result1) => {
            //console.log('Retorno 1: ' , result , " - Erro: " , )
            if (err1) {
                callback(err1, null);
                return;
            }
            listaEtapa.forEach((etapa) => {
                if (etapa.processoNegocioEtapaProjetos != null) {
                    delete etapa.processoNegocioEtapaProjetos.id;
                    Processonegocioetapaprojeto.create(etapa.processoNegocioEtapaProjetos);
                }
            });
            callback(null, { 'result': 'ok' });
        });

    };


    /**
    *
    * @param {number} idEtapa
    * @param {array} listaProcesso
    * @param {Function(Error, object)} callback
    */

    Processonegocioetapaprojeto.AtualizaPorEtapa = function (idEtapa, listaProcesso, callback) {
        //console.log('Lista Processo: ' , JSON.stringify(listaProcesso));
        var sqlDelete = "delete from ProcessoNegocioEtapaProjeto where etapaProjetoId = " + idEtapa;
        var ds = Processonegocioetapaprojeto.dataSource;
        ds.connector.query(sqlDelete, (err1, result1) => {
            if (err1) {
                callback(err1, null);
                return;
            }
            listaProcesso.forEach((processo) => {
                //console.log('Processo: ' , JSON.stringify(processo));
                if (processo.processoNegocioEtapaProjetos != null) {
                    delete processo.processoNegocioEtapaProjetos.id;
                    //console.log('Vai criar ' , JSON.stringify(processo.processoNegocioEtapaProjetos));
                    Processonegocioetapaprojeto.create(processo.processoNegocioEtapaProjetos, (err,result) => {
                        //console.log('Err: ' , err);
                        //console.log('Result: ' , JSON.stringify(result));
                    });
                }
            });
            callback(null, { 'result': 'ok' });
        });
    };


};
