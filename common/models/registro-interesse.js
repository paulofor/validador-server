'use strict';

module.exports = function(Registrointeresse) {


    Registrointeresse.observe('before save', function updateTimestamp(ctx, next) {
        if (ctx.instance) {
            ctx.instance.dataHora = new Date();
        } else {
            ctx.data.dataHora = new Date();
        }
        next();
    });
};
