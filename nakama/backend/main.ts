let InitModule: nkruntime.InitModule =
    function (ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, initializer: nkruntime.Initializer) {

        // initialize RPC
        initializer.registerRpc('healthcheck', rpcHealthCheck);
        initializer.registerRpc('updateWallet', rpcWalletUpdate);

        // log information
        logger.info("javascript module loaded");
    }