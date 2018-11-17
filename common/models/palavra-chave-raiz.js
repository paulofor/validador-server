'use strict';

module.exports = function (Palavrachaveraiz) {

    /**
     * Lista para ir no Ads Google pesquisar
     * @param {Function(Error, array)} callback
     */

    Palavrachaveraiz.ListaParaConsulta = function (callback) {
        var listaPalavra = [];
        var d = new Date();
        d.setDate(d.getDate() - 20); // 20 dias 
        Palavrachaveraiz.find({
            "where": { "and" : 
                [ 
                    { "ativo": 1 }, 
                    { "or" : [
                        {"dataUltimaAtualizacao" : { "lt": d } },
                        {"dataUltimaAtualizacao" : null} 
                    ]
                    }
                ] 
            }
        },
            callback);
    };


    Palavrachaveraiz.ListaParaConsultaTeste = function (callback) {
        Palavrachaveraiz.find({"where" : {"id" : 1}} , callback);
    };

};
