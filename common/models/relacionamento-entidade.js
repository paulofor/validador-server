'use strict';

module.exports = function (Relacionamentoentidade) {

    /**
     * 
     * @param {number} idEntidade 
     * @param {Function(Error, array)} callback
     */

    Relacionamentoentidade.listaCompletaPorEntidade = function (idEntidade, callback) {
        var listaRelacionamento;
        Relacionamentoentidade.find({"where" : { "or" : [{"id_entidade1" : idEntidade},{"id_entidade2":idEntidade}]} , "include" : ["entidade2" , "entidade1"] }, (err, result) => {
            listaRelacionamento = result;
            callback(null, listaRelacionamento);
        })
    };



};
