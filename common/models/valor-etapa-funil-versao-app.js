'use strict';

var app = require('../../server/server');

module.exports = function(Valoretapafunilversaoapp) {


    let QTDE_ETAPA = 10;

    Valoretapafunilversaoapp.AtualizaValorFunil = function (callback) {


      var sqlCusto = " update ValorEtapaFunilVersaoApp " +
          " set custo = (select orcamentoTotalExecutado / valor " +
          " from CampanhaAds  " +
          " where CampanhaAds.versaoAppId = ValorEtapaFunilVersaoApp.versaoAppId )";
    
      var sqlTaxa = " update ValorEtapaFunilVersaoApp " +
          " set taxa = ( select tx from " +
          " ( " +
          " select (100 * (v1.valor / v2.valor)) as tx, v1.versaoAppId as versaoAppId, v1.etapaClienteId as etapaId " +
          " from ValorEtapaFunilVersaoApp as v1, ValorEtapaFunilVersaoApp as v2, EtapaCliente " +
          " where " +
          " v2.etapaClienteId = EtapaCliente.etapaClienteId " +
          " and v2.versaoAppId = v1.versaoAppId " +
          " and EtapaCliente.id = v1.etapaClienteId " +
          " ) as tab " +
          " where ValorEtapaFunilVersaoApp.versaoAppId = versaoAppId " +
          " and ValorEtapaFunilVersaoApp.etapaClienteId = etapaId)";
    

      var ds = Valoretapafunilversaoapp.dataSource;
      let cont=0;
      let sql = '';
      for (let i=1;i<=QTDE_ETAPA;i++) {
        sql = "update ValorEtapaFunilVersaoApp " +
        " set valor = ( " +
        " select sum(valor) from ValorEtapaFunilCampanha " +
        " inner join CampanhaAds on CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId " +
        " where etapaClienteId = " + i + " and CampanhaAds.versaoAppId = ValorEtapaFunilVersaoApp.versaoAppId), " +
        " posicaoEtapa = (select posicao from EtapaCliente where id = " + i + ") " +
        " where etapaClienteId = " + i;
        ds.connector.query(sql, (err,result) => {
          cont++;
          if (cont==QTDE_ETAPA) {
            //ds.connector.query(sqlCusto, (err, result) => {
              ds.connector.query(sqlTaxa, (err, result) => {
                callback(err, result);
              })
            //})
          }
        })
      }
    }


    Valoretapafunilversaoapp.AtualizaValorVersaoApp = function (callback) {
        app.models.CampanhaAds.AtualizaInstalacao((err, result) => {
            Valoretapafunilversaoapp.AtualizaValorFunil(callback);
        });
    };

 

  /**
 * 
 * @param {number} idVersaoApp 
 * @param {Function(Error, object)} callback
 */

   Valoretapafunilversaoapp.CriaEtapaVersaoApp = function(idVersaoApp, callback) {
    const filter={"where":{"or":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},{"id":7},{"id":8},{"id":9},{"id":10}]}}
    app.models.EtapaCliente.find(filter,(err, result) => {
      //console.log('Result: ' , console.log(result));
      result.forEach((item) => {
        //console.log('Item: ', JSON.stringify(item));
        let valor = { 'versaoAppId': idVersaoApp, 'etapaClienteId': item.id };
        //console.log(valor);
        Valoretapafunilversaoapp.create(valor, (err, result) => {
          //console.log('Erro: ', JSON.stringify(err));;
        });
      })
    })
    var saida = 'executando';
    callback(null, saida);
  };
};
