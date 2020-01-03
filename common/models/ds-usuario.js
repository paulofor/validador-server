'use strict';

module.exports = function(Dsusuario) {



 /**
 * Cria registros para um ano e uma aplicação
 * @param {number} idAplicacao 
 * @param {number} ano Ano com quatro dígitos
 * @param {Function(Error, object)} callback
 */

Dsusuario.CriaDiaAnoAplicacao = function(idProjeto, ano, callback) {
    var resultado;
    var final = new Date(ano,11,31);
    for (var d = new Date(ano, 0, 1); d <= final; d.setDate(d.getDate() + 1)) {
        console.log(new Date(d));
        var item = {'dia' : new Date(d) , 'projetoMySqlId' : idProjeto};
        Dsusuario.upsert(item, (err,result) => {
          if (err)
            console.log('err:' , JSON.stringify(err));
          if(result)
            console.log('result:' , JSON.stringify(result));
        })
    }
    callback(null, resultado);
  };
  
  
};
