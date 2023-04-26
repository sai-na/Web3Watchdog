declare const _default: {
    readonly name: "Boba Network";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://boba-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.boba.network/"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://boba.network";
    readonly shortName: "Boba";
    readonly chainId: 288;
    readonly networkId: 288;
    readonly explorers: readonly [{
        readonly name: "Bobascan";
        readonly url: "https://bobascan.com";
        readonly standard: "none";
    }, {
        readonly name: "Blockscout";
        readonly url: "https://blockexplorer.boba.network";
        readonly standard: "none";
    }];
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://gateway.boba.network";
        }];
    };
    readonly testnet: false;
    readonly slug: "boba-network";
};
export default _default;
//# sourceMappingURL=288.d.ts.map