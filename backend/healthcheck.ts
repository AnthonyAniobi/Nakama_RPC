let rpcHealthCheck = function (ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, payload: string) {

    logger.info('healthcheck rpc called');

    return JSON.stringify({ success: true })
}