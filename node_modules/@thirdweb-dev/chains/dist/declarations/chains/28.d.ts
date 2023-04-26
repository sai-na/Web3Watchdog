declare const _default: {
    readonly name: "Boba Network Rinkeby Testnet";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://boba-network-rinkeby-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rinkeby.boba.network/"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://boba.network";
    readonly shortName: "BobaRinkeby";
    readonly chainId: 28;
    readonly networkId: 28;
    readonly explorers: readonly [{
        readonly name: "Blockscout";
        readonly url: "https://blockexplorer.rinkeby.boba.network";
        readonly standard: "none";
    }];
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-4";
        readonly bridges: readonly [{
            readonly url: "https://gateway.rinkeby.boba.network";
        }];
    };
    readonly testnet: true;
    readonly slug: "boba-network-rinkeby-testnet";
};
export default _default;
//# sourceMappingURL=28.d.ts.map