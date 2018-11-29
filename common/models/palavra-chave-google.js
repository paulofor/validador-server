'use strict';

var app = require('../../server/server');


module.exports = function(Palavrachavegoogle) {


/**
 * se receber um projeto com id 0 cria o projeto e o relacionamento senão cria somente o relacionamento
 * @param {object} relacionamentoComProjeto 
 * @param {Function(Error)} callback
 */

Palavrachavegoogle.InsereProjetoRelacionamento = function(relacionamentoComProjeto, callback) {
    if (relacionamentoComProjeto.projetoMySql.id==0) {
        app.models.ProjetoMySql.create(relacionamentoComProjeto.projetoMySql, (err, result) => {
            relacionamentoComProjeto.projetoMySqlId = result.id;
            Palavrachavegoogle.create(relacionamentoComProjeto, callback); 
        })
    } else {
        Palavrachavegoogle.create(relacionamentoComProjeto, callback); 
    }
  };
  


};
