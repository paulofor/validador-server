'use strict';

var app = require('../../server/server');

module.exports = function (Palavragoogleprojeto) {



    /**
     * Cria uma palavra-chave para um projeto que ainda não existe
     * @param {object} palavraProjeto
     * @param {Function(Error, object)} callback
     */

    Palavragoogleprojeto.CriaPalavra = function (palavraProjeto, callback) {
        app.models.PalavraChaveGoogle.findById(palavraProjeto.palavraChaveGoogleId, (err,result) => {
            if (err) {
                app.models.PalavraChaveGoogle.create(palavraProjeto.palavraChaveGoogleId, (err,result) => {
                    Palavragoogleprojeto.create(palavraProjeto, callback);
                })
            }
        })
    };


    /**
     * Obtem as palavras-chaves de projeto com ligação na campanha caso exista
     * @param {number} idProjeto
     * @param {number} idCampanha
     * @param {Function(Error, array)} callback
     */

    Palavragoogleprojeto.ObtemPorCampanha = function (idCampanha, callback) {
        app.models.ProjetoMySql.ObtemPorIdCampanha(idCampanha, (err, result) => {
            if (result) {
                var filtro = { "where": { "projetoMySqlId": result.id }, "include": { "relation": "palavraChaveGoogle", "scope": { "include": { "relation": "campanhaPalavraChaveResultados", "scope": { "where": { "campanhaAdsId": idCampanha } } } } } };
                Palavragoogleprojeto.find(filtro, callback);
            }
        })
    };




    /**
     * Cria novo relacionamento
     * @param {object} relacionamento 
     * @param {Function(Error, object)} callback
     */

    Palavragoogleprojeto.CriaRelacionamento = function (relacionamento, callback) {
        Palavragoogleprojeto.findOne({
            "where": {
                "and": [
                    { "palavraChaveGoogleId": relacionamento.palavraChaveGoogleId },
                    { "projetoMySqlId": relacionamento.projetoMySqlId }
                ]
            }
        }, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            if (!result) {
                relacionamento.ativo = 1;
                Palavragoogleprojeto.create(relacionamento, callback);
            } else {
                result.ativo = 1;
                Palavragoogleprojeto.upsert(result, callback);
            }
        })
    };



    // Acho que isso não esta sendo usado (22-02-2019)
    /**
     * se receber um projeto com id 0 cria o projeto e o relacionamento senão cria somente o relacionamento
     * @param {object} relacionamentoComProjeto 
     * @param {Function(Error)} callback
     */
    Palavragoogleprojeto.InsereProjetoRelacionamento = function (relacionamentoComProjeto, projeto, callback) {

        var filtro = { "where": { "palavraChaveGoogleId": "palavra" } };

        console.log('Relacionamento:', relacionamentoComProjeto);
        console.log('Projeto:', projeto);


        if (projeto.id == 0) {
            app.models.ProjetoMySql.create(projeto, (err, result) => {
                relacionamentoComProjeto.projetoMySqlId = result.id;
                relacionamentoComProjeto.ativo = 1;
                Palavragoogleprojeto.create(relacionamentoComProjeto, callback);
            })
        } else {
            relacionamentoComProjeto.projetoMySqlId = projeto.id;
            Palavragoogleprojeto.findOne({
                "where": {
                    "and": [
                        { "palavraChaveGoogleId": relacionamentoComProjeto.palavraChaveGoogleId },
                        { "projetoMySqlId": projeto.id }
                    ]
                }
            }, (err, result) => {
                if (!result) {
                    relacionamentoComProjeto.ativo = 1;
                    Palavragoogleprojeto.create(relacionamentoComProjeto, callback);
                } else {
                    result.ativo = 1;
                    Palavragoogleprojeto.upsert(result, callback);
                }
            })
        }
    };


    /**
     * Remove uma relacao entre projeto e palavra
     * @param {number} idProjeto 
     * @param {string} idPalavra 
     * @param {Function(Error)} callback
     */

    Palavragoogleprojeto.RemoveRelacaoPalavra = function (idProjeto, idPalavra, callback) {
        var ds = Palavragoogleprojeto.dataSource;
        var sql = "update PalavraGoogleProjeto set ativo = 0 " +
            " where palavraChaveGoogleId = '" + idPalavra + "' and " +
            " projetoMySqlId = " + idProjeto;
        ds.connector.query(sql, callback);
    };

};
