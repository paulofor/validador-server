'use strict';

module.exports = function (Itemvalidacaopagina) {



    /**
         * retorna o nome de imagem para o proximo registro
         * @param {number} idCliente Id do Cliente
         * @param {Function(Error, string)} callback
         */

    Itemvalidacaopagina.proximoNomeImagem = function (callback) {

        var ds = Itemvalidacaopagina.dataSource;
        var sql = "SELECT (max(id) + 1) as novoId FROM ItemValidacaoPagina";
        var nomeImagem = '';
        ds.connector.query(sql, function (err, result) {
            //console.log(result);
            if (err) console.error(err);
            else nomeImagem = 'img' + result[0].novoId + '.jpg';
            callback(err, nomeImagem);

        });

    };


    /**
    * teste
    * @param {number} idProjeto muito bom
    * @param {Function(Error, array)} callback
    */

    Itemvalidacaopagina.disponiveisPorProjeto = function (idProjeto,  callback) {
        var listaItens = [];
        var ds = Itemvalidacaopagina.dataSource;
       

        var sqlNova = "SELECT ItemValidacaoPagina.* FROM ItemValidacaoPagina " +
        " where ItemValidacaoPagina.paginaValidacaoWebId is null " +
        " and ItemValidacaoPagina.projetoMySqlId = " + idProjeto; 
        ds.connector.query(sqlNova, function (err, result) {
            //console.log(JSON.stringify(result));
            if (err) console.error(err);
            else listaItens = result;
            callback(err, listaItens);
        });
    };

};


