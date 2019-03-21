'use strict';



module.exports = function (Paletacor) {


    /**
    *
    * @param {number} idAplicacao
    * @param {Function(Error, object)} callback
    */
    Paletacor.ObtemPorIdAplicacao = function (idAplicacao, callback) {
        Paletacor.findById(1,callback);
    };



};
