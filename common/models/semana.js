'use strict';

module.exports = function (Semana) {


 /**
 *
 * @param {number} semanas Quantidade de semanas pode ser positiva ou negativa
 * @param {Function(Error, object)} callback
 */

    Semana.ObtemDeslocada = function (semanas, callback) {
        var dataRef = new Date();
        dataRef = new Date(dataRef.setTime( dataRef.getTime() + (semanas * 7) * 86400000 ));
        var filtro = { "where" : {"and" : [
            { "PrimeiroDia" : {"lte" : dataRef } },
            { "UltimoDia" : {"gte" : dataRef }}
        ]} };
        Semana.find(filtro, callback);
    };
};
