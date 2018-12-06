'use strict';

var app = require('../../server/server');

module.exports = function (Projetomysql) {

    /**
     * Pesquisa retornando apenas strings
     * @param {string} trecho 
     * @param {Function(Error, array)} callback
     */

    Projetomysql.PesquisaPorTrechoStr = function (trecho, callback) {
        if (trecho.length <= 3) {
            callback(null, [])
        } else {
            var lista = [];
            var ds = Projetomysql.dataSource;
            var sql = "select ProjetoMySql.nome " +
                " from ProjetoMySql " +
                " where UPPER(nome) like '%" + trecho.toUpperCase() + "%' ";
            ds.connector.query(sql, (err, result) => {
                result.map((item) => {
                    lista.push(item.nome)
                })
                callback(err, lista);
            });
        }
    };

    /**
     * Pesquisa por trecho no nome do projeto
     * @param {string} trecho 
     * @param {Function(Error, array)} callback
     */

    Projetomysql.PesquisaPorTrecho = function (trecho, callback) {
        if (trecho.length <= 3) {
            callback(null, []);
        } else {
            var ds = Projetomysql.dataSource;
            var sql = "select ProjetoMySql.* " +
                " from ProjetoMySql " +
                " where UPPER(nome) like '%" + trecho.toUpperCase() + "%' ";
            ds.connector.query(sql, callback);
        }
    };



    /**
     * 
     * @param {string} trecho 
     * @param {Function(Error, array)} callback
     */

    Projetomysql.PesquisaPorTrechoComPalavra = function (trecho, callback) {
        var listaProjeto;
        // TODO
        callback(null, listaProjeto);
    };




    /**
     * Retorna todos os projetos que ainda estão na fase de serem associados com palavras chaves ainda em momento inicial usando codigo de etapa = IDEA
     * @param {Function(Error, array)} callback
     */

    Projetomysql.ListaIdeiaBaseComPalavras = function (callback) {
        //let filtro = { "include" : {"relation" : "etapaProjeto" , 
        //                        "scope" : { "where" : { "codigo" : "IDEA" }}}};
        //Projetomysql.find(this.filtro, callback);

        // Usar o Json é perigoso pq o raciocionio é diferente e arriscado.
        var ds = Projetomysql.dataSource;
        var sql = "select ProjetoMySql.* " +
            " from ProjetoMySql " +
            " inner join EtapaProjeto on EtapaProjeto.id = ProjetoMySql.etapaProjetoId " +
            " where EtapaProjeto.codigo = 'IDEA' ";
        ds.connector.query(sql, (err, lista) => {
            lista.map(projeto => {
                console.log('Projeto:', projeto.nome);
                
            });
            callback(null, lista);
        });

    };

    /**
     * Retorna uma lista com palavras-chaves do projeto
     * @param {number} idProjeto 
     * @param {Function(Error, string)} callback
     */

    Projetomysql.ListaPalavraChavePorId = function (idProjeto, callback) {
        let filtro = {
            "where": { "projetoMySqlId": idProjeto }, "include": "palavraChaveGoogle"
        };
        app.models.PalavraGoogleProjeto.find(filtro, callback)
    };


    /**
        * Itens de modelos canvas que vao ajudar a construir as entidades do sistema gerador
        * @param {number} idProjeto
        * @param {Function(Error, array, array, array)} callback
         */

    Projetomysql.ItensAjudaEntidade = function (idProjeto, callback) {
        var listaMvpCanvas = [], listaGanhoDorCanvas = [], listaProjetoCanvas = [];

        Projetomysql.findById(idProjeto, { "include": { "relation": "mvpCanvasMySqls", "scope": { "where": { "or": [{ "tipo": "JORNADA" }] } } } }, function (err, modelInstance) {
            console.log(modelInstance);
            console.log(err);
            if (!err) {
                listaMvpCanvas = modelInstance.toJSON().mvpCanvasMySqls;
                Projetomysql.findById(idProjeto, { "include": { "relation": "ganhoDorCanvasMySqls", "scope": { "where": { "tipo": "PRODUTO_SERVICO" } } } }, (err, result) => {
                    if (!err) {
                        listaGanhoDorCanvas = result.toJSON().ganhoDorCanvasMySqls;
                        Projetomysql.findById(idProjeto, { "include": { "relation": "projetoCanvasMySqls", "scope": { "where": { "tipo": "VALOR" } } } }, (err, result) => {
                            if (!err) {
                                listaProjetoCanvas = result.toJSON().projetoCanvasMySqls;
                                callback(null, listaMvpCanvas, listaGanhoDorCanvas, listaProjetoCanvas);
                            } else {
                                callback(null, listaMvpCanvas, listaGanhoDorCanvas, listaProjetoCanvas);
                            }
                        })
                    } else {
                        callback(null, listaMvpCanvas, listaGanhoDorCanvas, listaProjetoCanvas);
                    }
                })
            } else {
                callback(null, listaMvpCanvas, listaGanhoDorCanvas, listaProjetoCanvas);
            }

        });
    }
};


