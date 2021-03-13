'use strict';



module.exports = function(Versaotelaappmetrica) {


    /**
    * 
    * @param {Function(Error, object)} callback
    */
    Versaotelaappmetrica.AtualizaGeral = function(callback) {
        let sql = " update VersaoTelaAppMetrica " + 
                " set quantidadeTotal = " +
                " ( " +
                " select count(*) from VisitaApp, VersaoTelaApp " +
                " where " +
                " VersaoTelaAppMetrica.versaoTelaAppId = VersaoTelaApp.id and " +
                " VersaoTelaApp.telaAppId = VisitaApp.telaAppId and " +
                " VersaoTelaApp.versaoAppId = VisitaApp.versaoAppId " +
                " )," +
                " quantidadeUsuario = " + 
                " ( " +
                " select count(distinct usuarioProdutoId) from VisitaApp, VersaoTelaApp " +
                " where " +
                " VersaoTelaAppMetrica.versaoTelaAppId = VersaoTelaApp.id and " +
                " VersaoTelaApp.telaAppId = VisitaApp.telaAppId and " +
                " VersaoTelaApp.versaoAppId = VisitaApp.versaoAppId " +
                " ) " +
                " where periodoMetricaId = 0";
        let ds = Versaotelaappmetrica.dataSource;
        ds.connector.query(sql,callback);
    };


    /**
    * 
    * @param {number} idTela 
    * @param {number} idVersaoApp 
    * @param {Function(Error, object)} callback
    */
    Versaotelaappmetrica.AtualizaTotais = function(idTela, idVersaoApp, callback) {
        //console.log('AtualizaTotais. idTela=' , idTela , ' idVersaoApp=' , idVersaoApp);
        let sql = " update VersaoTelaAppMetrica " + 
        " set quantidadeTotal = " +
        " ( " +
        " select count(*) from VisitaApp, VersaoTelaApp " +
        " where " +
        " VersaoTelaAppMetrica.versaoTelaAppId = VersaoTelaApp.id and " +
        " VersaoTelaApp.telaAppId = VisitaApp.telaAppId and " +
        " VersaoTelaApp.versaoAppId = VisitaApp.versaoAppId and " +
        " VersaoTelaApp.versaoAppId = " + idVersaoApp + " and " +
        " VersaoTelaApp.telaAppId = " + idTela +
        " )," +
        " quantidadeUsuario = " + 
        " ( " +
        " select count(distinct usuarioProdutoId) from VisitaApp, VersaoTelaApp " +
        " where " +
        " VersaoTelaAppMetrica.versaoTelaAppId = VersaoTelaApp.id and " +
        " VersaoTelaApp.telaAppId = VisitaApp.telaAppId and " +
        " VersaoTelaApp.versaoAppId = VisitaApp.versaoAppId and " +
        " VersaoTelaApp.versaoAppId = " + idVersaoApp + " and " +
        " VersaoTelaApp.telaAppId = " + idTela +
        " ) " +
        " where periodoMetricaId = 0 ";
        //console.log(sql);
        let ds = Versaotelaappmetrica.dataSource;
        ds.connector.query(sql,callback);
    };
};
