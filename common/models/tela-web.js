'use strict';

module.exports = function (Telaweb) {

    /**
     * Obtem todas as telas de uma aplicacao com os objetos internos necessarios no gerador de codigo
     * @param {number} idAplicacao 
     * @param {Function(Error, array)} callback
     */

    Telaweb.TelasWebPorIdAplicacaoParaGerador = function (idAplicacao, callback) {
        var filtro = { 
            "where" : {"aplicacaoId" : idAplicacao} ,
            "include" : {"relation" : "telaComponenteWebs" , "scope" : { "include" : "componenteWeb" } }
        };
        Telaweb.find(filtro, callback);
    };

};
