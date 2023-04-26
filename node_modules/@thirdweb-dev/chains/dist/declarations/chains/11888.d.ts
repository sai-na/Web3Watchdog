declare const _default: {
    readonly name: "SanR Chain";
    readonly chain: "SanRChain";
    readonly rpc: readonly ["https://sanr-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sanrchain-node.santiment.net"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "nSAN";
        readonly symbol: "nSAN";
        readonly decimals: 18;
    };
    readonly infoURL: "https://sanr.app";
    readonly shortName: "SAN";
    readonly chainId: 11888;
    readonly networkId: 11888;
    readonly icon: {
        readonly url: "ipfs://QmPLMg5mYD8XRknvYbDkD2x7FXxYan7MPTeUWZC2CihwDM";
        readonly width: 2048;
        readonly height: 2048;
        readonly format: "png";
    };
    readonly parent: {
        readonly chain: "eip155-1";
        readonly type: "L2";
        readonly bridges: readonly [{
            readonly url: "https://sanr.app";
        }];
    };
    readonly explorers: readonly [{
        readonly name: "SanR Chain Explorer";
        readonly url: "https://sanrchain-explorer.santiment.net";
        readonly standard: "none";
    }];
    readonly testnet: false;
    readonly slug: "sanr-chain";
};
export default _default;
//# sourceMappingURL=11888.d.ts.map