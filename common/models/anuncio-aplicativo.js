'use strict';

module.exports = function (Anuncioaplicativo) {

    /**
     *
     * @param {Function(Error, string)} callback
     */

    Anuncioaplicativo.CalculaMedias = function (callback) {
        var sql2 = " update AnuncioAplicativo " +
            " set mediaImpressao = (select avg(quantidadeImpressao) from CampanhaAds where CampanhaAds.anuncioAplicativoId = AnuncioAplicativo.id) ";
        var ds = Campanhaads.dataSource;
        ds.connector.query(sql1, callback);
    };

};
