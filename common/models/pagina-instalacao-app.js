'use strict';

const crypto = require('crypto');

module.exports = function(Paginainstalacaoapp) {


    Paginainstalacaoapp.observe('before save', function updateHash(ctx, next) {
        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        var codigoCookie = crypto.createHash('sha1').update(current_date + random).digest('hex');
        if (ctx.isNewInstance) {
            if (ctx.instance) {
                ctx.instance.codigoHash = codigoCookie;
            } else {
                ctx.data.codigoHash = codigoCookie;
            }
        }
        next();
    });
};
