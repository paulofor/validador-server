'use strict';

module.exports = function(Projetomysql) {





/**
 * Retorna todos os projetos que ainda estão na fase de serem associados com palavras chaves ainda em momento inicial usando codigo de etapa = IDEA
 * @param {Function(Error, array)} callback
 */

Projetomysql.ListaIdeiaBase = function(callback) {
    //let filtro = { "include" : {"relation" : "etapaProjeto" , 
    //                        "scope" : { "where" : { "codigo" : "IDEA" }}}};
    //Projetomysql.find(this.filtro, callback);

    // Usar o Json é perigoso pq o raciocionio é diferente e arriscado.
    var ds = Projetomysql.dataSource;
    var sql = "select ProjetoMySql.* " +
      " from ProjetoMySql " +
      " inner join EtapaProjeto on EtapaProjeto.id = ProjetoMySql.etapaProjetoId " +
      " where EtapaProjeto.codigo = 'IDEA' ";
    ds.connector.query(sql, callback);
  };
  
  


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


