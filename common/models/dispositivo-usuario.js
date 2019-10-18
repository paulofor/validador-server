'use strict';


var app = require('../../server/server');
const crypto = require('crypto');

module.exports = function (Dispositivousuario) {



  /**
   * Cria usuario e dispositivo
   * @param {object} dispositivo 
   * @param {Function(Error, string)} callback
   */
  Dispositivousuario.CriaComUsuario = function (dispositivo, callback) {
    // deveria ter transacao aqui.
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    var chaveUsuario = crypto.createHash('sha1').update(current_date + random).digest('hex');
    app.models.VersaoApp.findById(dispositivo.versaoAppId , (err1, result1) => {
      if (err1) {
        callback(err1, null);
        return;
      }
      var usuario = { 'chave': chaveUsuario , 'projetoMySqlId' : result1.projetoMySqlId };
      app.models.UsuarioProduto.create(usuario, (err2, result2) => {
        if (err2) {
          callback(err2, null);
          return;
        }
        dispositivo.usuarioProdutoId = result2.id;
        dispositivo.dataHoraCriacao = new Date();
        Dispositivousuario.create(dispositivo, (err3, result3) => {
          if (err3) {
            callback(err, null);
            return;
          } else {
            callback(null, chaveUsuario);
          }
        })
      })
    })
  };



  /**
   * Atualiza com o id campanha atual
   * @param {number} idDispositivoUsuario 
   * @param {Function(Error, object)} callback
   */

  Dispositivousuario.AtualizaCampanha = function (idDispositivoUsuario, callback) {
    var dispositivoUsuario;
    Dispositivousuario.findById(idDispositivoUsuario, (err1, dispositivoUsuario) => {
      if (!dispositivoUsuario) {
        callback('Id não encontrado', null)
        return;
      }
      if (err1) {
        callback(err1, null);
        return;
      } else {
        //console.log('Dispositivo Usuario' , JSON.stringify(dispositivoUsuario));
        if (!dispositivoUsuario.campanhaAdsId || dispositivoUsuario.campanhaAdsId != 0) {
          callback(null, dispositivoUsuario)
        } else {
          var ds = Dispositivousuario.dataSource;
          var sql = " update DispositivoUsuario " +
            " set dataAlteracao = now(), " +
            " campanhaAdsId = " +
            " ( " +
            " select id from CampanhaAds " +
            " where (dataInicial <= now()) " +
            " and (dataFinal >= now()) " +
            " and (versaoAppId = " + dispositivoUsuario.versaoAppId + ") " +
            " ) " +
            " where id = " + dispositivoUsuario.id;
          //console.log('SQL: ' , sql);        
          ds.connector.query(sql, (err2, result2) => {
            //console.log('Erro2' , JSON.stringify(err2))
            //console.log('Result2' , JSON.stringify(result2));
            Dispositivousuario.findById(idDispositivoUsuario, callback);
          });
        }
      }
    });
  };
};
