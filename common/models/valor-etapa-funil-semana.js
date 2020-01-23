'use strict';

var app = require('../../server/server');

module.exports = function (Valoretapafunilsemana) {



    /**
    *
    * @param {number} idCampanha
    * @param {Function(Error, object)} callback
    */
    Valoretapafunilsemana.CriaEtapa = function (idProjeto, ano, callback) {
        let filtro = {'where' : {'ano': ano }};
        app.models.Semana.find(filtro, (err, result) => {
            //console.log('Result: ' , console.log(result));
            result.forEach((item) => {
                console.log('Item: ', JSON.stringify(item));
                let valor = { 'projetoMySqlId': idProjeto, 'semanaId': item.id };
                console.log(valor);
                Valoretapafunilsemana.create(valor, (err, result) => {
                    console.log('Erro: ', JSON.stringify(err));;
                });
            })
        })
        var saida;
        callback(null, saida);
    };


};
