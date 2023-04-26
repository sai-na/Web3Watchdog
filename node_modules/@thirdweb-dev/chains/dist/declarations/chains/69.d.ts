declare const _default: {
    readonly name: "Optimism Kovan";
    readonly title: "Optimism Testnet Kovan";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://optimism-kovan.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://kovan.optimism.io/"];
    readonly faucets: readonly ["http://fauceth.komputing.org?chain=69&address=${ADDRESS}"];
    readonly nativeCurrency: {
        readonly name: "Kovan Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://kovan-optimistic.etherscan.io";
        readonly standard: "EIP3091";
    }];
    readonly infoURL: "https://optimism.io";
    readonly shortName: "okov";
    readonly chainId: 69;
    readonly networkId: 69;
    readonly testnet: true;
    readonly slug: "optimism-kovan";
};
export default _default;
//# sourceMappingURL=69.d.ts.map