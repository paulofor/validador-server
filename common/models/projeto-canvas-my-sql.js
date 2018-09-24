'use strict';

module.exports = function (Projetocanvasmysql) {
    /**
     * Itens de modelos canvas que vao ajudar a construir as entidades do sistema gerador
     * @param {number} idProjeto
     * @param {Function(Error, array, array, array)} callback
     */

    Projetocanvasmysql.ItensAjudaEntidade = function (idProjeto, callback) {
        var listaMvpCanvas, listaGanhoDorCanvas, listaProjetoCanvas;
        // TODO
        Projetocanvasmysql.findById(idProjeto, { "include": "mvpCanvasMySqls" }, function (err, modelInstance) {
            //modelInstance has properties here and can be returned to
            //the API call using the callback, for example:
            callback(null, modelInstance.mvpCanvasMySqls, modelInstance.mvpCanvasMySqls, modelInstance.mvpCanvasMySqls);
        });
    }
};
