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
    ds.connector.query(sql, callback);
  };

  /**
   * Anuncios disponiveis para serem incluidos em uma campanha. Usar o idPagina da campanha.
   * @param {number} idPagina 
   * @param {Function(Error, array)} callback
   */
  Anuncioads.DisponiveisPorIdCampanha = function (idCampanha, callback) {
    var ds = Anuncioads.dataSource;
    var sql = " select AnuncioAds.* from AnuncioAds " +
              " inner join ValorConceito on ValorConceito.id = AnuncioAds.valorConceitoId " +
              " inner join ConceitoProduto on ConceitoProduto.id = ValorConceito.conceitoProdutoId " +
              " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.conceitoProdutoId = ConceitoProduto.id " +
              " inner join CampanhaAds on CampanhaAds.paginaValidacaoWebId = PaginaValidacaoWeb.id " +
              " where CampanhaAds.id = " + idCampanha +
              " and AnuncioAds.id not in " +
              " ( " +
              " select CampanhaAnuncioResultado.anuncioAdsId from CampanhaAnuncioResultado " +
              " where CampanhaAnuncioResultado.campanhaAdsId = " + idCampanha +
              " ) ";
    ds.connector.query(sql, callback);
  };

  /**
   * Somente para teste
   * @param {Function(Error, array)} callback
   */

  Anuncioads.ListaParaTesteCampanha = function (callback) {
    var listaSaida = [];
    listaSaida.push({ "titulo1": "xxxx", "titulo2": "zzzz" });
    listaSaida.push({ "titulo1": "xxxx", "titulo2": "zzzz" });
    listaSaida.push({ "titulo1": "xxxx", "titulo2": "zzzz" });
    callback(null, listaSaida);
  };

};
