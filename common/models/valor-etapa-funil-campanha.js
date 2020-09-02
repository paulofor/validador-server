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
select count(distinct usuarioProdutoId) 
from
(
select 
VisitaApp.usuarioProdutoId, 
count(distinct date(VisitaApp.dataHora)) as qtde, 
DispositivoUsuario.campanhaAdsId as campanhaId
from VisitaApp 
inner join UsuarioProduto on UsuarioProduto.id = VisitaApp.usuarioProdutoId
inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id
where VisitaApp.dataHora >= DATE_ADD(UsuarioProduto.dataHoraCriacao, INTERVAL 5 DAY) // dias depois da instalação - inicio
and VisitaApp.dataHora <= DATE_ADD(UsuarioProduto.dataHoraCriacao, INTERVAL 12 DAY)  // dias depois da instalação - final
) as tab
where qtde > 0 // quantidade de dias
and ValorEtapaFunilCampanha.campanhaAdsId = campanhaId
and ValorEtapaFunilCampanha.etapaClienteId = 5
)
  
update ValorEtapaFunilCampanha
set valor = ( 
select count(distinct VisitaApp.usuarioProdutoId) 
from VisitaApp 
inner join UsuarioProduto on UsuarioProduto.id = VisitaApp.usuarioProdutoId
inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id  
where VisitaApp.telaAppId = 74 
and ValorEtapaFunilCampanha.campanhaAdsId = DispositivoUsuario.campanhaAdsId 
) , 
posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilCampanha.etapaClienteId ) 
where ValorEtapaFunilCampanha.etapaClienteId = 6; 
  
  
update ValorEtapaFunilCampanha
set valor = (
select count(distinct(NotificacaoApp.usuarioProdutoId))
from NotificacaoApp
inner join UsuarioProduto on UsuarioProduto.id = NotificacaoApp.usuarioProdutoId
inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id
where NotificacaoApp.dataHoraCriacao >= DATE_ADD(UsuarioProduto.dataHoraCriacao, INTERVAL 7 DAY)
and NotificacaoApp.resultadoEnvio = 'sucesso'
and ValorEtapaFunilCampanha.campanhaAdsId = DispositivoUsuario.campanhaAdsId
)
where ValorEtapaFunilCampanha.etapaClienteId = 8 


update ValorEtapaFunilCampanha 
set taxa = ( select tx from 
(
select (100 * (v1.valor / v2.valor)) as tx, v1.campanhaAdsId as campanhaId, v1.etapaClienteId as etapaId
from ValorEtapaFunilCampanha as v1, ValorEtapaFunilCampanha as v2, EtapaCliente
where 
v2.etapaClienteId = EtapaCliente.etapaClienteId
and v2.campanhaAdsId = v1.campanhaAdsId
and EtapaCliente.id = v1.etapaClienteId 
) as tab
where ValorEtapaFunilCampanha.campanhaAdsId = campanhaId
and ValorEtapaFunilCampanha.etapaClienteId = etapaId)




update ValorEtapaFunilCampanha
set valor =  (
select count(distinct UsuarioProduto.id) from UsuarioProduto
inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id 
where ValorEtapaFunilCampanha.campanhaAdsId = DispositivoUsuario.campanhaAdsId 
and UsuarioProduto.email is not null
),
posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilCampanha.etapaClienteId )
where ValorEtapaFunilCampanha.etapaClienteId = 9;



