'use strict';

module.exports = function(Palavragoogleprojeto) {


/**
 * se receber um projeto com id 0 cria o projeto e o relacionamento senão cria somente o relacionamento
 * @param {object} relacionamentoComProjeto 
 * @param {Function(Error)} callback
 */

Palavragoogleprojeto.InsereProjetoRelacionamento = function(relacionamentoComProjeto, projeto, callback) {
    console.log('Relacionamento:' , relacionamentoComProjeto);
    console.log('Projeto:' , projeto);
    if (projeto.id==0) {
        app.models.ProjetoMySql.create(projeto, (err, result) => {
            relacionamentoComProjeto.projetoMySqlId = result.id;
            Palavragoogleprojeto.create(relacionamentoComProjeto, callback); 
        })
    } else {
        relacionamentoComProjeto.projetoMySqlId = projeto.id;
        Palavragoogleprojeto.create(relacionamentoComProjeto, callback); 
    }
  };

};
