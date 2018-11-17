'use strict';

module.exports = function (Palavrachaveestatistica) {



    /**
     * Lista de melhores casos com valores limites definidos no servidor
     * @param {number} idPalavraChaveRaiz 
     * @param {Function(Error, array)} callback
     */

    Palavrachaveestatistica.ListaMelhoresPadrao = function (idPalavraChaveRaiz, callback) {
        Palavrachaveestatistica.ListaMelhores(5000,0.9,idPalavraChaveRaiz,callback);
    };



    /**
     * os melhores atualmente com mais volume e menos custo
     * @param {number} limiteVolume 
     * @param {number} limiteCpc valor maximo de cpc
     * @param {Function(Error, string)} callback
     */

    Palavrachaveestatistica.ListaMelhores = function (limiteVolume, limiteCpc, idPalavraRaiz, callback) {
        if (!idPalavraRaiz) {
            Palavrachaveestatistica.find({
                "where": {
                    and:
                        [
                            { "volumePesquisa": { "gt": limiteVolume } },
                            { "mediaCpc": { "lt": limiteCpc } },
                            { "maisRecente": 1 }
                        ]
                },
                "include": "palavraChaveRaiz",
                "order": "indiceCompeticao"
            },callback);
        } else {
            Palavrachaveestatistica.find({
                "where": {
                    and:
                        [
                            { "volumePesquisa": { "gt": limiteVolume } },
                            { "mediaCpc": { "lt": limiteCpc } },
                            { "maisRecente": 1 },
                            { "palavraChaveRaizId": idPalavraRaiz }
                        ]
                },
                "include": "palavraChaveRaiz",
                "order": "indiceCompeticao"
            }, callback);
        }
    };



    function trataItem(ds, item) {
        //console.log('Tratando item: ' + JSON.stringify(item));
        //console.log('item.palavraChaveGoogleId:', item.palavraChaveGoogleId);
        var sql = "select PalavraChaveGoogle.* " +
            " from PalavraChaveGoogle " +
            " where palavra = '" + item.palavraChaveGoogleId + "' limit 1";
        ds.connector.query(sql, (err, result) => {
            //console.log('Result:', result);
            //console.log('Erro:', err);
            if (result.length == 0) {
                //console.log('Esta vazio');
                sql = "insert into PalavraChaveGoogle (palavra) values ('" + item.palavraChaveGoogleId + "')";
                ds.connector.query(sql, (err, result) => { })
            }
            sql = "update PalavraChaveEstatistica set maisRecente = 0  " + 
            " where palavraChaveGoogleId = '" + item.palavraChaveGoogleId + "' " +
            " and palavraChaveRaizId = " + item.palavraChaveRaizId;
            ds.connector.query(sql, (err, result) => {
                //console.log('Result(update):', result);
                //console.log('Erro(update):', err);
                sql = "insert into PalavraChaveEstatistica " +
                    " (dataConsulta, mediaCpc, volumePesquisa, indiceCompeticao, palavraChaveRaizId, palavraChaveGoogleId, maisRecente) " +
                    " values ('" + item.dataConsulta + "' , " + item.mediaCpc + " , " + item.volumePesquisa + " , " +
                    item.indiceCompeticao + " , " + item.palavraChaveRaizId + " , '" + item.palavraChaveGoogleId + "' , 1 )";
                ds.connector.query(sql, (err, result) => {
                    //console.log('Result insert:', result);
                    //console.log('Erro insert:', err);
                })
            })
        });
    }


    /**
     * Insere uma lista de itens coletados
     * @param {array} listaResultados
     * @param {Function(Error)} callback
     */

    Palavrachaveestatistica.InsereLista = function (listaResultados, callback) {
        var ds = Palavrachaveestatistica.dataSource;
        listaResultados.map((item) => {
            trataItem(ds, item);
        })
        callback(null);
    };

    Palavrachaveestatistica.InsereListaTeste = function (listaResultados, callback) {
        console.log('Recebeu lista com ', listaResultados.length);
        callback(null);
    };




};
