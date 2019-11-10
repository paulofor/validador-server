'use strict';

module.exports = function (Campanhaanuncioresultado) {


    /**
    * Lista de resultados por idAnuncio e idProjeto
    * @param {number} idAnuncio
    * @param {Function(Error, array)} callback
    */

    Campanhaanuncioresultado.ListaComResultadoPorIdAnuncio = function (idAnuncio, callback) {
        //console.log('Campanhaanuncioresultado (idAnuncio) : ' , idAnuncio);
        var sql = 'select CampanhaAnuncioResultado.* from CampanhaAnuncioResultado ' +
            ' inner join CampanhaAds on CampanhaAds.id = CampanhaAnuncioResultado.campanhaAdsId ' +
            ' where anuncioAdsId = ' + idAnuncio +
            ' and CampanhaAds.dataResultado is not null ';
        var ds = Campanhaanuncioresultado.dataSource;
        ds.connector.query(sql, callback);
    };

};
