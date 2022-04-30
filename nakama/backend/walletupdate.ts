let rpcWalletUpdate = function (ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, payload: string) {

    logger.info('wallet rpc called');

    const data = JSON.parse(payload);
    const user_id: string = ctx.userId;

    let changeset = {
        token: data.token,
    }

    let metadata = {
        user: data.name,
        amount: data.token,
    };

    let result: nkruntime.WalletUpdateResult;

    try {
        result = nk.walletUpdate(user_id, changeset, metadata, true);
    } catch (error) {
        return JSON.stringify({ title: 'failed', data: error });
    }

    return JSON.stringify({ title: 'successful', data: changeset })
}