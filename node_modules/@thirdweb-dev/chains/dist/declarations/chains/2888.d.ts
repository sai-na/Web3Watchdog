declare const _default: {
    readonly name: "Boba Network Goerli Testnet";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://boba-network-goerli-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.boba.network/"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://boba.network";
    readonly shortName: "Bobagoerli";
    readonly chainId: 2888;
    readonly networkId: 2888;
    readonly explorers: readonly [{
        readonly name: "Blockscout";
        readonly url: "https://testnet.bobascan.com";
        readonly standard: "none";
    }];
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-5";
        readonly bridges: readonly [{
            readonly url: "https://gateway.goerli.boba.network";
        }];
    };
    readonly testnet: true;
    readonly slug: "boba-network-goerli-testnet";
};
export default _default;
//# sourceMappingURL=2888.d.ts.map