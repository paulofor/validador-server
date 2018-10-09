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
        //var campanha = new CampanhaAds();
        console.log('Campanha: ' , JSON.stringify(Campanhaads));
        callback(null, campanha);
    };


};
