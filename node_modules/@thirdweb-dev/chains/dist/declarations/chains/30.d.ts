declare const _default: {
    readonly name: "RSK Mainnet";
    readonly chain: "RSK";
    readonly rpc: readonly ["https://rsk.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://public-node.rsk.co", "https://mycrypto.rsk.co"];
    readonly faucets: readonly ["https://faucet.rsk.co/"];
    readonly nativeCurrency: {
        readonly name: "Smart Bitcoin";
        readonly symbol: "RBTC";
        readonly decimals: 18;
    };
    readonly infoURL: "https://rsk.co";
    readonly shortName: "rsk";
    readonly chainId: 30;
    readonly networkId: 30;
    readonly slip44: 137;
    readonly explorers: readonly [{
        readonly name: "RSK Explorer";
        readonly url: "https://explorer.rsk.co";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "rsk";
};
export default _default;
//# sourceMappingURL=30.d.ts.map