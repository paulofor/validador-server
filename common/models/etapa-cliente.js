'use strict';

module.exports = function (Etapacliente) {


    /**
    *
    * @param {object} etapaCliente
    * @param {Function(Error, object)} callback
    */
    Etapacliente.CriaPosicionada = function (etapaCliente, callback) {
        //console.log('EtapaCliente: ' , JSON.stringify(etapaCliente));
        var resultado;
        var filtro = {"where" : { "funilNegocioId" : etapaCliente.funilNegocioId } , "order" : "posicao desc"  }
        Etapacliente.findOne(filtro, (err,result) => {
            let maior = result;
            if (maior) {
                etapaCliente.posicao = maior.posicao + 1;
            } else {
                etapaCliente.posicao = 1;
            }
            Etapacliente.create(etapaCliente, callback);
        })
    };

    /**
    *
    * @param {number} idEtapa
    * @param {number} sentido +1 aumenta posicao, -1 diminui posicao
    * @param {Function(Error, object)} callback
    */
    Etapacliente.DeslocaPosicao = function (idEtapa, sentido, callback) {
        Etapacliente.findById(idEtapa, (err,result) => {
            let posAtual = result.posicao
            if (sentido>0) {
                var filtro ={"where" : {"and" : [{"funilNegocioId" :result.funilNegocioId },{"posicao" : result.posicao + 1}] } };
                Etapacliente.findOne(filtro, (err,proximo) => {
                    proximo.posicao--;
                    result.posicao++;
                    Etapacliente.upsert(result, (err,retorno) => {
                        Etapacliente.upsert(proximo, callback);
                    })
                })
            }
            if (sentido<0) {
                var filtro ={"where" : {"and" : [{"funilNegocioId" :result.funilNegocioId },{"posicao" : result.posicao - 1}] } };
                Etapacliente.findOne(filtro, (err,proximo) => {
                    proximo.posicao++;
                    result.posicao--;
                    Etapacliente.upsert(result, (err,retorno) => {
                        Etapacliente.upsert(proximo, callback);
                    })
                })
            }
        })
    };
};
