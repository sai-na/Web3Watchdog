declare const _default: {
    readonly name: "Tomb Chain Mainnet";
    readonly chain: "Tomb Chain";
    readonly rpc: readonly ["https://tomb-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.tombchain.com/"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Tomb";
        readonly symbol: "TOMB";
        readonly decimals: 18;
    };
    readonly infoURL: "https://tombchain.com/";
    readonly shortName: "tombchain";
    readonly chainId: 6969;
    readonly networkId: 6969;
    readonly explorers: readonly [{
        readonly name: "tombscout";
        readonly url: "https://tombscout.com";
        readonly standard: "none";
    }];
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-250";
        readonly bridges: readonly [{
            readonly url: "https://lif3.com/bridge";
        }];
    };
    readonly testnet: false;
    readonly slug: "tomb-chain";
};
export default _default;
//# sourceMappingURL=6969.d.ts.map