'use strict';

module.exports = function (Dsusuario) {



  /**
  * Cria registros para um ano e uma aplicação
  * @param {number} idAplicacao 
  * @param {number} ano Ano com quatro dígitos
  * @param {Function(Error, object)} callback
  */

  Dsusuario.CriaDiaAnoProjeto = function (idProjeto, ano, callback) {
    //var ds = Dsusuario.dataSource;
    //ds.connector.query(sql, callback);
    var resultado;
    var final = new Date(ano, 11, 31);
    for (var d = new Date(ano, 0, 1); d <= final; d.setDate(d.getDate() + 1)) {
      //console.log(new Date(d));
      let numMes = d.getMonth() + 1;
      var item = { 'dia': new Date(d), 'projetoMySqlId': idProjeto , 'numAno' : ano , 'numMes' : numMes};
      Dsusuario.create(item, (err, result) => {
        if (err)
          console.log('Dsusuario.CriaDiaAnoProjeto-err:', JSON.stringify(err));
        //if (result)
          //console.log('result:', JSON.stringify(result));
      })
    }
    callback(null, resultado);
  };

  /**
   * 
   * @param {number} mes 
   * @param {number} ano 
   * @param {Function(Error, object)} callback
   */

  Dsusuario.AtualizaPeriodoMesAno = function (mes, ano, callback) {
    var resultado;
    var sql = "update DsUsuario " +
          " set " +
          " qtdeInstalacao = ( " +
          " select count(*) from  UsuarioProduto where " + 
          " date(convert_tz(dataHoraCriacao,'+00:00','-03:00')) = DsUsuario.dia " +
          " and UsuarioProduto.projetoMySqlId = DsUsuario.projetoMySqlId) , " +
          " qtdeAtivoNotificacao = ( " +
          " select count(distinct usuarioProdutoId) from NotificacaoApp where " +
          " date(convert_tz(NotificacaoApp.dataHoraCriacao,'+00:00','-03:00')) = DsUsuario.dia " +
          " and resultadoEnvio = 'sucesso' " +
          " and NotificacaoApp.projetoMySqlId = DsUsuario.projetoMySqlId), " + 
          " qtdeAbreAplicacao = ( " +
          " select count(distinct usuarioProdutoId) from VisitaApp " +
          " inner join VersaoApp on VersaoApp.id = VisitaApp.versaoAppId " +
          " where date(convert_tz(VisitaApp.dataHora,'+00:00','-03:00')) = DsUsuario.dia " +
          " and VersaoApp.projetoMySqlId = DsUsuario.projetoMySqlId), " +
          " qtdeFluxoAssinatura = ( " +
          " select count(distinct usuarioProdutoId) from VisitaApp " +
          " inner join VersaoApp on VersaoApp.id = VisitaApp.versaoAppId " +
          " where date(convert_tz(VisitaApp.dataHora,'+00:00','-03:00')) = DsUsuario.dia " +
          " and VersaoApp.projetoMySqlId = DsUsuario.projetoMySqlId " +
          " and VisitaApp.telaAppId = 74 " +
          " ) "; 
    var ds = Dsusuario.dataSource;
    ds.connector.query(sql, callback);
  };


  Dsusuario.AtualizaPeriodoAno = function (ano, callback) {
    var resultado;
    var sql = "update DsUsuario " +
          " set " +
          " qtdeInstalacao = ( " +
          " select count(*) from  UsuarioProduto where " + 
          " date(convert_tz(dataHoraCriacao,'+00:00','-03:00')) = DsUsuario.dia " +
          " and UsuarioProduto.projetoMySqlId = DsUsuario.projetoMySqlId) , " +
          " qtdeAtivoNotificacao = ( " +
          " select count(distinct usuarioProdutoId) from NotificacaoApp where " +
          " date(convert_tz(NotificacaoApp.dataHoraCriacao,'+00:00','-03:00')) = DsUsuario.dia " +
          " and resultadoEnvio = 'sucesso' " +
          " and NotificacaoApp.projetoMySqlId = DsUsuario.projetoMySqlId), " + 
          " qtdeAbreAplicacao = ( " +
          " select count(distinct usuarioProdutoId) from VisitaApp " +
          " inner join VersaoApp on VersaoApp.id = VisitaApp.versaoAppId " +
          " where date(convert_tz(VisitaApp.dataHora,'+00:00','-03:00')) = DsUsuario.dia " +
          " and VersaoApp.projetoMySqlId = DsUsuario.projetoMySqlId), " +
          " qtdeFluxoAssinatura = ( " +
          " select count(distinct usuarioProdutoId) from VisitaApp " +
          " inner join VersaoApp on VersaoApp.id = VisitaApp.versaoAppId " +
          " where date(convert_tz(VisitaApp.dataHora,'+00:00','-03:00')) = DsUsuario.dia " +
          " and VersaoApp.projetoMySqlId = DsUsuario.projetoMySqlId " +
          " and VisitaApp.telaAppId = 74 " +
          " ) "; 
    var ds = Dsusuario.dataSource;
    ds.connector.query(sql, callback);
  };

  Dsusuario.AtualizaPeriodo = function (callback) {
    var resultado;
    var sql = "update DsUsuario " +
          " set " +
          " qtdeInstalacao = ( " +
          " select count(*) from  UsuarioProduto where " + 
          " date(convert_tz(dataHoraCriacao,'+00:00','-03:00')) = DsUsuario.dia " +
          " and UsuarioProduto.projetoMySqlId = DsUsuario.projetoMySqlId) , " +
          " qtdeAtivoNotificacao = ( " +
          " select count(distinct usuarioProdutoId) from NotificacaoApp where " +
          " date(convert_tz(NotificacaoApp.dataHoraCriacao,'+00:00','-03:00')) = DsUsuario.dia " +
          " and resultadoEnvio = 'sucesso' " +
          " and NotificacaoApp.projetoMySqlId = DsUsuario.projetoMySqlId), " + 
          " qtdeAbreAplicacao = ( " +
          " select count(distinct usuarioProdutoId) from VisitaApp " +
          " inner join VersaoApp on VersaoApp.id = VisitaApp.versaoAppId " +
          " where date(convert_tz(VisitaApp.dataHora,'+00:00','-03:00')) = DsUsuario.dia " +
          " and VersaoApp.projetoMySqlId = DsUsuario.projetoMySqlId), " +
          " qtdeFluxoAssinatura = ( " +
          " select count(distinct usuarioProdutoId) from VisitaApp " +
          " inner join VersaoApp on VersaoApp.id = VisitaApp.versaoAppId " +
          " where date(convert_tz(VisitaApp.dataHora,'+00:00','-03:00')) = DsUsuario.dia " +
          " and VersaoApp.projetoMySqlId = DsUsuario.projetoMySqlId " +
          " and VisitaApp.telaAppId = 74 " +
          " ) "; 
    var ds = Dsusuario.dataSource;
    ds.connector.query(sql, callback);
  };


};
