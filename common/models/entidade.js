'use strict';

module.exports = function (Entidade) {


    /**
 *
 * @param {number} idEntidade
 * @param {Function(Error, array)} callback
 */

    Entidade.listaCompletaRelacionemnto = function (idEntidade, callback) {
        var listaRelacionamento;
        Entidade.findById(idEntidade,{"include": [{ "relation": "rel1" , "scope" : {"include" : "entidade2"}}, { "relation": "rel2" }]}, (err, result) => {
            listaRelacionamento = result;
            callback(null, listaRelacionamento);
        })
    };
};
