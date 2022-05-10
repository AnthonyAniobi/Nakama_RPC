let rpcWalletHistory = function (ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, payload: string) {

    logger.info('wallet history rpc called');

    let userId = ctx.userId;

    let data = JSON.parse(payload);

    const limit: number | undefined = data.limit;

    try {
        const results = nk.walletLedgerList(userId, limit);
        return JSON.stringify({ title: 'successful', data: results });
    } catch (error) {
        return JSON.stringify({ title: 'failed', data: error });
    }
}