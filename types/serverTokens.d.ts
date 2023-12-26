export type ServerToken = {
    remark: string;
    token: string;
    nextServerInProxyChain?: string;
    checkConnectionUrl?: string;
}

export type ServerTokenList = ServerToken[];