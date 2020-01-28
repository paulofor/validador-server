'use strict';

var app = require('../../server/server');


module.exports = function (Valoretapafunilcampanha) {

  /*
  
  
  update ValorEtapaFunilCampanha
  set valor = (select quantidadeImpressao from CampanhaAds where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId),
  posicaoEtapa = (select posicao from EtapaCliente where id = etapaClienteId)
  where etapaClienteId = 1;
  
  update ValorEtapaFunilCampanha
  set valor = (select quantidadeClique from CampanhaAds where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId),
  posicaoEtapa = (select posicao from EtapaCliente where id = etapaClienteId)
  where etapaClienteId = 2;
  
  update ValorEtapaFunilCampanha
  set valor = (select conversao from CampanhaAds where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId),
  posicaoEtapa = (select posicao from EtapaCliente where id = etapaClienteId)
  where etapaClienteId = 3;
  
  update ValorEtapaFunilCampanha
  set valor = (
  select count(distinct VisitaApp.usuarioProdutoId) from VisitaApp
  inner join DispositivoUsuario on DispositivoUsuario.campanhaAdsId = VisitaApp.usuarioProdutoId
  ),
  posicaoEtapa = (select posicao from EtapaCliente where id = etapaClienteId)
  where etapaClienteId = 4;
  
  update ValorEtapaFunilCampanha
  set valor = (
  select count(distinct VisitaApp.usuarioProdutoId) from VisitaApp
  inner join DispositivoUsuario on DispositivoUsuario.campanhaAdsId = VisitaApp.usuarioProdutoId
  )
  where etapaClienteId = 5;
  
  
  update ValorEtapaFunilCampanha
  set custo = (select orcamentoTotalExecutado / valor
  from CampanhaAds
  where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId )
  
  
  */




  /**
  *
  * @param {Function(Error, object)} callback
  */
  Valoretapafunilcampanha.AtualizaValor = function (callback) {

    var sql1 = "update ValorEtapaFunilCampanha " +
      " set valor = (select quantidadeImpressao from CampanhaAds where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId), " +
      " posicaoEtapa = (select posicao from EtapaCliente where id = etapaClienteId) " +
      " where etapaClienteId = 1;"

    var sql2 = "update ValorEtapaFunilCampanha " +
      " set valor = (select quantidadeClique from CampanhaAds where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId), " +
      " posicaoEtapa = (select posicao from EtapaCliente where id = etapaClienteId) " +
      " where etapaClienteId = 2; "

    var sql3 = "update ValorEtapaFunilCampanha " +
      " set valor = (select conversao from CampanhaAds where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId), " +
      " posicaoEtapa = (select posicao from EtapaCliente where id = etapaClienteId) " +
      " where etapaClienteId = 3; "

    var sql4 = "update ValorEtapaFunilCampanha " +
      " set valor = ( " +
      " select count(distinct VisitaApp.usuarioProdutoId) from VisitaApp " +
      " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = VisitaApp.usuarioProdutoId " +
      " where ValorEtapaFunilCampanha.campanhaAdsId = DispositivoUsuario.campanhaAdsId " +
      " ), " +
      " posicaoEtapa = (select posicao from EtapaCliente where id = etapaClienteId) " +
      " where etapaClienteId = 4; ";

    var sql5 = " update ValorEtapaFunilCampanha " +
      " set valor = ( " +
      " select count(distinct VisitaApp.usuarioProdutoId) from VisitaApp " +
      " inner join DispositivoUsuario on DispositivoUsuario.campanhaAdsId = VisitaApp.usuarioProdutoId " +
      " ) " +
      " posicaoEtapa = (select posicao from EtapaCliente where id = etapaClienteId) " +
      " where etapaClienteId = 5;";

    var sqlCusto = " update ValorEtapaFunilCampanha " +
      " set custo = (select orcamentoTotalExecutado / valor " +
      " from CampanhaAds  " +
      " where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId )";

      
    var ds = Valoretapafunilcampanha.dataSource;
    ds.connector.query(sql1, (err, result) => {
      console.log("Sql1-err:" + err);
      ds.connector.query(sql2, (err, result) => {
        console.log("Sql2-err:" + err);
        ds.connector.query(sql3, (err, result) => {
          console.log("Sql3-err:" + err);
          ds.connector.query(sql4, (err, result) => {
            console.log("Sql4-err:" + err);
            ds.connector.query(sqlCusto, (err, result) => {
              console.log("sqlCusto-err:" + err);
              callback(err, result);
            })
          })
        })
      })
    });
  };



  /**
  *
  * @param {number} idCampanha
  * @param {Function(Error, object)} callback
  */
  Valoretapafunilcampanha.CriaEtapa = function (idCampanha, callback) {
    app.models.EtapaCliente.find((err, result) => {
      //console.log('Result: ' , console.log(result));
      result.forEach((item) => {
        //console.log('Item: ', JSON.stringify(item));
        let valor = { 'campanhaAdsId': idCampanha, 'etapaClienteId': item.id };
        console.log(valor);
        Valoretapafunilcampanha.create(valor, (err, result) => {
          //console.log('Erro: ', JSON.stringify(err));;
        });
      })
    })
    var saida;
    callback(null, saida);
  };


};
