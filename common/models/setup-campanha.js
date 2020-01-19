'use strict';

module.exports = function (Setupcampanha) {


    /*
    update SetupCampanha
    set
    quantidadeCampanha = (select count(*) from CampanhaAds where setupCampanhaId = SetupCampanha.id) ,
    mediaCustoConversao = (select avg(custoConversao) 
    from CampanhaAds where CampanhaAds.setupCampanhaId = SetupCampanha.id), 
    mediaCustoTotal = (select avg(orcamentoTotalExecutado) 
    from CampanhaAds where CampanhaAds.setupCampanhaId = SetupCampanha.id)
    mediaConversao = (select avg(conversao) 
    from CampanhaAds where CampanhaAds.setupCampanhaId = SetupCampanha.id)
    */



    /**
     *
     * @param {Function(Error, string)} callback
     */
    Setupcampanha.CalculaMedias = function (callback) {
        var resultado;
        // TODO
        callback(null, 'não implementado');
    };

    /**
    *
    * @param {Function(Error, object)} callback
    */
    Setupcampanha.CalculaMetrica = function (callback) {
        var sql = " update SetupCampanha " +
            " set " +
            " quantidadeCampanha = (select count(*) from CampanhaAds where setupCampanhaId = SetupCampanha.id) , " +
            " mediaCustoConversao = (select avg(custoConversao)  " +
            " from CampanhaAds where CampanhaAds.setupCampanhaId = SetupCampanha.id), " +
            " mediaCustoTotal = (select avg(orcamentoTotalExecutado) " +
            " from CampanhaAds where CampanhaAds.setupCampanhaId = SetupCampanha.id), " +
            " mediaConversao = (select avg(conversao) " + 
            " from CampanhaAds where CampanhaAds.setupCampanhaId = SetupCampanha.id) ";
        var ds = Setupcampanha.dataSource;
        ds.connector.query(sql, callback);
    };

    /**
    * por enquanto nao implementada
    * @param {number} idCampanha
    * @param {Function(Error, object)} callback
    */
    Setupcampanha.CalculaMetricaCampanha = function (idCampanha, callback) {
        var result;
        // TODO
        callback(null, 'não implementado');
    };
};
