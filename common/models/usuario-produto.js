'use strict';

module.exports = function(Usuarioproduto) {



    /**
 *
 * @param {object} usuario
 * @param {Function(Error, object)} callback
 */

Usuarioproduto.CadastraLogin = function(usuario, callback) {
    var sql = "update UsuarioProduto set nome = '" + usuario.nome + "', " +
            " senha = '" + usuario.senha + "' " +
            " where chave = '" + usuario.chave + "'";
    var ds = Usuarioproduto.dataSource;
    ds.connector.query(sql, (err1, result1) => {
        if (err1) {
            callback(err1, null);
            return;
        }
        callback(null, 'alteracao');
    });
    
  };
};
