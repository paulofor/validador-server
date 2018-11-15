'use strict';

module.exports = function (Palavrachaveraiz) {

    /**
     * Lista para ir no Ads Google pesquisar
     * @param {Function(Error, array)} callback
     */

    Palavrachaveraiz.ListaParaConsulta = function (callback) {
        var listaPalavra = [ ];
        Palavrachaveraiz.find(callback);
    };


    Palavrachaveraiz.ListaParaConsultaTeste = function (callback) {
        var listaPalavra = [ 
            {'id' : 1, 'palavra' : 'vendas' , 'dataUltimaAtualizacao' : null , 'ativo' : null} 
        ];

        callback(null, listaPalavra);
    };

};
