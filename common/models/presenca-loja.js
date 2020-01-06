'use strict';

module.exports = function (Presencaloja) {

    /**
     *
     * @param {Function(Error, object)} callback
     */

    Presencaloja.CalculaMetrica = function (callback) {
        var result;
        var sql = " update PresencaLoja " +
            " set " + 
            " quantidadeCampanha = (select count(*) from CampanhaAds where presencaLojaId = PresencaLoja.id) " +
            " mediaConversao = (select avg(conversao) from CampanhaAds where presencaLojaId = PresencaLoja.id) ";
        var ds = Presencaloja.dataSource;
        ds.connector.query(sql, callback);
    };

};
