declare const _default: {
    readonly name: "Europa SKALE Chain";
    readonly chain: "europa";
    readonly icon: {
        readonly url: "ipfs://bafkreiezcwowhm6xjrkt44cmiu6ml36rhrxx3amcg3cfkcntv2vgcvgbre";
        readonly width: 600;
        readonly height: 600;
        readonly format: "png";
    };
    readonly rpc: readonly ["https://europa-skale-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.skalenodes.com/v1/elated-tan-skat", "wss://mainnet.skalenodes.com/v1/elated-tan-skat"];
    readonly faucets: readonly ["https://ruby.exchange/faucet.html", "https://sfuel.mylilius.com/"];
    readonly nativeCurrency: {
        readonly name: "sFUEL";
        readonly symbol: "sFUEL";
        readonly decimals: 18;
    };
    readonly infoURL: "https://europahub.network/";
    readonly shortName: "europa";
    readonly chainId: 2046399126;
    readonly networkId: 2046399126;
    readonly explorers: readonly [{
        readonly name: "Blockscout";
        readonly url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com";
        readonly standard: "EIP3091";
    }];
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://ruby.exchange/bridge.html";
        }];
    };
    readonly testnet: false;
    readonly slug: "europa-skale-chain";
};
export default _default;
//# sourceMappingURL=2046399126.d.ts.map