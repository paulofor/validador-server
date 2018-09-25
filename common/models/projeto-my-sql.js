'use strict';

module.exports = function(Projetomysql) {
 /**
     * Itens de modelos canvas que vao ajudar a construir as entidades do sistema gerador
     * @param {number} idProjeto
     * @param {Function(Error, array, array, array)} callback
      */

     Projetomysql.ItensAjudaEntidade = function (idProjeto, callback) {
        var listaMvpCanvas = [], listaGanhoDorCanvas  = [], listaProjetoCanvas = [];
        // TODO
        Projetomysql.findById(idProjeto, { "include": "mvpCanvasMySqls" }, function (err, modelInstance) {
            console.log('Erro:' , err);
            console.log('Valor: ' , JSON.stringify(modelInstance));
            var lista = modelInstance.mvpCanvasMySqls;
            console.log('1:' , modelInstance);
            console.log('2:' + modelInstance.toJSON().mvpCanvasMySqls);
            //modelInstance has properties here and can be returned to
            //the API call using the callback, for example:
            
            listaMvpCanvas = modelInstance.toJSON().mvpCanvasMySqls;
            callback(null, listaMvpCanvas, listaGanhoDorCanvas, listaProjetoCanvas);
        });
    }
};


