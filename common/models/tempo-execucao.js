'use strict';

module.exports = function (Tempoexecucao) {


    /**
    * Insere novo com os cálculos necessários
    * @param {object} execucao
    * @param {Function(Error)} callback
    */
    Tempoexecucao.insere = function (execucao, callback) {
        Tempoexecucao.create(execucao,callback);
    };

    
    /**
    * Alteracao com calculos
    * @param {object} execucao
    * @param {Function(Error)} callback
    */
    Tempoexecucao.Altera = function(execucao, callback) {
        Tempoexecucao.update(execucao,callback);
    };
};
