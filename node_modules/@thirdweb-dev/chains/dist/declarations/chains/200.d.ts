declare const _default: {
    readonly name: "Arbitrum on xDai";
    readonly chain: "AOX";
    readonly rpc: readonly ["https://arbitrum-on-xdai.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arbitrum.xdaichain.com/"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "xDAI";
        readonly symbol: "xDAI";
        readonly decimals: 18;
    };
    readonly infoURL: "https://xdaichain.com";
    readonly shortName: "aox";
    readonly chainId: 200;
    readonly networkId: 200;
    readonly explorers: readonly [{
        readonly name: "blockscout";
        readonly url: "https://blockscout.com/xdai/arbitrum";
        readonly standard: "EIP3091";
    }];
    readonly parent: {
        readonly chain: "eip155-100";
        readonly type: "L2";
    };
    readonly testnet: false;
    readonly slug: "arbitrum-on-xdai";
};
export default _default;
//# sourceMappingURL=200.d.ts.map