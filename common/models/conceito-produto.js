'use strict';

module.exports = function (Conceitoproduto) {

    /**
    * Retorna o conceito de produto ativo e a lista de todos de um projeto
    * @param {number} idProjeto 
    * @param {Function(Error, object, array)} callback
    */
    Conceitoproduto.AtivoComListaPorProjeto = function (idProjeto, callback) {
        var ativo, listaConceito ;
        var ds = Conceitoproduto.dataSource;
        var sql1 = "select ConceitoProduto.* " +
          " from ConceitoProduto " +
          " where projetoMySqlId = " + idProjeto + 
          " and ativo = 1 ";
        ds.connector.query(sql1, (err1,result1) => {
            if (err1) {
                callback(err1,null)
                return;
            }
            ativo = (result1.length>0?result1[0]:{});
            var sql2 = "select ConceitoProduto.* " +
            " from ConceitoProduto " +
            " where projetoMySqlId = " + idProjeto + 
            " order by dataCriacao desc"; 
            ds.connector.query(sql2, (err2,result2) => {
                listaConceito = result2;
                callback(err2, ativo, listaConceito);
            })
        });
    };

    /*
    Conceitoproduto.ativoPorProjeto = function(idProjeto, callback) {
        var saida;
        var ds = Conceitoproduto.dataSource;
        var sql1 = "select ConceitoProduto.* " +
          " from ConceitoProduto " +
          " where projetoMySqlId = " + idProjeto + 
          " and ativo = 1 ";
          ds.connector.query(sql1, (err1,result1) => {
            if (err1) {
                callback(err1,null)
                return;
            }
            saida = (result1.length>0?result1[0]:{});
            callback(null,saida);
        }
    }
    */



    /**
    * Criando um novo, colocando como ativo e alterando os demais.
    * @param {object} conceitoProduto 
    * @param {Function(Error, object)} callback
    */
    Conceitoproduto.CriaConceitoProduto = function (conceitoProduto, callback) {
        var ds = Conceitoproduto.dataSource;
        var sql1 = "update ConceitoProduto " +
          " set ativo = 0 " +
          " where projetoMySqlId = " + conceitoProduto.projetoMySqlId;
        ds.connector.query(sql1, (err1,result1) => {
            if (err1) {
                callback(err1,result1)
                return;
            }
            conceitoProduto.dataCriacao = new Date();
            conceitoProduto.ativo = 1;
            Conceitoproduto.create(conceitoProduto,callback);
        });
    };
};