update ValorEtapaFunilCampanha
set valor = ( 
select count(distinct VisitaApp.usuarioProdutoId) 
from VisitaApp 
inner join UsuarioProduto on UsuarioProduto.id = VisitaApp.usuarioProdutoId
inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id  
where VisitaApp.telaAppId = 74 
and ValorEtapaFunilCampanha.campanhaAdsId = DispositivoUsuario.campanhaAdsId 
) , 
posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilCampanha.etapaClienteId ) 
where ValorEtapaFunilCampanha.etapaClienteId = 10; 

  */




  /**
  *
  * @param {Function(Error, object)} callback
  */
  Valoretapafunilcampanha.AtualizaValor = function (callback) {

    var sql1 = "update ValorEtapaFunilCampanha " +
      " set valor = (select quantidadeImpressao from CampanhaAds where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId), " +
      " posicaoEtapa = (select posicao from EtapaCliente where id = 1) " +
      " where ValorEtapaFunilCampanha.etapaClienteId = 1;"

    var sql2 = "update ValorEtapaFunilCampanha " +
      " set valor = (select quantidadeClique from CampanhaAds where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId), " +
      " posicaoEtapa = (select posicao from EtapaCliente where id = 2) " +
      " where ValorEtapaFunilCampanha.etapaClienteId = 2; "

    var sql3 = "update ValorEtapaFunilCampanha " +
      " set valor = (select conversao from CampanhaAds where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId), " +
      " posicaoEtapa = (select posicao from EtapaCliente where id = 3) " +
      " where ValorEtapaFunilCampanha.etapaClienteId = 3; "

    var sql4 = "update ValorEtapaFunilCampanha " +
      " set valor = ( " +
      " select count(distinct VisitaApp.usuarioProdutoId) from VisitaApp " +
      " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = VisitaApp.usuarioProdutoId " +
      " where ValorEtapaFunilCampanha.campanhaAdsId = DispositivoUsuario.campanhaAdsId " +
      " ), " +
      " posicaoEtapa = (select posicao from EtapaCliente where id = 4) " +
      " where ValorEtapaFunilCampanha.etapaClienteId = 4; ";

    var sql5 = "update ValorEtapaFunilCampanha " +
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
      " and ValorEtapaFunilCampanha.campanhaAdsId = campanhaId  " +
      " ) ," +
      " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilCampanha.etapaClienteId ) " +
      " where ValorEtapaFunilCampanha.etapaClienteId = 5 ";

    var sql6 = "update ValorEtapaFunilCampanha " +
      " set valor = ( " + 
      " select count(distinct VisitaApp.usuarioProdutoId) " +
      " from VisitaApp " +
      " inner join UsuarioProduto on UsuarioProduto.id = VisitaApp.usuarioProdutoId " +
      " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id  " +
      " where VisitaApp.telaAppId = 74 " +
      " and ValorEtapaFunilCampanha.campanhaAdsId = DispositivoUsuario.campanhaAdsId " +
      " ) , " +
      " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilCampanha.etapaClienteId ) " +
      " where ValorEtapaFunilCampanha.etapaClienteId = 6 ";

    var sql7 = "update ValorEtapaFunilCampanha " +
      " set posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilCampanha.etapaClienteId ) " +
      " where ValorEtapaFunilCampanha.etapaClienteId = 7 ";


    var sql8 = "update ValorEtapaFunilCampanha " +
      " set valor = ( " +
      " select count(distinct(NotificacaoApp.usuarioProdutoId)) " +
      " from NotificacaoApp " +
      " inner join UsuarioProduto on UsuarioProduto.id = NotificacaoApp.usuarioProdutoId " +
      " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id " +
      " where NotificacaoApp.dataHoraCriacao >= DATE_ADD(UsuarioProduto.dataHoraCriacao, INTERVAL 7 DAY) " +
      " and NotificacaoApp.resultadoEnvio = 'sucesso' " +
      " and ValorEtapaFunilCampanha.campanhaAdsId = DispositivoUsuario.campanhaAdsId " +
      " ) , " +
      " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilCampanha.etapaClienteId ) " +
      " where ValorEtapaFunilCampanha.etapaClienteId = 8 ";


      var sql5 = "update ValorEtapaFunilCampanha " +
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
      " and ValorEtapaFunilCampanha.campanhaAdsId = campanhaId  " +
      " ) ," +
      " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilCampanha.etapaClienteId ) " +
      " where ValorEtapaFunilCampanha.etapaClienteId = 5 ";

    var sql9 = "update ValorEtapaFunilCampanha " +
              " set valor =  ( " +
              " select count(distinct UsuarioProduto.id) from UsuarioProduto " +
              " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id  " +
              " where ValorEtapaFunilCampanha.campanhaAdsId = DispositivoUsuario.campanhaAdsId " +
              " and UsuarioProduto.email is not null " +
              " ), " +
              " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilCampanha.etapaClienteId ) " +
              " where ValorEtapaFunilCampanha.etapaClienteId = 9;"

    var sql10 = "update ValorEtapaFunilCampanha " +
              " set valor = ( " + 
              " select count(distinct VisitaApp.usuarioProdutoId) " +
              " from VisitaApp " +
              " inner join UsuarioProduto on UsuarioProduto.id = VisitaApp.usuarioProdutoId " +
              " inner join DispositivoUsuario on DispositivoUsuario.usuarioProdutoId = UsuarioProduto.id  " +
              " where VisitaApp.telaAppId = 73 " +
              " and ValorEtapaFunilCampanha.campanhaAdsId = DispositivoUsuario.campanhaAdsId " +
              " ) , " +
              " posicaoEtapa = (select posicao from EtapaCliente where id = ValorEtapaFunilCampanha.etapaClienteId ) " +
              " where ValorEtapaFunilCampanha.etapaClienteId = 10 ";

    var sqlCusto = " update ValorEtapaFunilCampanha " +
      " set custo = (select orcamentoTotalExecutado / valor " +
      " from CampanhaAds  " +
      " where CampanhaAds.id = ValorEtapaFunilCampanha.campanhaAdsId )";

    var sqlTaxa = " update ValorEtapaFunilCampanha " +
      " set taxa = ( select tx from " +
      " ( " +
      " select (100 * (v1.valor / v2.valor)) as tx, v1.campanhaAdsId as campanhaId, v1.etapaClienteId as etapaId " +
      " from ValorEtapaFunilCampanha as v1, ValorEtapaFunilCampanha as v2, EtapaCliente " +
      " where " +
      " v2.etapaClienteId = EtapaCliente.etapaClienteId " +
      " and v2.campanhaAdsId = v1.campanhaAdsId " +
      " and EtapaCliente.id = v1.etapaClienteId " +
      " ) as tab " +
      " where ValorEtapaFunilCampanha.campanhaAdsId = campanhaId " +
      " and ValorEtapaFunilCampanha.etapaClienteId = etapaId)";



    var ds = Valoretapafunilcampanha.dataSource;
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



  /**
  *
  * @param {number} idCampanha
  * @param {Function(Error, object)} callback
  */
  Valoretapafunilcampanha.CriaEtapa = function (idCampanha, callback) {
    const filter={"where":{"or":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},{"id":7},{"id":8},{"id":9},{"id":10}]}}
    app.models.EtapaCliente.find((err, result) => {
      //console.log('Result: ' , console.log(result));
      result.forEach((item) => {
        //console.log('Item: ', JSON.stringify(item));
        let valor = { 'campanhaAdsId': idCampanha, 'etapaClienteId': item.id };
        //console.log(valor);
        Valoretapafunilcampanha.create(valor, (err, result) => {
          //console.log('Erro: ', JSON.stringify(err));;
        });
      })
    })
    var saida = 'executando';
    callback(null, saida);
  };


};
