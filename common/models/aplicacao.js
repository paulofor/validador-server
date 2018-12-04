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
            console.log('Lista Tipo Componente: ', listaComponente);
            app.models.entidade.find({ "where": { "id_aplicacao": idAplicacao } }, (err, result) => {
                console.log('Erro(1): ', err);
                console.log('Lista Entidade: ', result);
                result.map((item) => {
                    trataItem(listaComponente, item);
                })
            })
        });
        callback(null);
    }

    function trataItem(listaComponente, item) {
        listaComponente.map((tipo) => {
            verifica(item, tipo);
        })
    }

    function verifica(item, tipo) {
        console.log('tipo: ', tipo, ' - item:' , item);
    }

};
