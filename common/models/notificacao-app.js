'use strict';

const crypto = require('crypto');

module.exports = function (Notificacaoapp) {


    /**
     *
     * @param {string} tokenNotificacao
     * @param {Function(Error, object)} callback
     */

    Notificacaoapp.RegistraAcesso = function (tokenNotificacao, callback) {
        if (resultado && tokenNotificacao) {
            var ds = Notificacaoapp.dataSource;
            var sql = " update NotificacaoApp  " +
                " set dataHoraAcesso = UTC_TIMESTAMP() " +
                " where tokenNotificacao = " + tokenNotificacao;
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
                " set ressultadoEnvio = '" + resultado + "', " +
                " dataHoraEnvio = UTC_TIMESTAMP() " +
                " where tokenNotificacao = " + tokenNotificacao;
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
        var tokenNotificacao = crypto.createHash('sha1').update(current_date + random).digest('hex');
        notificacao.tokenNotificacao = tokenNotificacao;
        notificacao.dataHoraCriacao = new Date();
        Notificacaoapp.create(notificacao, (err, result) => {
            callback(err, tokenNotificacao);
        })
    };

};
