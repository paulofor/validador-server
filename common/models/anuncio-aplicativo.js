'use strict';

module.exports = function (Anuncioaplicativo) {


    /*
    update AnuncioAplicativo 
    set
    quantidadeCampanha = (select count(*) from CampanhaAds where anuncioAplicativoId = AnuncioAplicativo.id), 
    mediaImpressao = (select avg(quantidadeImpressao)
    from AnuncioAplicacaoResultado where AnuncioAplicacaoResultado.anuncioAplicativoId = AnuncioAplicativo.id),
    mediaCtr = (select avg(ctr) 
    from AnuncioAplicacaoResultado where AnuncioAplicacaoResultado.anuncioAplicativoId = AnuncioAplicativo.id),
    mediaCustoConversao = (select avg(custoConversao) 
    from AnuncioAplicacaoResultado where AnuncioAplicacaoResultado.anuncioAplicativoId = AnuncioAplicativo.id), 
    mediaCpc = (select avg(cpcMedio) 
    from AnuncioAplicacaoResultado where AnuncioAplicacaoResultado.anuncioAplicativoId = AnuncioAplicativo.id)
    */


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

    /**
    *
    * @param {Function(Error, object)} callback
    */
    Anuncioaplicativo.CalculaMetrica = function (callback) {
        var sql = " update AnuncioAplicativo " +
            " set " +
            " quantidadeCampanha = (select count(*) from CampanhaAds where anuncioAplicativoId = AnuncioAplicativo.id), " +
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


    /**
    * Por enquanto esta geral
    * @param {number} idCampanha
    * @param {Function(Error, object)} callback
    */
    Anuncioaplicativo.CalculaMetricaCampanha = function (idCampanha, callback) {
        var result;
        // TODO
        callback(null, result);
    };


    /**
    * Ainda nao implementada
    * @param {number} idProjeto
    * @param {Function(Error, object)} callback
    */
    Anuncioaplicativo.CalculaMetricaProjeto = function (idProjeto, callback) {
        var result;
        // TODO
        callback(null, result);
    };

};
