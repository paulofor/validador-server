'use strict';

module.exports = function(Monitorfaseinicialapp) {


    /**
 * 
 * @param {number} IdAplicacao 
 * @param {string} descricao 
 * @param {string} objeto 
 * @param {Function(Error, object)} callback
 */

Monitorfaseinicialapp.Insere = function(IdAplicacao, descricao, objeto, callback) {
    let obj = { 'descricao' : descricao, 'dataHora' : new Date() , 'objeto' : objeto };
    Monitorfaseinicialapp.create(obj,callback);
  };
  
};
