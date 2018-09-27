'use strict';

module.exports = function(Projetomysql) {
 /**
     * Itens de modelos canvas que vao ajudar a construir as entidades do sistema gerador
     * @param {number} idProjeto
     * @param {Function(Error, array, array, array)} callback
      */

     Projetomysql.ItensAjudaEntidade = function (idProjeto, callback) {
        var listaMvpCanvas = [], listaGanhoDorCanvas  = [], listaProjetoCanvas = [];

        Projetomysql.findById(idProjeto, {"include" : {"relation": "mvpCanvasMySqls", "scope" : {"where" : { "or" : [{"tipo":"JORNADA"}] }}}}, function (err, modelInstance) {
            console.log(modelInstance);
            console.log(err);
            if (!err) {
                listaMvpCanvas = modelInstance.toJSON().mvpCanvasMySqls;
                Projetomysql.findById(idProjeto, {"include" : {"relation": "ganhoDorCanvasMySqls", "scope" : {"where" : {"tipo":"PRODUTO_SERVICO"} }}}, (err, result) => {
                    if (!err) {
                        listaGanhoDorCanvas = result.toJSON().ganhoDorCanvasMySqls;
                        Projetomysql.findById(idProjeto, {"include" : {"relation": "projetoCanvasMySqls", "scope" : {"where" : {"tipo":"VALOR"} }}} , (err,result) => {
                            if (!err) {
                                listaProjetoCanvas = result.toJSON().projetoCanvasMySqls;
                                callback(null, listaMvpCanvas, listaGanhoDorCanvas, listaProjetoCanvas);
                            } else {
                                callback(null, listaMvpCanvas, listaGanhoDorCanvas, listaProjetoCanvas);
                            }
                        })
                    } else {
                        callback(null, listaMvpCanvas, listaGanhoDorCanvas, listaProjetoCanvas);
                    }
                })
            } else {
                callback(null, listaMvpCanvas, listaGanhoDorCanvas, listaProjetoCanvas);
            }
            
        });
    }
};


