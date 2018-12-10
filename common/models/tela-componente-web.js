'use strict';

module.exports = function (Telacomponenteweb) {


    /**
    * Remove a relacao com os ids
    * @param {number} idTela 
    * @param {number} idComponente 
    * @param {Function(Error)} callback
    */

    Telacomponenteweb.RemoveRelacao = function (idTela, idComponente, callback) {
        var ds = Telacomponenteweb.dataSource;
        var sql = "delete from TelaComponenteWeb " +
            " where telaWebId = " + idTela + " and " +
            " componenteWebId = " + idComponente;
        ds.connector.query(sql, callback);
    };
};
