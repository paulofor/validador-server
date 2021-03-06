'use strict';

var app = require('../../server/server');

module.exports = function (Campanhapalavrachaveresultado) {



    /**
     *
     * @param {string} palavra
     * @param {number} idProjeto
     * @param {Function(Error, array)} callback
     */

    Campanhapalavrachaveresultado.ListaComResultadoPorPalavraIdProjeto = function (palavra, idProjeto, callback) {
        /*
        Não rolou

        { "where" : 
        { "and" : 
        [ 
        {"palavraChaveGoogleId" : "treino"}  , 
        {"relation" : "campanhaAds" , "scope" : {"where" : {"dataResultado" :  null} } }
        ] 
        } 
        }
        */
        //console.log('ListaComResultadoPorPalavraIdProjeto (palavra) : ' , palavra);
        //console.log('ListaComResultadoPorPalavraIdProjeto (idProjeto) : ' , idProjeto);
        var sql = "select CampanhaPalavraChaveResultado.* from CampanhaPalavraChaveResultado " +
            " inner join CampanhaAds on CampanhaAds.id = CampanhaPalavraChaveResultado.campanhaAdsId " +
            " inner join PaginaValidacaoWeb on PaginaValidacaoWeb.id = CampanhaAds.paginaValidacaoWebId " +
            " where palavraChaveGoogleId = '" + palavra + "'" +
            " and CampanhaAds.dataResultado is not null " +
            " and PaginaValidacaoWeb.projetoMySqlId = " + idProjeto;
        var ds = Campanhapalavrachaveresultado.dataSource;
        ds.connector.query(sql, callback);
    };


    /**
   * Recria todos os relacionamentos com palavras-chaves.
   * @param {number} idCampanha 
   * @param {Function(Error, number)} callback
   */
    Campanhapalavrachaveresultado.CriaRelacionamentoPorIdCampanha = function (idCampanha, callback) {
        var qtde;
        var campanha;
        var sqlDelete = "delete from CampanhaPalavraChaveResultado where campanhaAdsId = " + idCampanha;
        var ds = Campanhapalavrachaveresultado.dataSource;
        app.models.CampanhaAds.findById(idCampanha, (err, result) => {
            console.log('Pegou campanha: ' , result);
            if (err) {
                callback(err, 0);
                return;
            }
            campanha = result;
            if (campanha.permiteEditar == 1) {
                callback('Campanha fechada', 0);
                return;
            }
            ds.connector.query(sqlDelete, (err, result) => {
                console.log('Apagou anteriores')
                if (err) {
                    callback(err, 0);
                    return;
                };
                app.models.PalavraChaveGoogle.ListaDisponivelParaCampanha(campanha.id, (err, result) => {
                    console.log('Lista palavras: ' , JSON.stringify(result));
                    if (err) {
                        callback(err, 0);
                        return;
                    }
                    for (var item of result) {
                        console.log('item:', item.palavra);
                        var campanhaPalavraChave = {
                            "palavraChaveGoogleId": item.palavra,
                            "campanhaAdsId": campanha.id
                        };
                        Campanhapalavrachaveresultado.create(campanhaPalavraChave, (err, result) => {

                        })
                    }
                    callback(null, result.lenght);
                })
            })

        })
    };

};
