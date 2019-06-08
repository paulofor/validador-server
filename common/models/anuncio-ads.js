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
    var sql = " select distinct AnuncioAds.* from AnuncioAds " +
              " inner join ValorConceito on ValorConceito.id = AnuncioAds.valorConceitoId " +
              " inner join ConceitoProduto on ConceitoProduto.id = ValorConceito.conceitoProdutoId " +
              " left outer join PaginaValidacaoWeb on PaginaValidacaoWeb.conceitoProdutoId = ConceitoProduto.id " +
              " left outer join CampanhaAds c1 on c1.paginaValidacaoWebId = PaginaValidacaoWeb.id " +
              " left outer join PaginaInstalacaoApp on PaginaInstalacaoApp.conceitoProdutoId = ConceitoProduto.id " +
              " left outer join CampanhaAds c2 on c2.paginaInstalacaoAppId = PaginaInstalacaoApp.id " +
              " where (c1.id = " + idCampanha + " or c2.id = " + idCampanha + ") " +
              " and AnuncioAds.id not in " +
              " ( " +
              " select CampanhaAnuncioResultado.anuncioAdsId from CampanhaAnuncioResultado " +
              " where CampanhaAnuncioResultado.campanhaAdsId = " + idCampanha +
              " ) order by mediaConversao desc, mediaCtr desc";
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
