declare const _default: {
    readonly name: "QuarkChain Mainnet Shard 1";
    readonly chain: "QuarkChain";
    readonly rpc: readonly ["https://quarkchain-shard-1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-s1-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39001"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "QKC";
        readonly symbol: "QKC";
        readonly decimals: 18;
    };
    readonly infoURL: "https://www.quarkchain.io";
    readonly shortName: "qkc-s1";
    readonly chainId: 100002;
    readonly networkId: 100002;
    readonly parent: {
        readonly chain: "eip155-100000";
        readonly type: "shard";
    };
    readonly explorers: readonly [{
        readonly name: "quarkchain-mainnet";
        readonly url: "https://mainnet.quarkchain.io/1";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "quarkchain-shard-1";
};
export default _default;
//# sourceMappingURL=100002.d.ts.map