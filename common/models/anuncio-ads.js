'use strict';

module.exports = function (Anuncioads) {


  /**
  * 
  * @param {number} idPagina 
  * @param {Function(Error, array)} callback
  */

  Anuncioads.paraCampanhaPorIdPagina = function (idPagina, callback) {
    var listaAnuncioAds = [];
    var ds = Anuncioads.dataSource;
    var sql = "select AnuncioAds.* " +
      " from AnuncioAds " +
      " inner join ItemValidacaoPagina on ItemValidacaoPagina.projetoCanvasMySqlId = AnuncioAds.projetoCanvasMySqlId " +
      " where paginaValidacaoWebId = " + idPagina;
    ds.connector.query(sql, function (err, result) {
      if (err) console.error(err);
      else listaAnuncioAds = result;
      callback(err, listaAnuncioAds);
    });
    
  };
};
