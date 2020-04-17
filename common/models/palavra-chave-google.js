'use strict';

var app = require('../../server/server');


module.exports = function (Palavrachavegoogle) {


    /**
    * Lista das palavras chaves do projeto da campanha
    * @param {number} idCampanha 
    * @param {Function(Error, array)} callback
    */

    Palavrachavegoogle.ListaDisponivelParaCampanha = function (idCampanha, callback) {
        // acho que tenho que mudar para left outer
        var sql =  "select distinct PalavraChaveGoogle.* from PalavraChaveGoogle " +
            " inner join PalavraGoogleProjeto on PalavraGoogleProjeto.palavraChaveGoogleId = PalavraChaveGoogle.palavra " + 
            " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.projetoMySqlId = PalavraGoogleProjeto.projetoMySqlId " +
            " inner join CampanhaAds c1 on c1.paginaValidacaoWebId = PaginaValidacaoWeb.id " +
            " inner join PaginaInstalacaoApp on PaginaInstalacaoApp.projetoMySqlId = PalavraGoogleProjeto.projetoMySqlId " +
            " inner join CampanhaAds c2 on c2.paginaInstalacaoAppId = PaginaInstalacaoApp.id " +
            " where (c1.id = " + idCampanha + " or c2.id = " + idCampanha + ") ";
        //var sql =  "select distinct PalavraGoogleProjeto.palavraChaveGoogleId as palavra from PalavraGoogleProjeto " +
        //    " left outer join PaginaValidacaoWeb on PaginaValidacaoWeb.projetoMySqlId = PalavraGoogleProjeto.projetoMySqlId " +
        //    " left outer join CampanhaAds c1 on c1.paginaValidacaoWebId = PaginaValidacaoWeb.id " +
        //    " left outer join PaginaInstalacaoApp on PaginaInstalacaoApp.projetoMySqlId = PalavraGoogleProjeto.projetoMySqlId " +
        //    " left outer join CampanhaAds c2 on c2.paginaInstalacaoAppId = PaginaInstalacaoApp.id " +
        //    " where (c1.id = " + idCampanha + " or c2.id = " + idCampanha + ") ";
        console.log('')
        var ds = Palavrachavegoogle.dataSource;
        ds.connector.query(sql, callback);
    };



};
