'use strict';

var app = require('../../server/server');

module.exports = function (Paletacor) {


    /**
    *
    * @param {number} idAplicacao
    * @param {Function(Error, object)} callback
    */
    Paletacor.ObtemPorIdAplicacao = function (idAplicacao, callback) {
        app.models.Aplicacao.findById(idAplicacao, (err, result) => {
            if (result.paletaCorsId) {
                Paletacor.findById(result.paletaCorsId, callback);
            } else {
                callback(null, null);
            }
        })
    };



};
