"use strict";
var InitModule = function (ctx, logger, nk, initializer) {
    // initialize RPC
    initializer.registerRpc('healthcheck', rpcHealthCheck);
    initializer.registerRpc('updateWallet', rpcWalletUpdate);
    // log information
    logger.info("javascript module loaded");
};
var rpcHealthCheck = function (ctx, logger, nk, payload) {
    logger.info('healthcheck rpc called');
    return JSON.stringify({ success: true });
};
var rpcWalletUpdate = function (ctx, logger, nk, payload) {
    logger.info('wallet rpc called');
    var data = JSON.parse(payload);
    var user_id = ctx.userId;
    var changeset = {
        token: data.token,
    };
    var metadata = {
        user: data.name,
        amount: data.token,
    };
    var result;
    try {
        result = nk.walletUpdate(user_id, changeset, metadata, true);
    }
    catch (error) {
        return JSON.stringify({ title: 'failed', data: error });
    }
    return JSON.stringify({ title: 'successful', data: changeset });
};
