'use strict';

var app = require('../../server/server');
const crypto = require('crypto');

module.exports = function (Telaapp) {

    /**
    * 
    * @param {number} idVersaoApp 
    * @param {Function(Error, array)} callback
    */
    Telaapp.DisponivelParaVersaoApp = function(idVersaoApp, callback) {
        let ds = Telaapp.dataSource;
        let sql = "select distinct TelaApp.* from TelaApp " +
            " inner join aplicacao on aplicacao.id_aplicacao = TelaApp.aplicacaoId " +
            " inner join VersaoApp on VersaoApp.projetoMySqlId = aplicacao.projetoMySqlId " +
            " where VersaoApp.id = " + idVersaoApp +
            " and TelaApp.id not in (select telaAppId from VersaoTelaApp where versaoAppId = " + idVersaoApp + ")";
        ds.connector.query(sql, callback);
    };

    Telaapp.observe('before save', function atualizaChave(ctx, next) {
        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        var chave = crypto.createHash('sha1').update(current_date + random).digest('hex');
        //console.log('ctx.instance:' , JSON.stringify(ctx.instance));
        if (ctx.instance) {
            //console.log('ctx.instance.chave:' , JSON.stringify(ctx.instance.chave));
            if (!ctx.instance.chave) {
                //console.log('Entrou 1');
                ctx.instance.chave = chave;
            }
        } else {
            //console.log('ctx.data.chave:' , JSON.stringify(ctx.data.chave));
            if (!ctx.data.chave) {
                //console.log('Entrou 2');
                ctx.data.chave = chave;
            }
        }
        next();
    })


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
    * as telas app listadas para essa entidade
    * @param {number} idEntidade
    * @param {Function(Error, array)} callback
    */
    Telaapp.TelasAppPorIdEntidadeParaGerador = function (idEntidade, callback) {
        var ds = Telaapp.dataSource;
        var sql = "select TelaApp.* from TelaApp " +
            " where entidadeId = " + idEntidade +
            " and aplicacaoId <> 0 and ativo = 1";
        ds.connector.query(sql, callback);
    };

    /**
  * as telas app listadas para essa entidade
  * @param {number} idEntidade
  * @param {Function(Error, array)} callback
  */
    Telaapp.TelasAppPorIdEntidadePutParaGerador = function (idEntidade, callback) {
        var ds = Telaapp.dataSource;
        var sql = "select TelaApp.* from TelaApp " +
            " where entidadePutId = " + idEntidade +
            " and aplicacaoId <> 0 and ativo = 1";
        ds.connector.query(sql, callback);
    };

    /**
    * Obtem todas as telas com elementos internos necessarios para o gerador de codigo
    * @param {number} idAplicacao 
    * @param {Function(Error, array)} callback
    */
    Telaapp.TelasAppPorIdAplicacaoParaGerador = function (idAplicacao, callback) {
        // ISSO FOI MUITO BOM ! MUDOU ESTRUTURA MUDEI AQUI E CLIENTE FICOU IGUAL (13-03-2019)
        //var ds = Telaapp.dataSource;
        //var sql = "select TelaApp.* from TelaApp " +
        //    " inner join ConceitoProduto on ConceitoProduto.id = TelaApp.conceitoProdutoId " +
        //    " inner join aplicacao on aplicacao.projetoMySqlId = ConceitoProduto.projetoMySqlId " +
        //    " where ConceitoProduto.ativo = 1 " +
        //    " and aplicacao.id_aplicacao = " + idAplicacao;
        //var sql = "select TelaApp.* from TelaApp " +
        //    " where aplicacaoId = " + idAplicacao;
        //ds.connector.query(sql, callback);
        Telaapp.find({ 'where': {'and' :[{'ativo' : 1},{ 'aplicacaoId': idAplicacao }]}, 'include': 'telaEdicao' }, callback);
    };

    function obtemEntidade(item) {
        app.models.entidade.findById(item.entidadeId, (err, result) => {
            //console.log('Entidade:', result);
            if (!err) {
                return result;
            } else {
                return null;
            }
        })
    }

};
