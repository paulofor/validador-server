'use strict';

var app = require('../../server/server');

module.exports = function (Campanhaads) {

    /**
     * lista de campanhas para ser publicada online
     * @param {Function(Error, array)} callback
     */

    Campanhaads.listaParaPublicar = function (callback) {
        var listaCampanha;
        Campanhaads.find({ "where": { "id": "1" }, "include": [{ "relation": "anuncioAds" }, { "relation": "palavraChaveAds" }] }, (err, result) => {
            listaCampanha = result;
            callback(err, listaCampanha);
        })

    };


    /**
     * Cria uma nova campanha para uma pagina
     * @param {number} idPagina
     * @param {Function(Error, object)} callback
     */

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
                    //console.log('Item', item);
                }
                callback(null, campanha);
            })
        })
    };


};
