'use strict';

var app = require('../../server/server');

module.exports = function (Projetomysql) {


    /**
    * Recupera o projeto de uma campanha
    * @param {number} idCampanha 
    * @param {Function(Error)} callback
    */

    Projetomysql.ObtemPorIdCampanha = function(idCampanha, callback) {
        var sql = 'select ProjetoMySql.* from ProjetoMySql ' +
            ' inner join PaginaValidacaoWeb on PaginaValidacaoWeb.projetoMySqlId = ProjetoMySql.id ' +
            ' inner join CampanhaAds on CampanhaAds.paginaValidacaoWebId = PaginaValidacaoWeb.id ' +
            ' where CampanhaAds.id = ' + idCampanha;
        var ds = Projetomysql.dataSource;
       
        ds.connector.query(sql, (err,result) => {
            if (result) {
                callback(null,result[0]);
            } else {
                callback(err,result);
            }
        });
    };
  




    /**
     * Retorna projeto, conceito ativo e lista de item de validacao do idProjeto
     * @param {number} idProjeto 
     * @param {Function(Error, object, object, array)} callback
     */

    Projetomysql.ProjetoConceitoTelaItemValidacao = function (idProjeto, callback) {
        var projeto = null, conceito = null, listaTelaApp = null, listaTelaWeb;
        Projetomysql.findById(idProjeto, (err1, result1) => {
            if (err1) {
                callback(err1, projeto, conceito, listaTelaApp, listaTelaWeb);
                return;
            }
            projeto = result1;
            app.models.ConceitoProduto.AtivoPorProjeto(idProjeto, (err2, result2) => {
                conceito = result2;
                if (err2 || !conceito) {
                    callback(err2, projeto, conceito, listaTelaApp, listaTelaWeb);
                    return;
                }

                var filtro = { "where": { "conceitoProdutoId": conceito.id } , "include" : "itemValidacaoPaginas" };
                app.models.TelaApp.find(filtro, (err3, result3) => {
                    listaTelaApp = result3;
                    if (err3 || !listaTelaApp) {
                        callback(err3, projeto, conceito, listaTelaApp, listaTelaWeb);
                        return;
                    }
                    app.models.TelaWeb.find(filtro, (err4,result4) => {
                        listaTelaWeb = result4;
                        if (err4 || !listaTelaWeb) {
                            callback(err4, projeto, conceito, listaTelaApp, listaTelaWeb);
                            return;
                        }
                        callback(null, projeto, conceito, listaTelaApp, listaTelaWeb);
                    })
                   
                })

            })
        })
    };




    /**
     * Retorna projeto, conceito ativo e paginas de validacao
     * @param {number} idProjeto 
     * @param {Function(Error, object, object, array)} callback
     */
    Projetomysql.ProjetoConceitoPaginaValidacao = function (idProjeto, callback) {
        var projeto = null, conceito = null, listaPagina = null;
        Projetomysql.findById(idProjeto, (err1, result1) => {
            if (err1) {
                callback(err1, projeto, conceito, listaPagina);
                return;
            }
            projeto = result1;
            app.models.ConceitoProduto.AtivoPorProjeto(idProjeto, (err2, result2) => {
                conceito = result2;
                if (err2 || !conceito) {
                    callback(err2, projeto, conceito, listaPagina);
                    return;
                }
                var filtro = { "where": { "conceitoProdutoId": conceito.id } };
                app.models.PaginaValidacaoWeb.find(filtro, (err3, result3) => {
                    listaPagina = result3;
                    if (err3) {
                        callback(err3, projeto, conceito, listaPagina);
                        return;
                    }
                    callback(null, projeto, conceito, listaPagina);
                })

            })
        })
    };



    /**
     * Retorna o conceito ativo e mais uma lista de valor com os anuncios associados.
     * @param {number} idProjeto
     * @param {Function(Error, object, array, object)} callback
     */

    Projetomysql.ConceitoValorAnuncioPorProjeto = function (idProjeto, callback) {
        var conceito = null, listaValorAnuncio = null, projeto = null;

        Projetomysql.findById(idProjeto, (err1, result1) => {
            if (err1) {
                callback(err1, conceito, listaValorAnuncio, projeto);
                return;
            }
            projeto = result1;
            app.models.ConceitoProduto.AtivoPorProjeto(idProjeto, (err2, result2) => {
                conceito = result2;
                if (err2 || !conceito) {
                    callback(err2, conceito, listaValorAnuncio, projeto);
                    return;
                }
                var filtro = { "where": { "conceitoProdutoId": conceito.id }, "include": "anuncioAds" };
                app.models.ValorConceito.find(filtro, (err3, result3) => {
                    listaValorAnuncio = result3;
                    if (err3) {
                        callback(err3, conceito, listaValorAnuncio, projeto);
                        return;
                    }
                    callback(null, conceito, listaValorAnuncio, projeto);
                })

            })

        })
    };




    /**
     * Retorna o projeto, conceito ativo e lista de palavraschaves ( estatistica )
     * @param {number} idProjeto 
     * @param {Function(Error, object, object, array)} callback
     */

    Projetomysql.ProjetoConceitoPalavraChave = function (idProjeto, callback) {
        var projeto = null, conceito = null, listaPalavraChave = null;
        Projetomysql.findById(idProjeto, (err1, result1) => {
            if (err1) {
                callback(err1, null, null, null);
                return;
            }
            projeto = result1;
            app.models.ConceitoProduto.AtivoPorProjeto(idProjeto, (err2, result2) => {
                if (err2) {
                    callback(err2, projeto, null, null);
                    return;
                }
                conceito = result2;
                app.models.PalavraChaveEstatistica.ListaPorIdProjeto(idProjeto, (err3, result3) => {
                    if (err3) {
                        callback(err3, projeto, conceito, null);
                        return;
                    }
                    listaPalavraChave = result3;
                    callback(null, projeto, conceito, listaPalavraChave);
                })

            })

        })

    };



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


