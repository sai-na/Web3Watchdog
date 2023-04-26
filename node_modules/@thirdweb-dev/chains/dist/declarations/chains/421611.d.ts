declare const _default: {
    readonly name: "Arbitrum Rinkeby";
    readonly title: "Arbitrum Testnet Rinkeby";
    readonly chainId: 421611;
    readonly shortName: "arb-rinkeby";
    readonly chain: "ETH";
    readonly networkId: 421611;
    readonly nativeCurrency: {
        readonly name: "Arbitrum Rinkeby Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpc: readonly ["https://arbitrum-rinkeby.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rinkeby.arbitrum.io/rpc"];
    readonly faucets: readonly ["http://fauceth.komputing.org?chain=421611&address=${ADDRESS}"];
    readonly infoURL: "https://arbitrum.io";
    readonly explorers: readonly [{
        readonly name: "arbiscan-testnet";
        readonly url: "https://testnet.arbiscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "arbitrum-rinkeby";
        readonly url: "https://rinkeby-explorer.arbitrum.io";
        readonly standard: "EIP3091";
    }];
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-4";
        readonly bridges: readonly [{
            readonly url: "https://bridge.arbitrum.io";
        }];
    };
    readonly testnet: true;
    readonly slug: "arbitrum-rinkeby";
};
export default _default;
//# sourceMappingURL=421611.d.ts.map