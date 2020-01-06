'use strict';

module.exports = function (Presencaloja) {


    /*
update PresencaLoja 
set 
quantidadeCampanha = (select count(*) from CampanhaAds where presencaLojaId = PresencaLoja.id) ,
mediaConversao = (select avg(conversao) from CampanhaAds where presencaLojaId = PresencaLoja.id) , 
mediaTaxaConversao = (select avg(taxaConversao) from CampanhaAds where presencaLojaId = PresencaLoja.id) ,
mediaCustoConversao = (select avg(custoConversao) from CampanhaAds where presencaLojaId = PresencaLoja.id) 
    */


    /**
     *
     * @param {Function(Error, object)} callback
     */
     Presencaloja.CalculaMetrica = function (callback) {
        //var result;
        var sql = " update PresencaLoja " +
            " set " +
            " quantidadeCampanha = (select count(*) from CampanhaAds where presencaLojaId = PresencaLoja.id) , " +
            " mediaConversao = (select avg(conversao) from CampanhaAds where presencaLojaId = PresencaLoja.id) , " +
            " mediaTaxaConversao = (select avg(taxaConversao) from CampanhaAds where presencaLojaId = PresencaLoja.id) , " +
            " mediaCustoConversao = (select avg(custoConversao) from CampanhaAds where presencaLojaId = PresencaLoja.id) ";
        var ds = Presencaloja.dataSource;
        ds.connector.query(sql, callback);
    };

    /**
    *
    * @param {number} idProjeto
    * @param {Function(Error, object)} callback
    */
    Presencaloja.CalculaMetricaProjeto = function (idProjeto, callback) {
        var result;
        var sql = " update PresencaLoja " +
            " set " +
            " quantidadeCampanha = (select count(*) from CampanhaAds where presencaLojaId = PresencaLoja.id) , " +
            " mediaConversao = (select avg(conversao) from CampanhaAds where presencaLojaId = PresencaLoja.id) , " +
            " mediaTaxaConversao = (select avg(taxaConversao) from CampanhaAds where presencaLojaId = PresencaLoja.id) , " +
            " mediaCustoConversao = (select avg(custoConversao) from CampanhaAds where presencaLojaId = PresencaLoja.id) ";
        var ds = Presencaloja.dataSource;
        ds.connector.query(sql, callback);
    };

};
