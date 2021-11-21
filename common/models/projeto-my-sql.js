'use strict';

var app = require('../../server/server');

module.exports = function (Projetomysql) {


    /*
     select ProjetoMySql.*, 
     (select max(dataInicial) from CampanhaAds where projetoMySqlId = 32) as ultima, 
     (select min(dataInicial) from CampanhaAds where projetoMySqlId = 32) as primeira, 
     (select count(*) from CampanhaAds where projetoMySqlId = 32) as quantidade 
     from ProjetoMySql 
     where ProjetoMySql.id = 32
    */




    /**
    * 
    * @param {number} idProjeto 
    * @param {Function(Error, object)} callback
    */
    Projetomysql.ConsolidadoCampanha = function(idProjeto, callback) {
        let filtro = { 
                    'where' : {'id' : idProjeto} ,
                    'include' : [{
                        'relation' : 'versaoApps' ,
                        'scope' : { 
                            'include' :  {'relation' : 'valorEtapaFunilVersaoApps'}
                        }
                    }, {
                        'relation' : 'campanhaAds' ,
                        'scope' : {
                            'include' : [{'relation' : 'versaoApp'}, {'relation' : 'setupCampanha'} ],
                            'order' : 'dataInicial desc'
                        },
                        
                    }]
                };
        Projetomysql.findOne(filtro,callback);
        /*
        let sql = "select ProjetoMySql.*, " +
            " (select max(dataInicial) from CampanhaAds where projetoMySqlId = " + idProjeto + ") as ultima, " +
            " (select min(dataInicial) from CampanhaAds where projetoMySqlId = " + idProjeto + ") as primeira, " +
            " (select count(*) from CampanhaAds where projetoMySqlId = " + idProjeto + ") as quantidade " +
            " from ProjetoMySql " +
            " where ProjetoMySql.id = " + idProjeto;
        let ds = Projetomysql.dataSource;
        ds.connector.query(sql, (err,result) => {
            if (!err) {
                let item = result[0];
                let sqlVersao = "select VersaoApp.* " +
                            " from VersaoApp " +
                            " where VersaoApp.projetoMySqlId = " + idProjeto;
                ds.connector.query(sqlVersao, (err2,result2) => {
                    if (!err2) {
                        
                    }
                })

            } else {
                callback(err,null);
            }
        });
        */
    }; 


    /**
     *
     * @param {number} idProjeto
     * @param {Function(Error, object)} callback
     */
    Projetomysql.ObtemMetricaCampanha = function (idProjeto, callback) {
        let filtro = {
            "include": {
                "relation": "campanhaAds",
                "scope": {
                    "order": "dataInicial desc",
                    "include": {
                        "relation": "valorEtapaFunilCampanhas",
                        "scope": { "include": "etapaCliente" }
                    }
                }
            }
        };
        Projetomysql.findById(idProjeto, filtro , callback);
    };



    /**
     * Atualiza totais por campanhas
     * @param {Function(Error, object)} callback
     */

    Projetomysql.AtualizaTotais = function (callback) {
        var ds = Projetomysql.dataSource;
        var sql1 = " update CampanhaAds " +
            " set projetoMySqlId = (select projetoMySqlId from AnuncioAplicativo where AnuncioAplicativo.id = CampanhaAds.anuncioAplicativoId) " +
            " where projetoMySqlId is null";
        ds.connector.query(sql1, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result1' , result);
        });

        var sql2 = "update ProjetoMySql set ProjetoMySql.custoCampanha = " +
            " ( " +
            " select sum(CampanhaAds.orcamentoTotalExecutado)  from CampanhaAds " +
            " where CampanhaAds.projetoMySqlId = ProjetoMySql.id " +
            " )";
        ds.connector.query(sql2, callback);
    };


    /**
     *
     * @param {number} idProcesso
     * @param {Function(Error, array)} callback
     */

    Projetomysql.ObtemPorIdProcesso = function (idProcesso, callback) {
        var sql = "select distinct ProjetoMySql.* from ProjetoMySql " +
            " inner join ProcessoNegocioEtapaProjeto on ProcessoNegocioEtapaProjeto.etapaProjetoId = ProjetoMySql.etapaProjetoId " +
            " where ProcessoNegocioEtapaProjeto.processoNegocioId = " + idProcesso;
        var ds = Projetomysql.dataSource;
        ds.connector.query(sql, callback);
        
    };


    /**
     * Alteracao da etapa
     * @param {object} projeto
     * @param {Function(Error, object)} callback
     */

    Projetomysql.AlteraEtapa = function (projeto, callback) {
        var sqlUpdate = "update ProjetoMySql set etapaProjetoId = " + projeto.etapaProjetoId +
            ", codigo = '" + projeto.codigo + "' " +
            " where id = " + projeto.id;
        var ds = Projetomysql.dataSource;
        ds.connector.query(sqlUpdate, callback);
    };



    /**
     * Retorna todos os projetos com lista de aplicacoes ativas ( normalmente apenas uma )
     * @param {Function(Error, array)} callback
     */

    Projetomysql.ListaComAplicacaoAtiva = function (callback) {
        var filtro = { "include": "aplicacaos" };
        Projetomysql.find(filtro, callback);
    };

    /**
     * Calcula somatorio para todos os projetos
     * @param {Function(Error, object)} callback
     */

    Projetomysql.CalculaSomatorioTodos = function (callback) {
        var resposta;
        var sqlQuantidade = "update ProjetoMySql set ProjetoMySql.quantidadeCampanha = " +
            " ( " +
            " select count(*) from CampanhaAds " +
            //" inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
            //" where PaginaValidacaoWeb.projetoMySqlId = ProjetoMySql.id  " +
            " where CampanhaAds.projetoMySqlId = ProjetoMySql.id " +
            " and CampanhaAds.dataResultado is not null " +
            " ) ";
        var sqlCustoTotal = "update ProjetoMySql set ProjetoMySql.custoCampanha = " +
            " ( " +
            " select sum(CampanhaAds.orcamentoTotalExecutado)  from CampanhaAds " +
            //" inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
            //" where PaginaValidacaoWeb.projetoMySqlId = ProjetoMySql.id  " +
            " where CampanhaAds.projetoMySqlId = ProjetoMySql.id " +
            " and CampanhaAds.dataResultado is not null " +
            " ) ";
        var sqlQuantidadeAnuncio = "update ProjetoMySql set ProjetoMySql.quantidadeAnuncio = " +
            " ( " +
            " select count(*) from AnuncioAds " +
            " inner join ValorConceito on ValorConceito.id = AnuncioAds.valorConceitoId " +
            " inner join ConceitoProduto on ConceitoProduto.id = ValorConceito.conceitoProdutoId " +
            " where ConceitoProduto.projetoMySqlId = ProjetoMySql.id  " +
            " and ConceitoProduto.ativo = 1 " +
            " ) ";
        var sqlQuantidadePalavra = "update ProjetoMySql set ProjetoMySql.quantidadePalavraChave = " +
            " ( " +
            " select count(*) from PalavraGoogleProjeto " +
            " where PalavraGoogleProjeto.projetoMySqlId = ProjetoMySql.id  " +
            " and PalavraGoogleProjeto.ativo = 1 " +
            " ) ";
        var sqlQuantidadeAberta = "update ProjetoMySql set ProjetoMySql.quantidadeCampanhaAberta = " +
            " ( " +
            " select count(*) from CampanhaAds " +
            //" inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
            //" where PaginaValidacaoWeb.projetoMySqlId = ProjetoMySql.id  " +
            " where CampanhaAds.projetoMySqlId = ProjetoMySql.id " +
            " and CampanhaAds.dataResultado is null " +
            " ) ";
        var sqlTempoTotal = "update ProjetoMySql set ProjetoMySql.tempoTotal = " +
            " ( " +
            " select  SEC_TO_TIME( SUM( TIME_TO_SEC( tempo ) ) ) from TempoExecucao " +
            " where projetoMySqlId = ProjetoMySql.id " +
            " ) ";
        var sqlIniFimCampanha = " update ProjetoMySql " +
            " set primeiraCampanha = (select min(dataInicial) from CampanhaAds where projetoMySqlId = ProjetoMySql.id), " +
            " ultimaCampanha = (select max(dataInicial) from CampanhaAds where projetoMySqlId = ProjetoMySql.id) ";
        var sqlPeriodoCampanha = " update ProjetoMySql " +
            " set periodoCampanha = (select datediff(ultimaCampanha, primeiraCampanha) / 30) ";
        
        var ds = Projetomysql.dataSource;

        ds.connector.query(sqlQuantidade, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result1' , result);
        });
        ds.connector.query(sqlCustoTotal, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result2' , result);
        });
        ds.connector.query(sqlQuantidadeAnuncio, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result2' , result);
        });
        ds.connector.query(sqlQuantidadePalavra, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result2' , result);
        });
        ds.connector.query(sqlQuantidadeAberta, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result2' , result);
        });
        ds.connector.query(sqlTempoTotal, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result2' , result);
        });
        ds.connector.query(sqlIniFimCampanha, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            } else {
                ds.connector.query(sqlPeriodoCampanha, (err2,result2) => {
                    if (err2) {
                        callback(err2,null);
                        return;
                    }
                })
            }
            //console.log('Result2' , result);
        });
        callback(null, {});

    };


    /**
     * Calcula custo e quantidade de campanhas, gasto de tempo.
     * @param {number} idProjeto 
     * @param {Function(Error, object)} callback
     */

    Projetomysql.CalculaSomatorio = function (idProjeto, callback) {
        var resposta;
        var sqlQuantidade = "update ProjetoMySql set ProjetoMySql.quantidadeCampanha = " +
            " ( " +
            " select count(*) from CampanhaAds " +
            " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
            " where PaginaValidacaoWeb.projetoMySqlId = ProjetoMySql.id  " +
            " and CampanhaAds.dataResultado is not null " +
            " ) " +
            " where id = " + idProjeto;
        var sqlCustoTotal = "update ProjetoMySql set ProjetoMySql.custoCampanha = " +
            " ( " +
            " select sum(CampanhaAds.orcamentoTotalExecutado)  from CampanhaAds " +
            " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
            " where PaginaValidacaoWeb.projetoMySqlId = ProjetoMySql.id " +
            " and CampanhaAds.dataResultado is not null " +
            " ) " +
            " where id = " + idProjeto;

        var sqlQuantidadeAnuncio = "update ProjetoMySql set ProjetoMySql.quantidadeAnuncio = " +
            " ( " +
            " select count(*) from AnuncioAds " +
            " inner join ValorConceito on ValorConceito.id = AnuncioAds.valorConceitoId " +
            " inner join ConceitoProduto on ConceitoProduto.id = ValorConceito.conceitoProdutoId " +
            " where ConceitoProduto.projetoMySqlId = ProjetoMySql.id  " +
            " and ConceitoProduto.ativo = 1 " +
            " ) " +
            " where id = " + idProjeto;

        var sqlQuantidadePalavra = "update ProjetoMySql set ProjetoMySql.quantidadePalavraChave = " +
            " ( " +
            " select count(*) from PalavraGoogleProjeto " +
            " where PalavraGoogleProjeto.projetoMySqlId = ProjetoMySql.id  " +
            " and PalavraGoogleProjeto.ativo = 1 " +
            " ) " +
            " where id = " + idProjeto;

        var sqlQuantidadeAberta = "update ProjetoMySql set ProjetoMySql.quantidadeCampanhaAberta = " +
            " ( " +
            " select count(*) from CampanhaAds " +
            " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
            " where PaginaValidacaoWeb.projetoMySqlId = ProjetoMySql.id  " +
            " and CampanhaAds.dataResultado is null " +
            " ) " +
            " where id = " + idProjeto;

        var sqlTempo = "update ProjetoMySql set ProjetoMySql.quantidadeCampanha = " +
            " ( " +
            " select count(*) from CampanhaAds " +
            " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
            " where PaginaValidacaoWeb.projetoMySqlId = ProjetoMySql.id  " +
            " and CampanhaAds.dataResultado is not null " +
            " ) " +
            " where id = " + idProjeto;



        var ds = Projetomysql.dataSource;

        ds.connector.query(sqlQuantidade, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result1' , result);
        });
        ds.connector.query(sqlCustoTotal, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result2' , result);
        });
        ds.connector.query(sqlQuantidadeAnuncio, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result2' , result);
        });
        ds.connector.query(sqlQuantidadeAberta, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result2' , result);
        });
        ds.connector.query(sqlQuantidadePalavra, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result2' , result);
        });
        ds.connector.query(sqlTempo, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            };
            //console.log('Result2' , result);
        });
        callback(null, {});
    };


    /**
    * Recupera o projeto de uma campanha
    * @param {number} idCampanha 
    * @param {Function(Error)} callback
    */

    Projetomysql.ObtemPorIdCampanha = function (idCampanha, callback) {
        var sql = 'select distinct ProjetoMySql.* from ProjetoMySql ' +
            ' left outer join PaginaValidacaoWeb on PaginaValidacaoWeb.projetoMySqlId = ProjetoMySql.id ' +
            ' left outer join PaginaInstalacaoApp on PaginaInstalacaoApp.projetoMySqlId = ProjetoMySql.id ' +
            ' left outer join CampanhaAds c1 on c1.paginaValidacaoWebId = PaginaValidacaoWeb.id ' +
            ' left outer join CampanhaAds c2 on c2.paginaInstalacaoAppId = PaginaInstalacaoApp.id ' +
            ' where (c1.id = ' + idCampanha + ' or c2.id = ' + idCampanha + ' ) ';
        var ds = Projetomysql.dataSource;

        ds.connector.query(sql, (err, result) => {
            if (result) {
                callback(null, result[0]);
            } else {
                callback(err, result);
            }
        });
    };


    /**
     * 
     * @param {number} idProjeto 
     * @param {Function(Error, object, object, array)} callback
     */

    Projetomysql.ProjetoConceitoItemValidacao = function (idProjeto, callback) {
        var projeto = null, conceito = null, listaItemValidacao = null;
        Projetomysql.findById(idProjeto, (err1, result1) => {
            if (err1) {
                callback(err1, conceito, projeto, listaItemValidacao);
                return;
            }
            projeto = result1;
            app.models.ConceitoProduto.AtivoPorProjeto(idProjeto, (err2, result2) => {
                conceito = result2;
                if (err2 || !conceito) {
                    callback(err2, conceito, projeto, listaItemValidacao);
                    return;
                }

                var filtro = { "where": { "and": [{ "conceitoProdutoId": conceito.id }, { "projetoMySql": projeto.id }] } };
                app.models.ItemValidacaoPagina.find(filtro, (err3, result3) => {
                    listaItemValidacao = result3;
                    if (err3 || !listaItemValidacao) {
                        callback(err3, conceito, projeto, listaItemValidacao);
                        return;
                    }
                    callback(null, conceito, projeto, listaItemValidacao);
                })
            })
        })
    };



    /**
     * Retorna projeto, conceito ativo e lista de item de validacao do idProjeto
     * @param {number} idProjeto 
     * @param {Function(Error, object, object, array)} callback
     */
    // SUBSTITUIDO PELO ANTERIOR --> ProjetoConceitoItemValidacao
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

                var filtro = { "where": { "conceitoProdutoId": conceito.id }, "include": "itemValidacaoPaginas" };
                app.models.TelaApp.find(filtro, (err3, result3) => {
                    listaTelaApp = result3;
                    if (err3 || !listaTelaApp) {
                        callback(err3, projeto, conceito, listaTelaApp, listaTelaWeb);
                        return;
                    }
                    app.models.TelaWeb.find(filtro, (err4, result4) => {
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
     * @param {string} codigoProcesso
     * @param {Function(Error, array)} callback
     */

    Projetomysql.ListaPorCodigoProcesso = function (codigoProcesso, callback) {
        var ds = Projetomysql.dataSource;
        var sql = "select distinct ProjetoMySql.* " +
            " from ProjetoMySql " +
            " inner join ProcessoNegocioEtapaProjeto on ProcessoNegocioEtapaProjeto.etapaProjetoId = ProjetoMySql.etapaProjetoId " +
            " inner join ProcessoNegocio on ProcessoNegocio.id = ProcessoNegocioEtapaProjeto.processoNegocioId " +
            " where ProcessoNegocio.codigo = '" + codigoProcesso + "' ";
        ds.connector.query(sql, callback);
    };




    // Nao usar mais (10/05/2019)

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


