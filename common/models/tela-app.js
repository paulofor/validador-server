'use strict';

module.exports = function (Telaapp) {



    /**
     * Retorna as telas de um projeto, pode ser pelo idProjeto ( conceito ativo ) ou pelo idConceito
     * @param {number} idProjeto
     * @param {number} idConceito
     * @param {Function(Error, array)} callback
     */

    Telaapp.ListaTelaAppProjeto = function (idProjeto, idConceito, callback) {
        var listaTelaApp;
        // TODO
        callback(null, listaTelaApp);
    };


    /**
 * Obtem todas as telas com elementos internos necessarios para o gerador de codigo
 * @param {number} idAplicacao 
 * @param {Function(Error, array)} callback
 */

    Telaapp.ObtemPorIdAplicacaoParaGerador = function (idAplicacao, callback) {
        var listaTela;
        // TODO
        callback(null, listaTela);
    };


};
