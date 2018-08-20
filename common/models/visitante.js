'use strict';

module.exports = function (Visitante) {
    /**
     * retorna o proximo cookie
     * @param {Function(Error, string)} callback
     */

    Visitante.proximoCookie = function (callback) {
        var codigoCookie =  '123456';
        // TODO
        callback(null, codigoCookie);
    };
};
