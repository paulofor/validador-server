'use strict';

var app = require('../../server/server');

module.exports = function (Palavrachaveads) {



    /**
 * 
 * @param {number} idPagina 
 * @param {Function(Error, array)} callback
 */

    Palavrachaveads.ParaCampanhaPorIdPagina = function (idPagina, callback) {
        var Anuncioads = app.models.AnuncioAds;
        Anuncioads.paraCampanhaPorIdPagina(idPagina), ((err, result) => {
            console.log('Result:', JSON.stringify(result));
            var listaPalavra;
            // TODO
            callback(null, listaPalavra);
        })

    };

};
