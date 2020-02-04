'use strict';

var async = require('async');

module.exports = function (Semana) {



    /**
     * Obtem a semana da data de entrada
     * @param {date} data 
     * @param {Function(Error, object)} callback
     */

    Semana.ObtemPorData = function (data, callback) {
        var dia = (data.getDate()>10?data.getDate():"0" + data.getDate());
        var mes = ((data.getMonth()+1)>10?data.getMonth()+1:"0" + (data.getMonth()+1));
        var dataPesquisa = data.getFullYear() + "-" + mes + "-" + dia;
        //console.log('DataPesquisa:' , dataPesquisa);
        var filtro = {
            "where": {
                "and": [
                    { "primeiroDia": { "lte": dataPesquisa } },
                    { "ultimoDia": { "gte": dataPesquisa } }
                ]
            }
        };
        //console.log('Filtro: ' , filtro);
        Semana.findOne(filtro, callback);
    };


    /**
    *
    * @param {number} semanas Quantidade de semanas pode ser positiva ou negativa
    * @param {Function(Error, object)} callback
    */

    Semana.ObtemDeslocada = function (semanas, callback) {
        var dataRef = new Date();
        dataRef = new Date(dataRef.setTime(dataRef.getTime() + (semanas * 7) * 86400000));
        Semana.ObtemPorData(dataRef,callback);
    };


    /**
    * Cria todas as semanas de um ano
    * @param {number} ano
    * @param {Function(Error)} callback
    */
    Semana.CriaParaAno = function (ano, callback) {
        var data = new Date(ano, 0, 1, 3, 0, 0, 0);
        var ind = 0;
        //console.log('anos: ', ano, " - ", data);
        while (data.getUTCFullYear() == ano) {
            while (data.getUTCDay() != 1) {
                data.setDate(data.getDate() + 1);
            }
            if (data.getUTCFullYear() == ano) {
                ind++;
                //console.log("Segunda:" + data);
                var data2 = new Date(data);
                data2.setDate(data.getDate() + 6);
                var semana = new Semana({ "seqAno": ind, "primeiroDia": data, "ultimoDia": data2, "ano": data.getUTCFullYear(), "mes": data.getUTCMonth() + 1 });
                //console.log('Semana: ', JSON.stringify(semana));
                Semana.create(semana);
                data.setDate(data.getDate() + 1);
            }
        }
        callback(null);
    };
};
