'use strict';

var app = require('../../server/server');

module.exports = function (Aplicacao) {



    /**
    * Obtem a aplicacao do conceito
    * @param {number} idConceito 
    * @param {Function(Error, object)} callback
    */

    Aplicacao.ObtemPorIdConceito = function(idConceito, callback) {
        var ds = Aplicacao.dataSource;
        var sql = "select aplicacao.* "
        var sql =   " select aplicacao.* from aplicacao " +
                    " inner join ConceitoProduto on ConceitoProduto.projetoMySqlId = aplicacao.projetoMySqlId " +
                    " where ConceitoProduto.id = " + idConceito;
        ds.connector.query(sql,(err,result) => {
            if (result.length!=1) {
                callback('Retornou diferente de um' , null);
            } else {
                callback(null,result[0]);
            }
        })
    };



    /**
     * Combina tipo componente com entidades para gerar os componentes web
     * @param {number} idAplicacao 
     * @param {Function(Error)} callback
     */

    Aplicacao.AtualizaComponenteWeb = function (idAplicacao, callback) {
        console.log('idAplicacao: ', idAplicacao);

        app.models.TipoComponenteWeb.find((err, listaComponente) => {
            console.log('Erro1:' , err);
            console.log('ListaComponente: ' , listaComponente.length , ' itens');
            listaComponente.map((tipoComponente) => {
                app.models.entidade.find({ "where": { "id_aplicacao": idAplicacao } }, (err, listaEntidade) => {
                    console.log('Erro2:' , err);
                    console.log('ListaEntidade: ' , listaEntidade.length , ' itens');
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
            console.log('result: ' , resultado);
            if (resultado.length==0) {
                let nova = { 
                    "entidadeId" : entidade.id , 
                    "tipoComponenteWebId" : tipoComponente.id , 
                    "nome" : entidade.nome + tipoComponente.nome ,
                    "aplicacaoId" : entidade.id_aplicacao };
                app.models.ComponenteWeb.create(nova, (erro, resultado) => {
                    console.log('Erro-insert: ' , erro);                   
                })
            }
        });
    }

   

};
