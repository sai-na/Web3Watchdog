declare const _default: {
    readonly name: "Godwoken Testnet v1";
    readonly chain: "GWT";
    readonly rpc: readonly ["https://godwoken-testnet-v1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://godwoken-testnet-v1.ckbapp.dev", "https://v1.testnet.godwoken.io/rpc"];
    readonly faucets: readonly ["https://testnet.bridge.godwoken.io"];
    readonly nativeCurrency: {
        readonly name: "pCKB";
        readonly symbol: "pCKB";
        readonly decimals: 18;
    };
    readonly infoURL: "https://www.nervos.org";
    readonly shortName: "gw-testnet-v1";
    readonly chainId: 71401;
    readonly networkId: 71401;
    readonly explorers: readonly [{
        readonly name: "GWScout Explorer";
        readonly url: "https://gw-testnet-explorer.nervosdao.community";
        readonly standard: "none";
    }, {
        readonly name: "GWScan Block Explorer";
        readonly url: "https://v1.testnet.gwscan.com";
        readonly standard: "none";
    }];
    readonly testnet: true;
    readonly slug: "godwoken-testnet-v1";
};
export default _default;
//# sourceMappingURL=71401.d.ts.map