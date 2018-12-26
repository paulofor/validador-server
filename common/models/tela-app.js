'use strict';

var app = require('../../server/server');

module.exports = function (Telaapp) {



    /**
     * Obtem as telas para serem criadas no gerador de codigo por idAplicacao
     * @param {number} idAplicacao 
     * @param {Function(Error, array)} callback
     */

    Telaapp.GeradorListaPorAplicacao = function (idAplicacao, callback) {
        var listaTelaApp;
        // TODO
        callback(null, listaTelaApp);
    };



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
    Telaapp.TelasAppPorIdAplicacaoParaGerador = function (idAplicacao, callback) {
        var ds = Telaapp.dataSource;
        var sql = "select TelaApp.* from TelaApp " +
            " inner join ConceitoProduto on ConceitoProduto.id = TelaApp.conceitoProdutoId " +
            " inner join aplicacao on aplicacao.projetoMySqlId = ConceitoProduto.projetoMySqlId " +
            " where ConceitoProduto.ativo = 1 " +
            " and aplicacao.id_aplicacao = " + idAplicacao;
        ds.connector.query(sql,callback);
       
    };

    function obtemEntidade(item) {
        app.models.entidade.findById(item.entidadeId, (err,result) => {
            console.log('Entidade:' , result);
            if (!err) {
                return result;
            } else {
                return null;
            }
        })
    }

};
