'use strict';

//var app = require('../../server/server');

module.exports = function (Palavrachaveads) {



    /**
 * 
 * @param {number} idPagina 
 * @param {Function(Error, array)} callback
 */

    Palavrachaveads.ParaCampanhaPorIdPagina = function (idPagina, callback) {
        var Anuncioads = Palavrachaveads.app.models.AnuncioAds;
        Anuncioads.find((err, result) => {
            console.log('Result:', JSON.stringify(result));
            var listaPalavra;
            callback(null, listaPalavra);
        })
        /*
        Anuncioads.paraCampanhaPorIdPagina(idPagina), ((err, result) => {
            console.log('Result:', JSON.stringify(result));
            var listaPalavra;
            callback(null, listaPalavra);
        })
        */

    };

};
