'use strict';

var app = require('../../server/server');

module.exports = function (Campanhaads) {


    /**
    * 
    * @param {Function(Error, array)} callback
    * Quem já fechou e não tem ainda resultado.
    */

    Campanhaads.ListaParaResultado = function (callback) {
        var listaCampanha;
        Campanhaads.find({
<<<<<<< HEAD
            "where": {  and : [ {"dataResultado": null} , { lt: {"dataFinal": new Date()} } ] },
=======
            "where": {  and : [ {"dataResultado" : null} , { "gt": {"dataInicial" : new Date() } } ] },
>>>>>>> 2b1b9164fb90ec520af31171ce508f767b80eb7f
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
    * lista de campanhas para ser publicada online
    * @param {Function(Error, array)} callback
    */
    Campanhaads.listaParaPublicarTeste = function (idCampanha, callback) {
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
     * lista de campanhas para ser publicada online
     * @param {Function(Error, array)} callback
     */
    Campanhaads.listaParaPublicar = function (callback) {
        var listaCampanha;
        Campanhaads.find({
<<<<<<< HEAD
            "where": {  and : [ {"dataPublicacao": null} , { inq: {"dataFechamento": null } } ] },
=======
            "where": {  and : [ {"dataPublicacao" : null} , { "dataFechamento": {"neq" : null } } ] },
>>>>>>> 2b1b9164fb90ec520af31171ce508f767b80eb7f
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
