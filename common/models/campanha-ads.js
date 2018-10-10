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
        var campanha = { "nome" : "nova"  , "finalizadaProducao" : false, "paginaValidacaoWebId" : idPagina};
        Campanhaads.create(campanha, (err, result) => {
            console.log('Campanha: ' , JSON.stringify(result));
            var Anuncioads = Campanhaads.app.models.AnuncioAds;
            for (var ponto in Campanhaads.hasManyRemoting) {
                console.log(JSON.stringify(ponto));
            }
            Anuncioads.paraCampanhaPorIdPagina(idPagina, (err,result) => {
                console.log("Lista" , JSON.stringify(result));
                for (var item of result) {
                    console.log("item" , JSON.stringify(item));
                }
            })
            callback(null, result);
        })
    };


};
