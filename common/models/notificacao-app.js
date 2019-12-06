'use strict';

const crypto = require('crypto');
var app = require('../../server/server');

module.exports = function (Notificacaoapp) {


    /**
     *
     * @param {string} tokenNotificacao
     * @param {Function(Error, object)} callback
     */

    Notificacaoapp.RegistraAcesso = function (tokenNotificacao, callback) {
        console.log('tokenNotificacao: ' , tokenNotificacao);
        if (tokenNotificacao) {
            var ds = Notificacaoapp.dataSource;
            var sql = " update NotificacaoApp  " +
                " set dataHoraAcesso = UTC_TIMESTAMP() " +
                " where tokenNotificacao = '" + tokenNotificacao + "'";
            ds.connector.query(sql, callback);
        } else {
            callback(null, 'sem valores')
        }
    };


    /**
     * Atualiza o resultado de um envio de notificacao normalmente sucesso ou fracasso
     * @param {string} resultado
     * @param {string} tokenNotificacao
     * @param {Function(Error, object)} callback
     */

    Notificacaoapp.ResultadoEnvio = function (resultado, tokenNotificacao, callback) {
        if (resultado && tokenNotificacao) {
            var ds = Notificacaoapp.dataSource;
            var sql = " update NotificacaoApp  " +
                " set resultadoEnvio = '" + resultado + "', " +
                " dataHoraEnvio = UTC_TIMESTAMP() " +
                " where tokenNotificacao = '" + tokenNotificacao + "'";
            ds.connector.query(sql, callback);
        } else {
            callback(null, 'sem valores')
        }
    };

    /**
     * Passo inicial para envio de notificação
     * @param {object} notificacao
     * @param {Function(Error, string)} callback
     */

    Notificacaoapp.PreparaEnvio = function (notificacao, callback) {
        app.models.DispositivoUsuario.findOne({'where': {'tokenFcm' : notificacao.tokenFcm}}, (err,dispositivoUsuario) => {
            if (dispositivoUsuario) {
                //console.log('DispositivoUsuario: ' , JSON.stringify(dispositivoUsuario));
                var current_date = (new Date()).valueOf().toString();
                var random = Math.random().toString();
                var tokenNotificacao = crypto.createHash('sha512').update(current_date + random).digest('hex');
                notificacao.tokenNotificacao = tokenNotificacao;
                notificacao.dataHoraCriacao = new Date();
                notificacao.dispositivoUsuarioId = dispositivoUsuario.id;
                notificacao.usuarioProdutoId = dispositivoUsuario.usuarioProdutoId;
                //console.log('NotificacaoApp: ' , JSON.stringify(notificacao));
                Notificacaoapp.create(notificacao, callback);
            } else {
                callback(err,dispositivoUsuario);
            }
        })
        
    };

};
