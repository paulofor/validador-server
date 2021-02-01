'use strict';

var app = require('../../server/server');

module.exports = function (Visitaapp) {



    /**
    * 
    * @param {string} chaveUsuario 
    * @param {string} chavePagina 
    * @param {string} chaveVersaoApp 
    * @param {string} chaveSessao 
    * @param {Function(Error)} callback
    */
    Visitaapp.RegistraVisitaTelaAppSessao = function(chaveUsuario, chavePagina, chaveVersaoApp, chaveSessao, callback) {
        // TODO
        //callback(null);

        app.models.VisitaAppLog.upsert(
            {
                'dataHora' : new Date(),
                'chaveUsuario' : chaveUsuario,
                'versaoApp' : chaveVersaoApp,
                'chavePagina' : chavePagina,
                'chaveSessao' : chaveSessao,
                'tipo' : 'Tela'
            }
        )

        var resultado = new Object();
        app.models.UsuarioProduto.findOne({ 'where': { 'chave': chaveUsuario } }, (err1, result1) => {
            if (err1) {
                callback(err1, null);
                return;
            }
            if (!result1) {
                callback('usuario não encontrado - chave: ' + chaveUsuario, null);
                app.models.ErroLogicoLog.upsert(
                        { 
                        'descricao' : 'usuario não encontrado - chave: ' + chaveUsuario, 
                        'dataHora' : new Date() ,
                        'local' : 'Visitaapp.RegistraVisitaTelaApp'
                        });
                return;
            }
            resultado.usuarioProdutoId = result1.id;
            result1.dataUltimoAcesso = new Date();
            //console.log('Objeto: ' , JSON.stringify(result1));
            app.models.UsuarioProduto.upsert(result1, (err, result) => {
                app.models.TelaApp.findOne({ 'where': { 'chave': chavePagina } }, (err2, result2) => {
                    if (err2) {
                        callback(err2, null);
                        return;
                    }
                    if (!result2) {
                        app.models.ErroLogicoLog.upsert(
                            { 
                            'descricao' : 'pagina não encontrada - chave: ' + chavePagina, 
                            'dataHora' : new Date() ,
                            'local' : 'Visitaapp.RegistraVisitaTelaApp'
                            });
    
                        callback('pagina não encontrada - chave: ' + chavePagina, null);
                        return;
                    }


                    resultado.telaAppId = result2.id;
                    resultado.dataHora = new Date();
                    if (chaveVersaoApp) {
                        resultado.versaoAppId = chaveVersaoApp;
                    }
                    if (chaveSessao) {
                        resultado.sessaoId = chaveSessao;
                    }
                    Visitaapp.create(resultado, callback);
                })
            })
        })
 
    };

  
    /**
    * 
    * @param {string} chaveUsuario 
    * @param {string} chaveVersaoApp 
    * @param {Function(Error, string)} callback
    */
   Visitaapp.RegistraVisitaVersaoAppSessao = function(chaveUsuario, chaveVersaoApp, callback) {
        var chaveSessao;
        console.log('chaveUsuario:' , chaveUsuario , ' chaveVersaoApp:' , chaveVersaoApp);
        app.models.VisitaAppLog.upsert(
            {
                'dataHora' : new Date(),
                'chaveUsuario' : chaveUsuario,
                'versaoApp' : chaveVersaoApp,
                'tipo' : 'Versao'
            }
        )
        var resultado = new Object();
        app.models.UsuarioProduto.findOne({ 'where': { 'chave': chaveUsuario } }, (err1, result1) => {
            if (err1) {
                callback(err1, null);
                return;
            }
            if (!result1) {
                callback('usuario não encontrado - chave: ' + chaveUsuario, null);
                return;
            }
            result1.dataUltimoAcesso = new Date();
            app.models.UsuarioProduto.upsert(result1, (err, result2) => {
                resultado.usuarioProdutoId = result1.id;
                resultado.versaoAppId = chaveVersaoApp;
                resultado.dataHora = new Date();
                Visitaapp.create(resultado, callback);
            })

        })
    };
  



    /**
     *
     * @param {string} chaveUsuario
     * @param {string} chavePagina
     * @param {Function(Error, object)} callback
     */
    Visitaapp.RegistraVisitaTelaApp = function (chaveUsuario, chavePagina, idVersaoApp, callback) {
        console.log('chaveUsuario:' , chaveUsuario , ' idVersaoApp:' , idVersaoApp, ' chavePagina:' , chavePagina);
        app.models.VisitaAppLog.upsert(
            {
                'dataHora' : new Date(),
                'chaveUsuario' : chaveUsuario,
                'versaoApp' : idVersaoApp,
                'chavePagina' : chavePagina,
                'tipo' : 'Tela'
            }
        )

        var resultado = new Object();
        app.models.UsuarioProduto.findOne({ 'where': { 'chave': chaveUsuario } }, (err1, result1) => {
            if (err1) {
                callback(err1, null);
                return;
            }
            if (!result1) {
                callback('usuario não encontrado - chave: ' + chaveUsuario, null);
                app.models.ErroLogicoLog.upsert(
                        { 
                        'descricao' : 'usuario não encontrado - chave: ' + chaveUsuario, 
                        'dataHora' : new Date() ,
                        'local' : 'Visitaapp.RegistraVisitaTelaApp'
                        });
                return;
            }
            resultado.usuarioProdutoId = result1.id;
            result1.dataUltimoAcesso = new Date();
            //console.log('Objeto: ' , JSON.stringify(result1));
            app.models.UsuarioProduto.upsert(result1, (err, result) => {
                app.models.TelaApp.findOne({ 'where': { 'chave': chavePagina } }, (err2, result2) => {
                    if (err2) {
                        callback(err2, null);
                        return;
                    }
                    if (!result2) {
                        app.models.ErroLogicoLog.upsert(
                            { 
                            'descricao' : 'pagina não encontrada - chave: ' + chavePagina, 
                            'dataHora' : new Date() ,
                            'local' : 'Visitaapp.RegistraVisitaTelaApp'
                            });
    
                        callback('pagina não encontrada - chave: ' + chavePagina, null);
                        return;
                    }
                    resultado.telaAppId = result2.id;
                    resultado.dataHora = new Date();
                    if (idVersaoApp) {
                        resultado.versaoAppId = idVersaoApp;
                    }
                    Visitaapp.create(resultado, callback);
                })
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
        console.log('chaveUsuario:' , chaveUsuario , ' chaveVersaoApp:' , chaveVersaoApp);
        app.models.VisitaAppLog.upsert(
            {
                'dataHora' : new Date(),
                'chaveUsuario' : chaveUsuario,
                'versaoApp' : chaveVersaoApp,
                'tipo' : 'Versao'
            }
        )
        var resultado = new Object();
        app.models.UsuarioProduto.findOne({ 'where': { 'chave': chaveUsuario } }, (err1, result1) => {
            if (err1) {
                callback(err1, null);
                return;
            }
            if (!result1) {
                callback('usuario não encontrado - chave: ' + chaveUsuario, null);
                return;
            }
            result1.dataUltimoAcesso = new Date();
            app.models.UsuarioProduto.upsert(result1, (err, result2) => {
                resultado.usuarioProdutoId = result1.id;
                resultado.versaoAppId = chaveVersaoApp;
                resultado.dataHora = new Date();
                Visitaapp.create(resultado, callback);
            })

        })
    };

};
