'use strict';

module.exports = function(Dispositivousuario) {

/**
 * Atualiza com o id campanha atual
 * @param {number} idDispositivoUsuario 
 * @param {Function(Error, object)} callback
 */

Dispositivousuario.AtualizaCampanha = function(idDispositivoUsuario, callback) {
    var dispositivoUsuario;
    Dispositivousuario.findById(idDispositivoUsuario,(err1, dispositivoUsuario) => {
      if (err1) {
          callback(err1, null);
          return;
      } else {
        //console.log('Dispositivo Usuario' , JSON.stringify(dispositivoUsuario));
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
        ds.connector.query(sql,(err2,result2) => {
          //console.log('Erro2' , JSON.stringify(err2))
          //console.log('Result2' , JSON.stringify(result2));
          Dispositivousuario.findById(idDispositivoUsuario,callback);
        });
      }
    });
  };
};
