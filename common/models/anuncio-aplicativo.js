'use strict';

module.exports = function (Anuncioaplicativo) {

    /**
     *
     * @param {Function(Error, string)} callback
     */

    Anuncioaplicativo.CalculaMedias = function (callback) {
        var sql = " update AnuncioAplicativo " +
            " set " +
            " mediaImpressao = (select avg(quantidadeImpressao) " +
            " from AnuncioAplicacaoResultado where AnuncioAplicacaoResultado.anuncioAplicativoId = AnuncioAplicativo.id), " +
            " mediaCtr = (select avg(ctr) " +
            " from AnuncioAplicacaoResultado where AnuncioAplicacaoResultado.anuncioAplicativoId = AnuncioAplicativo.id), " +
            " mediaCustoConversao = (select avg(custoConversao) " +
            " from AnuncioAplicacaoResultado where AnuncioAplicacaoResultado.anuncioAplicativoId = AnuncioAplicativo.id), " +
            " mediaCpc = (select avg(cpcMedio) " +
            " from AnuncioAplicacaoResultado where AnuncioAplicacaoResultado.anuncioAplicativoId = AnuncioAplicativo.id)";
        var ds = Anuncioaplicativo.dataSource;
        ds.connector.query(sql, callback);
    };

};
