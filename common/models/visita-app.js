'use strict';

var app = require('../../server/server');

module.exports = function (Visitaapp) {

    /**
     *
     * @param {string} chaveUsuario
     * @param {string} chavePagina
     * @param {Function(Error, object)} callback
     */
    Visitaapp.RegistraVisitaTelaApp = function (chaveUsuario, chavePagina, callback) {
        var resultado = new Object();
        app.models.UsuarioProduto.find({'chave' : chaveUsuario} , (err1,result1) => {
            if (err1) {
                callback(err1,null);
                return;
            }
            resultado.usuarioProdutoId = result1.id;
            app.models.TelaApp.findOne({'chave' : chavePagina }, (err2,result2) => {
                if (err2) {
                    callback(err2,null);
                    return;
                }
                resultado.telaAppId = result2.id;
                resultado.dataHora = new Date();
                Visitaapp.create(resultado,callback);
            })
           
        })
    };


  /**
   *
   * @param {string} chaveUsuario
   * @param {string} chaveVersaoApp
   * @param {Function(Error, object)} callback
   */
    Visitaapp.RegistraVisitaVersaoApp = function (chaveUsuario, chaveVersaoApp, callback) {
        var resultado = new Object();
        app.models.UsuarioProduto.find({'chave' : chaveUsuario} , (err1,result1) => {
            if (err1) {
                callback(err1,null);
                return;
            }
            resultado.usuarioProdutoId = result1.id;
            resultado.versaoAppId = chaveVersaoApp;
            resultado.dataHora = new Date();
            Visitaapp.create(resultado,callback);
        })
    };

};
