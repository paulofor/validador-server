'use strict';

module.exports = function (Palavrachaveraiz) {

    /**
     * Obtem o objeto com a lista de melhores baseada nos indices da funcao ListaMelhoresPadrao no objeto PalavraChaveEstatistica
     * @param {number} idPalavraChaveRaiz
     * @param {Function(Error, object)} callback
     */

    Palavrachaveraiz.ObtemComListaMelhoresPadrao = function (idPalavraChaveRaiz, callback) {
        Palavrachaveraiz.find({
            "where" : { "id" : idPalavraChaveRaiz },
            "include" : { "relation" : "palavraChaveEstatisticas" , 
                            "scope" :
                            {
                                "where" : 
                                    {"and" : [
                                        {"mediaCpc" : { "lt" : 0.9 } },
                                        {"volumePesquisa" : {"gt" : 3000 }},
                                        {"maisRecente" : 1}
                                    ]},
                                "order": "volumePesquisa DESC"
                            }
                        }
        }
        ,callback);
    };




    /**
     * Lista para ir no Ads Google pesquisar
     * @param {Function(Error, array)} callback
     */

    Palavrachaveraiz.ListaParaConsulta = function (callback) {
        var listaPalavra = [];
        var d = new Date();
        d.setDate(d.getDate() - 20); // 20 dias 
        Palavrachaveraiz.find({
            "where": {
                "and":
                    [
                        { "ativo": 1 },
                        {
                            "or": [
                                { "dataUltimaAtualizacao": { "lt": d } },
                                { "dataUltimaAtualizacao": null }
                            ]
                        }
                    ]
            }
        },
            callback);
    };


    Palavrachaveraiz.ListaParaConsultaTeste = function (callback) {
        Palavrachaveraiz.find({ "where": { "id": 1 } }, callback);
    };

};
