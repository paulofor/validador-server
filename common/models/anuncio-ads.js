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



  /**
   * Somente para teste
   * @param {Function(Error, array)} callback
   */

  Anuncioads.ListaParaTesteCampanha = function (callback) {
    var listaSaida = [];
    listaSaida.push({ "id": "1", "titulo1": "xxxx", "titulo2": "zzzz" });
    listaSaida.push({ "id": "2", "titulo1": "xxxx", "titulo2": "zzzz" });
    listaSaida.push({ "id": "3", "titulo1": "xxxx", "titulo2": "zzzz" });
    callback(null, listaSaida);
  };

};
