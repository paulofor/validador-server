'use strict';

module.exports = function (Cosmeticoportunidadedia) {


    /**
     * chamada pelos aplicativos
     * @param {Function(Error, array)} callback
     */

    Cosmeticoportunidadedia.ListaApp = function (callback) {
        //var lista = {[]};
        var saida = [{"precoVendaAtual": 0,
        "precoVendaAnterior": 0,
        "nomeProduto": "Trocar port",
        "nomeLojaVirtual": "-",
        "imagemProduto": "https://images-americanas.b2w.io/produtos/01/00/img7/253315/1/253315174G1.jpg",
        "dataUltimaPrecoAnterior": "1900-01-01T00:00:00.000Z",
        "percentualAjusteVenda": 0}]
        callback(null,saida);
    };


};
