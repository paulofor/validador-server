'use strict';

module.exports = function (Palavrachaveraiz) {

    /**
     * Lista para ir no Ads Google pesquisar
     * @param {Function(Error, array)} callback
     */

    Palavrachaveraiz.ListaParaConsulta = function (callback) {
        var listaPalavra = [ ];

        callback(null, listaPalavra);
    };


    Palavrachaveraiz.ListaParaConsultaTeste = function (callback) {
        var listaPalavra = [ {'palavra' : 'vendas'} ];

        callback(null, listaPalavra);
    };

};
