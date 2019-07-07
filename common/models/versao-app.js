'use strict';

module.exports = function(Versaoapp) {



    Versaoapp.observe('before save', function updateTimestamp(ctx, next) {
        if (ctx.instance) {
            ctx.instance.dataCriacao = new Date();
        } else {
            ctx.data.dataCriacao = new Date();
        }
        next();
    });
    

};
