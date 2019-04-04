'use strict';

module.exports = function (Processonegocioetapaprojeto) {
    /**
     * 
     * @param {number} idProcesso 
     * @param {array} listaEtapa 
     * @param {Function(Error, object)} callback
     */

    Processonegocioetapaprojeto.AtualizaPorProcesso = function (idProcesso, listaEtapa, callback) {
        //listaEtapa.forEach((etapa) => {
        //    if (etapa.processoNegocioEtapa)
        //})
        callback(null,{ 'result' : 'ok' });
    };

};
