'use strict';

//var app = require('../../server/server');

module.exports = function (Palavrachaveads) {



/*
select PalavraChaveAds.*
from PalavraChaveAds
inner join GanhoDorCanvasMySql on GanhoDorCanvasMySql.id = PalavraChaveAds.ganhoDorCanvasMySqlId
inner join PaginaValidacaoWeb on PaginaValidacaoWeb.projetoMySqlId = GanhoDorCanvasMySql.projetoMySqlId
where PaginaValidacaoWeb.id = 6
*/



    /**
 * 
 * @param {number} idPagina 
 * @param {Function(Error, array)} callback
 */

    Palavrachaveads.ParaCampanhaPorIdPagina = function (idPagina, callback) {
        var ds = Palavrachaveads.dataSource;
        var sql = "select PalavraChaveAds.* " +
                " from PalavraChaveAds " +
                " inner join GanhoDorCanvasMySql on GanhoDorCanvasMySql.id = PalavraChaveAds.ganhoDorCanvasMySqlId " +
                " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.projetoMySqlId = GanhoDorCanvasMySql.projetoMySqlId " +
                " where PaginaValidacaoWeb.id = " + idPagina;
        ds.connector.query(sql, callback);
    };

};
