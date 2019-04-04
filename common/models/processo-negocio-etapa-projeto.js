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
                    Processonegocioetapaprojeto.create(etapa.processoNegocioEtapaProjetos);
                }
            });
            callback(null, { 'result': 'ok' });
        });

    };

};
