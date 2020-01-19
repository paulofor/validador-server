'use strict';

module.exports = function (Cosmeticoportunidadedia) {


    /**
     * chamada pelos aplicativos
     * @param {Function(Error, array)} callback
     */

    Cosmeticoportunidadedia.ListaApp = function (callback) {
        var lista;
        Cosmeticoportunidadedia.find(callback);
    };


};
