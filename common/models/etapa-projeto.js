'use strict';

module.exports = function (Etapaprojeto) {


    /**
 * Obtem as etapas ativas e com o processo de negocio quando associado
 * @param {number} idProcessoNegocio 
 * @param {Function(Error, array)} callback
 */

    Etapaprojeto.ObtemAtivaComProcessoPorId = function (idProcessoNegocio, callback) {
        var filtro = {
            "where" : { "ativo" : 1 },
            "order" : "nome ASC",
            "include": {
                "relation": "processoNegocioEtapaProjetos",
                "scope": {
                    "where": { "processoNegocioId": idProcessoNegocio }
                }
            }
        }
        Etapaprojeto.find(filtro, callback);
    };
};
