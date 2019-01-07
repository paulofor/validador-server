'use strict';

var app = require('../../server/server');

module.exports = function (Campanhaads) {


   


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
        var sql = "SELECT CampanhaAds.* FROM CampanhaAds " +
            " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
            " inner join ConceitoProduto on PaginaValidacaoWeb.conceitoProdutoId = ConceitoProduto.id " +
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
        var sql = " SELECT CampanhaAds.* FROM CampanhaAds " +
            " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
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
        Campanhaads.find({
            "where": { and: [{ "dataResultado": null }, { "dataInicial": { "gt": new Date() } }] },
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
                // tratando lista de anuncio
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
                // tratando lista de palavra-chave
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


};
