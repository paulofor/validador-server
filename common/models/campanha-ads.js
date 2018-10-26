'use strict';

var app = require('../../server/server');

module.exports = function (Campanhaads) {


    /**
    * 
    * @param {Function(Error, array)} callback
    * Quem já fechou e não tem ainda resultado.
    */

   Campanhaads.ListaParaResultado = function(callback) {
        var listaCampanha;
        // TODO
        var ds = Campanhaads.dataSource;
        var sql = "select CampanhaAds.* " +
          " from CampanhaAds " ;
          //" inner join CampanhaAdsAnuncioAds on CampanhaAdsAnuncioAds.campanhaAdsId = CampanhaAds.id " +
          //" inner join AnuncioAds on AnuncioAds.Id = CampanhaAdsAnuncioAds.anuncioAdsId";
        ds.connector.query(sql, callback);
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

    Campanhaads.listaParaPublicar = function (callback) {
        var listaCampanha;
        Campanhaads.find({ "where": { "id": "20" }, "include": [{ "relation": "anuncioAds" }, { "relation": "palavraChaveAds" }] }, (err, result) => {
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
                            console.log('Erro2:', err);
                        })
                        var campanhaAnuncio = {
                            "anuncioAdsId" : item.id,
                            "campanhaAdsId" : campanhaGrava.id
                        };
                        app.models.CampanhaAnuncio.create(campanhaAnuncio, (err,result) => {
                            console.log('Result' , result);
                            callback(err, result);
                        })
                    }
                })
                // tratando lista de palavra-chave
                app.models.PalavraChaveAds.ParaCampanhaPorIdPagina(idPagina, (err, result) => {
                    for (var item of result) {
                        campanhaGrava.palavraChaveAds.add(item.id, (err, result) => {
                            console.log('Erro3:', err);
                        })
                    }
                })
                //callback(err, campanhaGrava);
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
