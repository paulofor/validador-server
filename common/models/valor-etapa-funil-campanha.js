'use strict';

var app = require('../../server/server');


module.exports = function(Valoretapafunilcampanha) {


    /**
 *
 * @param {number} idCampanha
 * @param {Function(Error, object)} callback
 */

Valoretapafunilcampanha.CriaEtapa = function(idCampanha, callback) {
    app.models.EtapaCliente.find((err,result) => {
      //console.log('Result: ' , console.log(result));
      result.forEach((item) => {
        console.log('Item: ' , JSON.stringify(item));
        let valor = {'campanhaAdsId' : idCampanha, 'etapaClienteId' : item.id };
        console.log(valor);
        Valoretapafunilcampanha.create(valor, (err,result) => {
          console.log('Erro: ' , JSON.stringify(err));;
        });
      })
    })
    var saida;
    callback(null, saida);
  };
};
