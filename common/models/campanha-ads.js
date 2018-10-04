'use strict';

module.exports = function (Campanhaads) {

    /**
     * lista de campanhas para ser publicada online
     * @param {Function(Error, array)} callback
     */

    Campanhaads.listaParaPublicar = function (callback) {
        var listaCampanha;
        Campanhaads.find({"where" : { "id" : "1" }, "include" : [{"relation":"anuncioAds"} , {"relation":"palavraChaveAds"}] }, (err, result) => {
            listaCampanha = result;
            callback(err, listaCampanha);
        })
       
    };


};
