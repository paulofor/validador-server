'use strict';

var app = require('../../server/server');

module.exports = function (Usuarioproduto) {




    /**
    *
    * @param {object} usuario
    * @param {Function(Error, object)} callback
    */
    Usuarioproduto.PrimeiroAcesso = function (usuario, callback) {

        var sql = "update UsuarioProduto " +
            " set email = '" + usuario.email + "' , " +
            " senha = '" + usuario.senha + "' " +
            " where chave = '" + usuario.chave + "' ";

        var ds = Usuarioproduto.dataSource;
        ds.connector.query(sql, (err1, result1) => {
            if (err1) {
                callback(err1, null);
                return;
            }
            callback(null, 'alteracao');
        });

    };

    /**
     *
     * @param {string} chaveUsuario
     * @param {string} pagSeguroId
     * @param {Function(Error, object)} callback
     */

    Usuarioproduto.RegistraAssinatura = function (chaveUsuario, pagSeguroId, callback) {
        var resultado;
        // TODO
        var sql = "update UsuarioProduto " +
            " set codigoPagSeguro = '" + pagSeguroId + "' , " +
            " dataPagSeguro =  UTC_TIMESTAMP() " +
            " where chave = '" + chaveUsuario + "' ";
        var ds = Usuarioproduto.dataSource;
        ds.connector.query(sql, (err1, result1) => {
            if (err1) {
                callback(err1, null);
                return;
            }
            callback(null, 'alteracao');
        });
    };

    /**
    *
    * @param {object} usuario
    * @param {Function(Error, object)} callback
    */

    Usuarioproduto.CadastraLogin = function (usuario, callback) {
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

    /**
    * 
    * @param {string} chave 
    * @param {Function(Error, number)} callback
    */

    Usuarioproduto.PeriodoGratuito = function (chave, callback) {
        var dias = 20;
        Usuarioproduto.findOne({ 'where': { 'chave': chave } }, (err, usuario) => {
            if (!usuario) {
                console.log(new Date() + "Usuario nao encontrado - chave: " + chave);
                callback('Usuario não encontrado - chave: ' + chave, null, null);
                return;
            }
            console.log(new Date() + " - Usuario:" + JSON.stringify(usuario));
            let dataCorrente = new Date();
            //console.log('Data Corrente: ', dataCorrente);
            var diferenca1 = dataCorrente.getTime() - usuario.dataHoraCriacao.getTime();
            //console.log('Diferenca1: ', diferenca1);
            var Difference_In_Days = diferenca1 / (1000 * 3600 * 24);
            console.log(new Date() + " - Difference_In_Days:" + Difference_In_Days);
            dias = 20 - Math.floor(Difference_In_Days);
            console.log(new Date() + " - Dias:" + dias);
            if (usuario.codigoPagSeguro) {
                app.models.PagSeguro.VerificaPagamento(usuario.codigoPagSeguro, (err, result) => {
                    console.log('Result:', JSON.stringify(result));
                    callback(null, dias, result.status);
                })
            } else {
                callback(null, dias, null);
            }
        })

    };
};


