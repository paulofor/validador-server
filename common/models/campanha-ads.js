'use strict';

var app = require('../../server/server');
var stats = require("stats-lite");

module.exports = function (Campanhaads) {



    /**
     * 
     * @param {object} campanha 
     * @param {Function(Error, object)} callback
     */

    Campanhaads.AtualizaResultado = function (campanha, callback) {
        Campanhaads.upsert(campanha,(err,result) => {
            callback(err,result);
        });
    };


    /**
    *
    * @param {Function(Error)} callback
    */
    Campanhaads.TesteEstatistica = function (callback) {
        // TODO
        console.log('Ola Mundo');
        var rolls = [];

        var listaObj = [{ 'valor': 1 }, { 'valor': 2 }, { 'valor': 3 }];
        listaObj.forEach(obj => {
            rolls.push(obj.valor);
        })
        console.log("soma: %s", stats.stdev(rolls))
        console.log("desvio: %s", stats.mean(rolls));
        var result = { 'media': 0, 'soma': 0 };
        console.log('Antes:' + JSON.stringify(result));
        result.media = stats.mean(rolls);
        result.soma = stats.sum(rolls);
        console.log('Depois:' + JSON.stringify(result));

        callback(null);
    };


    function extraiEstatisticas(lista, retorno) {
        var ctrs = [];
        var conversoes = [];
        var impressoes = [];
        lista.forEach(item => {
            ctrs.push(item.ctr);
            conversoes.push(item.conversao);
            impressoes.push(item.quantidadeImpressao);
        });

        retorno.mediaCtr = stats.mean(ctrs);
        retorno.mediaImpressao = stats.mean(impressoes);
        retorno.mediaConversao = stats.mean(conversoes);

        retorno.desvioCtr = stats.stdev(ctrs);
        retorno.desvioImpressao = stats.stdev(impressoes);
        retorno.desvioConversao = stats.stdev(conversoes);

        retorno.ocorrencias = ctrs.length;

        console.log('Lista: ', JSON.stringify(lista));
        console.log('Resultado: ', JSON.stringify(retorno));

        var x = Math.max(ctrs);

        return retorno;
    }


    function carregaCampanhaComProjeto(idCampanha, retorno) {

    }

    /**
     * Calcula estatisticas dos itens relacionados
     * @param {number} idCampanha
     * @param {Function(Error, object)} callback
     */

    Campanhaads.CalculaResultados = function (idCampanha, callback) {
        Campanhaads.PermiteEditar(idCampanha,0,(err,result) => {
            
        })
        app.models.ProjetoMySql.ObtemPorIdCampanha(idCampanha, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            var projeto = result;
            //console.log('Projeto: ' , projeto);
            //console.log('Id: ' , projeto.id);
            app.models.ProjetoMySql.CalculaSomatorio(projeto.id, (err,result) => {

            });
            app.models.CampanhaPalavraChaveResultado.find({ 'where': { 'campanhaAdsId': idCampanha } }, (err, listaPalavraCampanha) => {
                if (err) {
                    callback(err, null);
                    return;
                }
                if (listaPalavraCampanha) {
                    listaPalavraCampanha.forEach((palavraResultado) => {
                        app.models.CampanhaPalavraChaveResultado.ListaComResultadoPorPalavraIdProjeto(palavraResultado.palavraChaveGoogleId, projeto.id
                            , (err, listaResultadoPalavra) => {
                                if (err) {
                                    callback(err, null);
                                    return;
                                }
                                if (listaResultadoPalavra) {
                                    // Calcular Aqui


                                    app.models.PalavraGoogleProjeto.findOne({
                                        'where': {
                                            'and':
                                                [
                                                    { 'palavraChaveGoogleId': palavraResultado.palavraChaveGoogleId },
                                                    { 'projetoMySqlId': projeto.id }
                                                ]
                                        }
                                    }, (err, relacionamentoPalavra) => {
                                        if (err) {
                                            callback(err, null);
                                            return;
                                        }
                                        if (relacionamentoPalavra) {
                                            //console.log('Antes: ' , relacionamentoPalavra);
                                            relacionamentoPalavra = extraiEstatisticas(listaResultadoPalavra, relacionamentoPalavra);
                                            //console.log('Relcionamento Palavra: ', JSON.stringify(relacionamentoPalavra));
                                            app.models.PalavraGoogleProjeto.upsert(relacionamentoPalavra);
                                        }
                                    })
                                }
                            })
                    });
                }
            });
        });

        app.models.CampanhaAnuncioResultado.find({ 'where': { 'campanhaAdsId': idCampanha } }, (err, listaRelacionamentoAnuncio) => {
            if (err) {
                callback(err, null);
                return;
            }
            if (listaRelacionamentoAnuncio) {
                listaRelacionamentoAnuncio.forEach((item) => {
                    app.models.CampanhaAnuncioResultado.ListaComResultadoPorIdAnuncio(item.anuncioAdsId, (err, listaResultadoAnuncio) => {
                        if (err) {
                            callback(err, null);
                            return;
                        };
                        app.models.AnuncioAds.findById(item.anuncioAdsId, (err, anuncio) => {
                            if (err) {
                                callback(err, null);
                                return;
                            }
                            if (anuncio) {
                                anuncio = extraiEstatisticas(listaResultadoAnuncio, anuncio);
                                //console.log('Anuncio: ', JSON.stringify(anuncio));
                                app.models.AnuncioAds.upsert(anuncio);
                            }
                        })
                    })
                })
            }
        })
        callback(null, 'ok');
    };

    /**
     * Cria uma data de fechamento e altera as permisoes de edicao
     * @param {number} idCampanha
     * @param {Function(Error)} callback
     */

    Campanhaads.FechaCampanha = function (idCampanha, callback) {
        var sql1 = "update CampanhaAds set dataFechamento = now() " +
            " where id = " + idCampanha;
        var ds = Campanhaads.dataSource;
        ds.connector.query(sql1, (err1, result1) => {
            if (err1) {
                callback(err1, null);
                return;
            }
            Campanhaads.PermiteEditar(idCampanha, 0, callback);
        });
    };

    /**
     * Altera todos os permite editar relacionados
     * @param {number} idCampanha 
     * @param {number} permite 
     * @param {Function(Error, boolean)} callback
     */

    Campanhaads.PermiteEditar = function (idCampanha, permite, callback) {
        var resultado;
        // TODO
        var sql1 = 'update CampanhaAds set permiteEdicao = ' + permite +
            ' where id = ' + idCampanha;
        var sql2 = 'update AnuncioAds set permiteEdicao = ' + permite +
            ' where id in (select anuncioAdsId from CampanhaAnuncioResultado ' +
            ' where campanhaAdsId = ' + idCampanha + ' )';
        var sql3 = 'update PaginaValidacaoWeb set permiteEdicao = ' + permite +
            ' where id in (select paginaValidacaoWebId from CampanhaAds ' +
            ' where id = ' + idCampanha + ' )';
        var sql4 = 'update ItemValidacaoPagina set permiteEdicao = ' + permite +
            ' where paginaValidacaoWebId in ( select paginaValidacaoWebId from CampanhaAds ' +
            ' where id = ' + idCampanha + ' )';
        var sql5 = 'update SetupCampanha set permiteEdicao = ' + permite +
            ' where id in (select setupCampanhaId from CampanhaAds ' +
            ' where id = ' + idCampanha + ' )';
        var ds = Campanhaads.dataSource;
        ds.connector.query(sql1, (err1, result1) => {
            if (err1) {
                callback(err1, null);
                return;
            }
            ds.connector.query(sql2, (err2, result2) => {
                if (err2) {
                    callback(err2, null);
                    return;
                }
                ds.connector.query(sql3, (err3, result3) => {
                    if (err3) {
                        callback(err3, null);
                        return;
                    }
                    ds.connector.query(sql4, (err4, result4) => {
                        if (err4) {
                            callback(err4, null);
                            return;
                        }
                        ds.connector.query(sql5, (err5, result5) => {
                            callback(err5, result5);
                            return;
                        })
                    })
                })
            })
        });

    };



    /**
    * Retorna as campanhas do conceito atual de projetoId
    * @param {number} idProjeto 
    * @param {Function(Error, array)} callback
    */

    Campanhaads.ConceitoAtivoPorProjeto = function (idProjeto, callback) {

        /*
        var filtro = {
            "include": {
                "relation": "paginaValidacaoWeb",
                "scope": {
                    "where": { "projetoMySqlId": idProjeto },
                    "include": "conceitoProduto",
                    "relation": "conceitoProduto",
                    "scope": {
                        "where": { "ativo": "1" }
                    }
                }
            },
            "order": "dataInicial"
        }
        */
        var sql = " SELECT CampanhaAds.* , " +
            " SetupCampanha.maxCpcGrupoAnuncio as 'setupCampanhaMaxCpcGrupoAnuncio', " +
            " SetupCampanha.nome as 'setupCampanhaNome' " +
            " FROM CampanhaAds " +
            " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
            " inner join ConceitoProduto on PaginaValidacaoWeb.conceitoProdutoId = ConceitoProduto.id " +
            " inner join SetupCampanha on SetupCampanha.id = CampanhaAds.setupCampanhaId " +
            " where ConceitoProduto.ativo = 1 and " +
            " PaginaValidacaoWeb.projetoMySqlId = " + idProjeto +
            " order by dataInicial desc";
        var ds = Campanhaads.dataSource;
        ds.connector.query(sql, callback);
    };



    /**
    * Lista das campanhas de um projeto
    * @param {number} idProjeto 
    * @param {Function(Error, array)} callback
    */
    Campanhaads.GeralPorProjeto = function (idProjeto, callback) {
        /*
        var filtro = {
            "include": {
                "relation": "paginaValidacaoWeb",
                "scope": {
                    "where": { "projetoMySqlId": idProjeto },
                    "include": "conceitoProduto"
                }
            },
            "order": "dataInicial"
        }
        */
        var sql = " SELECT CampanhaAds.* , " +
            " SetupCampanha.maxCpcGrupoAnuncio as 'setupCampanhaMaxCpcGrupoAnuncio', " +
            " SetupCampanha.nome as 'setupCampanhaNome' " +
            " FROM CampanhaAds " +
            " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
            " inner join SetupCampanha on SetupCampanha.id = CampanhaAds.setupCampanhaId " +
            " where PaginaValidacaoWeb.projetoMySqlId = " + idProjeto +
            " order by dataInicial desc ";
        var ds = Campanhaads.dataSource;
        ds.connector.query(sql, callback);
    };



    /**
    * 
    * @param {Function(Error, array)} callback
    * Quem já fechou e não tem ainda resultado.
    */

    Campanhaads.ListaParaResultado = function (callback) {
        var listaCampanha;
        var prazo = new Date();
        //prazo.setDate(prazo + 60); // 60 dias
        prazo.setTime(prazo.getTime() - 45 * 86400000);
        console.log('Prazo:', prazo);
        Campanhaads.find({
            "where": { and: [{ "dataFinal": { "gt": prazo } }, { "dataInicial": { "lt": new Date() } }] },
            "include": [
                { "relation": "campanhaAnuncioResultados", scope: { "include": "anuncioAds" } },
                { "relation": "campanhaPalavraChaveResultados", scope: { "include": "palavraChaveAds" } }
            ]
        },
            (err, result) => {
                listaCampanha = result;
                callback(err, listaCampanha);
            })
    };


    /**
       * 
       * @param {Function(Error, array)} callback
       * Quem já fechou e não tem ainda resultado.
       */

    Campanhaads.ListaParaResultadoTeste = function (idCampanha, callback) {
        var listaCampanha;
        Campanhaads.find({
            "where": { "id": idCampanha },
            "include": [
                { "relation": "campanhaAnuncioResultados", scope: { "include": "anuncioAds" } },
                { "relation": "campanhaPalavraChaveResultados", scope: { "include": "palavraChaveAds" } }
            ]
        },
            (err, result) => {
                listaCampanha = result;
                callback(err, listaCampanha);
            })
    };


    /**
     * campanha completa pesquisando por id
     * @param {number} idCampanha 
     * @param {Function(Error, object)} callback
     */

    Campanhaads.ParaPublicarPorId = function (idCampanha, callback) {
        Campanhaads.findById(idCampanha, { "include": [{ "relation": "anuncioAds" }, { "relation": "palavraChaveAds" }] }
            , callback)
    };

    /**
    * Retornar a campanha com Id no formato usado pelo listaParaPublicar
    * @param {Function(Error, array)} callback
    */
    Campanhaads.listaParaPublicarTeste = function (idCampanha, callback) {
        var listaCampanha;
        Campanhaads.find({
            "where": { "id": idCampanha },
            "include": [
                { "relation": "campanhaAnuncioResultados", scope: { "include": "anuncioAds" } },
                { "relation": "campanhaPalavraChaveResultados", scope: { "include": "palavraChaveAds" } },
                "setupCampanha"
            ]
        },
            (err, result) => {
                listaCampanha = result;
                callback(err, listaCampanha);
            })

    };


    /**
     * Data de Publicação nula e Data de fechamento preenchida
     * @param {Function(Error, array)} callback
     */
    Campanhaads.listaParaPublicar = function (callback) {
        var listaCampanha;
        Campanhaads.find({
            "where": { and: [{ "dataPublicacao": null }, { "dataFechamento": { "neq": null } }] },
            "include": [
                { "relation": "campanhaAnuncioResultados", scope: { "include": "anuncioAds" } },
                { "relation": "campanhaPalavraChaveResultados", scope: { "include": "palavraChaveAds" } },
                "setupCampanha"
            ]
        },
            (err, result) => {
                listaCampanha = result;
                callback(err, listaCampanha);
            })

    };

    /*
    assembly.parts.add(partId,
  function(err) {
  ...
});
*/


    /**
     * Cria uma nova campanha para uma pagina
     * @param {number} idPagina
     * @param {Function(Error, object)} callback
     */

    Campanhaads.CriaNovaPorPagina = function (idPagina, callback) {
        var campanha = { "paginaValidacaoWebId": idPagina, "finalizadaProducao": false };

        app.models.PaginaValidacaoWeb.findById(idPagina, (err, pagina) => {

            var campanha = {
                "paginaValidacaoWebId": idPagina,
                "finalizadaProducao": false,
                "urlAlvo": "http://validacao.kinghost.net/oferta/?id=" + pagina.codigoHash
            };
            Campanhaads.create(campanha, (err, result) => {
                var campanhaGrava = result;
                // ndo lista de anuncio
                app.models.AnuncioAds.paraCampanhaPorIdPagina(idPagina, (err, result) => {
                    for (var item of result) {
                        campanhaGrava.anuncioAds.add(item.id, (err, result) => {

                        })
                        // Relacionamento novo
                        var campanhaAnuncio = {
                            "anuncioAdsId": item.id,
                            "campanhaAdsId": campanhaGrava.id
                        };
                        app.models.CampanhaAnuncioResultado.create(campanhaAnuncio, (err, result) => {

                        })

                    }
                })
                // ndo lista de palavra-chave
                app.models.PalavraChaveAds.ParaCampanhaPorIdPagina(idPagina, (err, result) => {
                    for (var item of result) {
                        var campanhaPalavraChave = {
                            "palavraChaveAdsId": item.id,
                            "campanhaAdsId": campanhaGrava.id
                        };
                        app.models.CampanhaPalavraChaveResultado.create(campanhaPalavraChave, (err, result) => {

                        })
                        campanhaGrava.palavraChaveAds.add(item.id, (err, result) => {
                            console.log('Erro3:', err);
                        })
                    }
                })
                callback(err, campanhaGrava);
            });

        })


    }

    /*
   Campanhaads.CriaNovaPorPagina = function (idPagina, callback) {
       //var teste = new AnuncioAds(null,null);
       console.log('Campanha: ' , JSON.stringify(Campanhaads));
       var campanha = { 'nome' : 'teste01' , 'finalizadaProducao' : true};
       Campanhaads.create(campanha, (err,result) => {
           var campanhaGrava = result;
           var anuncioSrv = app.models.AnuncioAds;
           console.log('Campanhaads.hasAndBelongsToMany=' , Campanhaads.hasAndBelongsToMany);
           for (var item in Campanhaads.hasAndBelongsToMany) {
               console.log('Propriedade:' , item);
           }
           //console.log('Anuncio Srv: ', anuncioSrv);
           anuncioSrv.ListaParaTesteCampanha((err, result) => {
               for (var item of result) {
                   console.log('Item', item);
               }
               campanhaGrava.nome = "Campanha-" + campanhaGrava.id;
               campanhaGrava.anuncioAds = result;
               Campanhaads.update(campanhaGrava, (err, result) => {
                   console.log('Erro:' , err);
                   console.log("Resultado: " , JSON.stringify(result));
                   callback(null, campanhaGrava);
               })
               
           })
       })
   };
   */
    /**
     * Cria uma nova campanha inicializando campos
     * @param {object} campanha 
     * @param {Function(Error, object)} callback
     */

    Campanhaads.CriaNova = function (campanha, callback) {
        campanha.dataCriacao = new Date();
        //console.log('campanha: ' , JSON.stringify(campanha));
        //console.log('campanha.paginaValidacaoWebId' , campanha.paginaValidacaoWebId);
        app.models.PaginaValidacaoWeb.findById(campanha.paginaValidacaoWebId, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            var paginaValidacaoWeb = result;
            campanha.urlAlvo = 'http://validacao.kinghost.net/oferta/?id=' + paginaValidacaoWeb.codigoHash;
            campanha.urlAlvoMobile = 'http://validacao.kinghost.net/oferta/?id=' + paginaValidacaoWeb.codigoHash;
            campanha.permiteEdicao = 1;
            app.models.ProjetoMySql.findById(paginaValidacaoWeb.projetoMySqlId, (err, result) => {
                if (err) {
                    callback(err, null);
                    return;
                }
                var projeto = result;
                campanha.nome = projeto.codigo + '_' + campanha.nome;
                Campanhaads.create(campanha, callback);
            })

        })

    };

};
