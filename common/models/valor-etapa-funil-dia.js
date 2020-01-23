'use strict';

module.exports = function (Valoretapafunildia) {


    /**
    *
    * @param {number} idProjeto
    * @param {number} ano
    * @param {Function(Error, object)} callback
    */

    Valoretapafunildia.CriaEtapa = function (idProjeto, ano, callback) {
        var resultado;
        var final = new Date(ano, 11, 31);
        for (var d = new Date(ano, 0, 1); d <= final; d.setDate(d.getDate() + 1)) {
            let numMes = d.getMonth() + 1;
            var item = { 'dia': new Date(d), 'projetoMySqlId': idProjeto, 'numAno': ano, 'numMes': numMes };
            Valoretapafunildia.create(item, (err, result) => {
                if (err)
                    console.log('Valoretapafunildia.CriaEtapa-err:', JSON.stringify(err));

            })
        }
        callback(null, resultado);
    };
};
