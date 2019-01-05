'use strict';

var app = require('../../server/server');


module.exports = function (Palavrachavegoogle) {


    /**
    * Lista das palavras chaves do projeto da campanha
    * @param {number} idCampanha 
    * @param {Function(Error, array)} callback
    */

    Palavrachavegoogle.ListaDisponivelParaCampanha = function (idCampanha, callback) {
        var sql =  "select PalavraChaveGoogle.* from PalavraChaveGoogle " +
            " inner join PalavraGoogleProjeto on PalavraGoogleProjeto.palavraChaveGoogleId = PalavraChaveGoogle.palavra " + 
            " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.projetoMySqlId = PalavraGoogleProjeto.projetoMySqlId " +
            " inner join CampanhaAds on CampanhaAds.paginaValidacaoWebId = PaginaValidacaoWeb.id " +
            " where CampanhaAds.id = " + idCampanha;
        var ds = Palavrachavegoogle.dataSource;
        ds.connector.query(sql, callback);
    };



};
