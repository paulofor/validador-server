'use strict';

var app = require('../../server/server');

module.exports = function (Aplicacao) {


    /**
     * Combina tipo componente com entidades para gerar os componentes web
     * @param {number} idAplicacao 
     * @param {Function(Error)} callback
     */

    Aplicacao.AtualizaComponenteWeb = function (idAplicacao, callback) {
        console.log('idAplicacao: ', idAplicacao);

        app.models.TipoComponenteWeb.find((err, listaComponente) => {
            listaComponente.map((tipoComponente) => {
                app.models.entidade.find({ "where": { "id_aplicacao": idAplicacao } }, (err, listaEntidade) => {
                    listaEntidade.map((entidade) => {
                        trataItem(entidade, tipoComponente);
                    })
                })
            })
        });
        callback(null);
    }

    function trataItem(entidade, tipoComponente) {
        let filtro = {"where": { "and" : [ {"entidadeId" : entidade.id } , {"tipoComponenteWebId" : tipoComponente.id} ] }};
        app.models.ComponenteWeb.find(filtro, (erro, resultado) => {
            if (!resultado) {
                // Inserir
                let nova = { "entidadeId" : entidade.id , "tipoComponenteWebId" : tipoComponente.id , "nome" : "teste" };
                app.models.ComponenteWeb.create(nova, (erro, resultado) => {
                    
                })
            }
        });
    }

   

};
