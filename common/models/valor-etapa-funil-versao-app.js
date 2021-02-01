'use strict';

var app = require('../../server/server');

module.exports = function(Valoretapafunilversaoapp) {




    Valoretapafunilversaoapp.AtualizaValorFunil = function (callback) {

        var sql1 = "update ValorEtapaFunilVersaoApp " +
          " set valor = (select quantidadeImpressao from CampanhaAds where CampanhaAds.id = ValorEtapaFunilVersaoApp.campanhaAdsId), " +
          " posicaoEtapa = (select posicao from EtapaCliente where id = 1) " +
          " where ValorEtapaFunilVersaoApp.etapaClienteId = 1;"
    
        var sql2 = "update ValorEtapaFunilVersaoApp " +
          " set valor = (select quantidadeClique from CampanhaAds where CampanhaAds.id = ValorEtapaFunilVersaoApp.campanhaAdsId), " +
          " posicaoEtapa = (select posicao from EtapaCliente where id = 2) " +
          " where ValorEtapaFunilVersaoApp.etapaClienteId = 2; "
    
        var sql3 = "update ValorEtapaFunilVersaoApp " +
          " set valor = (select conversao from CampanhaAds where CampanhaAds.id = ValorEtapaFunilVersaoApp.campanhaAdsId), " +
          " posicaoEtapa = (select posicao from EtapaCliente where id = 3) " +
          " where ValorEtapaFunilVersaoApp.etapaClienteId = 3; "
    
        var sql4 = "update ValorEtapaFunilVersaoApp " +
          " set valor = ( " +
          " select count(distinct VisitaApp.usuarioProdutoId) from VisitaApp " +
          " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = VisitaApp.usuarioProdutoId " +
          " where ValorEtapaFunilVersaoApp.campanhaAdsId = DispositivoUsuario.campanhaAdsId " +
          " ), " +
          " posicaoEtapa = (select posicao from EtapaCliente where id = 4) " +
          " where ValorEtapaFunilVersaoApp.etapaClienteId = 4; ";
    
        var sql5 = "update ValorEtapaFunilVersaoApp " +
          " set valor = (  " +
          " select count(distinct usuarioProdutoId)  " +
          " from  " +
          " (  " +
          " select   " +
          " VisitaApp.usuarioProdutoId,   " +
          " count(distinct date(VisitaApp.dataHora)) as qtde,  " +
          " DispositivoUsuario.campanhaAdsId as campanhaId  " +
          " from VisitaApp  " +
          " inner join UsuarioProduto on UsuarioProduto.id = VisitaApp.usuarioProdutoId  " +
          " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id  " +
          " where VisitaApp.dataHora >= DATE_ADD(UsuarioProduto.dataHoraCriacao, INTERVAL 3 DAY)  " + // dias depois da instalação - inicio
          " and VisitaApp.dataHora <= DATE_ADD(UsuarioProduto.dataHoraCriacao, INTERVAL 12 DAY)   " + // dias depois da instalação - final
          " ) as tab  " +
          " where qtde > 2  " + // quantidade de dias
          " and ValorEtapaFunilVersaoApp.campanhaAdsId = campanhaId  " +
          " ) ," +
          " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilVersaoApp.etapaClienteId ) " +
          " where ValorEtapaFunilVersaoApp.etapaClienteId = 5 ";
    
        var sql6 = "update ValorEtapaFunilVersaoApp " +
          " set valor = ( " + 
          " select count(distinct VisitaApp.usuarioProdutoId) " +
          " from VisitaApp " +
          " inner join UsuarioProduto on UsuarioProduto.id = VisitaApp.usuarioProdutoId " +
          " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id  " +
          " where VisitaApp.telaAppId = 74 " +
          " and ValorEtapaFunilVersaoApp.campanhaAdsId = DispositivoUsuario.campanhaAdsId " +
          " ) , " +
          " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilVersaoApp.etapaClienteId ) " +
          " where ValorEtapaFunilVersaoApp.etapaClienteId = 6 ";
    
        var sql7 = "update ValorEtapaFunilVersaoApp " +
          " set posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilVersaoApp.etapaClienteId ) " +
          " where ValorEtapaFunilVersaoApp.etapaClienteId = 7 ";
    
    
        var sql8 = "update ValorEtapaFunilVersaoApp " +
          " set valor = ( " +
          " select count(distinct(NotificacaoApp.usuarioProdutoId)) " +
          " from NotificacaoApp " +
          " inner join UsuarioProduto on UsuarioProduto.id = NotificacaoApp.usuarioProdutoId " +
          " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id " +
          " where NotificacaoApp.dataHoraCriacao >= DATE_ADD(UsuarioProduto.dataHoraCriacao, INTERVAL 7 DAY) " +
          " and NotificacaoApp.resultadoEnvio = 'sucesso' " +
          " and ValorEtapaFunilVersaoApp.campanhaAdsId = DispositivoUsuario.campanhaAdsId " +
          " ) , " +
          " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilVersaoApp.etapaClienteId ) " +
          " where ValorEtapaFunilVersaoApp.etapaClienteId = 8 ";
    
    
          var sql5 = "update ValorEtapaFunilVersaoApp " +
          " set valor = (  " +
          " select count(distinct usuarioProdutoId)  " +
          " from  " +
          " (  " +
          " select   " +
          " VisitaApp.usuarioProdutoId,   " +
          " count(distinct date(VisitaApp.dataHora)) as qtde,  " +
          " DispositivoUsuario.campanhaAdsId as campanhaId  " +
          " from VisitaApp  " +
          " inner join UsuarioProduto on UsuarioProduto.id = VisitaApp.usuarioProdutoId  " +
          " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id  " +
          " where VisitaApp.dataHora >= DATE_ADD(UsuarioProduto.dataHoraCriacao, INTERVAL 3 DAY)  " + // dias depois da instalação - inicio
          " and VisitaApp.dataHora <= DATE_ADD(UsuarioProduto.dataHoraCriacao, INTERVAL 12 DAY)   " + // dias depois da instalação - final
          " ) as tab  " +
          " where qtde > 2  " + // quantidade de dias
          " and ValorEtapaFunilVersaoApp.campanhaAdsId = campanhaId  " +
          " ) ," +
          " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilVersaoApp.etapaClienteId ) " +
          " where ValorEtapaFunilVersaoApp.etapaClienteId = 5 ";
    
        var sql9 = "update ValorEtapaFunilVersaoApp " +
                  " set valor =  ( " +
                  " select count(distinct UsuarioProduto.id) from UsuarioProduto " +
                  " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id  " +
                  " where ValorEtapaFunilVersaoApp.campanhaAdsId = DispositivoUsuario.campanhaAdsId " +
                  " and UsuarioProduto.email is not null " +
                  " ), " +
                  " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilVersaoApp.etapaClienteId ) " +
                  " where ValorEtapaFunilVersaoApp.etapaClienteId = 9;"
    
        var sql10 = "update ValorEtapaFunilVersaoApp " +
                  " set valor = ( " + 
                  " select count(distinct VisitaApp.usuarioProdutoId) " +
                  " from VisitaApp " +
                  " inner join UsuarioProduto on UsuarioProduto.id = VisitaApp.usuarioProdutoId " +
                  " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id  " +
                  " where VisitaApp.telaAppId = 73 " +
                  " and ValorEtapaFunilVersaoApp.campanhaAdsId = DispositivoUsuario.campanhaAdsId " +
                  " ) , " +
                  " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilVersaoApp.etapaClienteId ) " +
                  " where ValorEtapaFunilVersaoApp.etapaClienteId = 10 ";
    
        var sqlCusto = " update ValorEtapaFunilVersaoApp " +
          " set custo = (select orcamentoTotalExecutado / valor " +
          " from CampanhaAds  " +
          " where CampanhaAds.id = ValorEtapaFunilVersaoApp.campanhaAdsId )";
    
        var sqlTaxa = " update ValorEtapaFunilVersaoApp " +
          " set taxa = ( select tx from " +
          " ( " +
          " select (100 * (v1.valor / v2.valor)) as tx, v1.campanhaAdsId as campanhaId, v1.etapaClienteId as etapaId " +
          " from ValorEtapaFunilVersaoApp as v1, ValorEtapaFunilVersaoApp as v2, EtapaCliente " +
          " where " +
          " v2.etapaClienteId = EtapaCliente.etapaClienteId " +
          " and v2.campanhaAdsId = v1.campanhaAdsId " +
          " and EtapaCliente.id = v1.etapaClienteId " +
          " ) as tab " +
          " where ValorEtapaFunilVersaoApp.campanhaAdsId = campanhaId " +
          " and ValorEtapaFunilVersaoApp.etapaClienteId = etapaId)";
    
    
    
        var ds = Valoretapafunilversaoapp.dataSource;
        ds.connector.query(sql1, (err, result) => {
          //console.log("Sql1-err:" + err);
          ds.connector.query(sql2, (err, result) => {
            //console.log("Sql2-err:" + err);
            ds.connector.query(sql3, (err, result) => {
              //console.log("Sql3-err:" + err);
              ds.connector.query(sql4, (err, result) => {
                //console.log("Sql4-err:" + err);
                ds.connector.query(sql5, (err, result) => {
                  //console.log("Sql5-err:" + err);
                  ds.connector.query(sql6, (err, result) => {
                    //console.log("Sql6-err:" + err);
                    ds.connector.query(sql7, (err, result) => {
                      //console.log("Sql7-err:" + err);
                      ds.connector.query(sql8, (err, result) => {
                        //console.log("Sql8-err:" + err);
                        ds.connector.query(sql9, (err, result) => {
                          ds.connector.query(sql10, (err, result) => {
                            ds.connector.query(sqlCusto, (err, result) => {
                              //console.log("sqlCusto-err:" + err);
                              ds.connector.query(sqlTaxa, (err, result) => {
                                callback(err, result);
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        });
      };
    



    Valoretapafunilversaoapp.AtualizaValorVersaoApp = function (callback) {
        app.models.CampanhaAds.AtualizaInstalacao((err, result) => {
            Valoretapafunilversaoapp.AtualizaValorFunil(callback);
        });
    };

 /**
  *
  * @param {number} idCampanha
  * @param {Function(Error, object)} callback
  */
  Valoretapafunilversaoapp.CriaEtapa = function (idVersaoApp, callback) {
    const filter={"where":{"or":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},{"id":7},{"id":8},{"id":9},{"id":10}]}}
    app.models.EtapaCliente.find(filter,(err, result) => {
      console.log('Result: ' , console.log(result));
      result.forEach((item) => {
        console.log('Item: ', JSON.stringify(item));
        let valor = { 'versaoAppId': idVersaoApp, 'etapaClienteId': item.id };
        console.log(valor);
        Valoretapafunilversaoapp.create(valor, (err, result) => {
          console.log('Erro: ', JSON.stringify(err));;
        });
      })
    })
    var saida = 'executando';
    callback(null, saida);
  };
};
