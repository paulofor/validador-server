'use strict';

var app = require('../../server/server');

module.exports = function (Projetomysql) {




    /**
     * Obtem dados do projeto e com lista de palavras-chaves
     * @param {number} idProjeto 
     * @param {Function(Error, object)} callback
     */

    Projetomysql.obtemComPalavraChave = function (idProjeto, callback) {
        var projeto;
        // TODO
        callback(null, projeto);
    };



    /**
     * Lista das palavras-chaves de um projeto, o ponto inicial do projeto.
     * @param {number} idProjeto
     * @param {Function(Error, array)} callback
     */

    Projetomysql.ListaPalavraChave = function (idProjeto, callback) {
        var listaPalavra;
        // TODO
        callback(null, listaPalavra);
    };



    /**
     * Muda a etapa de um projeto
     * @param {number} idProjeto 
     * @param {string} codigoEtapa 
     * @param {Function(Error)} callback
     */

    Projetomysql.MudaEtapa = function (idProjeto, codigoEtapa, callback) {
        app.models.EtapaProjeto.findOne({ "where": { "codigo": codigoEtapa } }, (err, etapa) => {
            //console.log("Etapa: ", JSON.stringify(etapa));
            var ds = Projetomysql.dataSource;
            var sql1 = "update ProjetoMySql set etapaProjetoId = " + etapa.id +
                " where id = " + idProjeto;
            ds.connector.query(sql1, (err, result) => {
                //console.log('Result:' , JSON.stringify(result));
                //console.log('Erro:' , err);
                var mudanca = { "projetoMySqlId": idProjeto, "etapaProjetoId": etapa.id, "dataInicio": new Date() };
                //console.log('MudancaEtapa: ' , JSON.stringify(mudanca));
                app.models.MudancaEtapa.create(mudanca, callback);
            })

        })
    };




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
     * Lista de projetos que atualmente estao em um tipo de etapa
     * @param {string} codigoEtapa
     * @param {Function(Error, array)} callback
     */

    Projetomysql.ListaPorCodigoEtapa = function (codigoEtapa, callback) {
        var ds = Projetomysql.dataSource;
        var sql = "select ProjetoMySql.* " +
            " from ProjetoMySql " +
            " inner join EtapaProjeto on EtapaProjeto.id = ProjetoMySql.etapaProjetoId " +
            " where EtapaProjeto.codigo = '" + codigoEtapa + "' ";
        ds.connector.query(sql, callback);
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
            " where EtapaProjeto.codigo = 'IDEAB' ";
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
     * Criacao de um projeto, envolve outros elementos a serem criados. Atualmente -> MudancaEtapa e Aplicacao.
     * @param {object} projeto 
     * @param {Function(Error)} callback
     */

    Projetomysql.CriaProjeto = function (projeto, callback) {
        Projetomysql.create(projeto, callback);
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


