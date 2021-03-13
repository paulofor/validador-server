'use strict';


var app = require('../../server/server');
module.exports = function (Versaotelaapp) {


    Versaotelaapp.CriaVersaoComMetrica = function (versaoTelaApp, callback) {
        //console.log(versaoTelaApp);
        Versaotelaapp.create(versaoTelaApp, (err, result) => {
            //console.log('err:' , err);
            //console.log('result:' , result);
            let versaoMetrica = { 'versaoTelaAppId': result.id, 'periodoMetricaId': 0 , 'quantidadeTotal' : 0 ,
                    'quantidadeSessao' : 0, 'quantidadeUsuario' : 0 };
            app.models.VersaoTelaAppMetrica.create(versaoMetrica, (err1, result1) => {
                callback(err1, result1);
            })
        })
    };

};
