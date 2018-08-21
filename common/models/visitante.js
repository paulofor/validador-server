'use strict';

const crypto = require('crypto');

module.exports = function (Visitante) {
    /**
     * retorna o proximo cookie
     * @param {Function(Error, string)} callback
     */

    Visitante.proximoCookie = function (callback) {
        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        var codigoCookie = crypto.createHash('sha1').update(current_date + random).digest('hex');
        callback(null, codigoCookie);
    };
};
    