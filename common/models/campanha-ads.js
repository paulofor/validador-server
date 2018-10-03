'use strict';

module.exports = function (Campanhaads) {

    /**
     * lista de campanhas para ser publicada online
     * @param {Function(Error, array)} callback
     */

    Campanhaads.listaParaPublicar = function (callback) {
        var listaCampanha;
        Campanhaads.find({"include":"anuncioAds", "where" : { "id" : "1" }}, (err, result) => {
            listaCampanha = result;
            callback(err, listaCampanha);
        })
       
    };


};
