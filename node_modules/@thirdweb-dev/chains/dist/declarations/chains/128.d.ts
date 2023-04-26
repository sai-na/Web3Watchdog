declare const _default: {
    readonly name: "Huobi ECO Chain Mainnet";
    readonly chain: "Heco";
    readonly rpc: readonly ["https://huobi-eco-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://http-mainnet.hecochain.com", "wss://ws-mainnet.hecochain.com"];
    readonly faucets: readonly ["https://free-online-app.com/faucet-for-eth-evm-chains/"];
    readonly nativeCurrency: {
        readonly name: "Huobi ECO Chain Native Token";
        readonly symbol: "HT";
        readonly decimals: 18;
    };
    readonly infoURL: "https://www.hecochain.com";
    readonly shortName: "heco";
    readonly chainId: 128;
    readonly networkId: 128;
    readonly slip44: 1010;
    readonly explorers: readonly [{
        readonly name: "hecoinfo";
        readonly url: "https://hecoinfo.com";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "huobi-eco-chain";
};
export default _default;
//# sourceMappingURL=128.d.ts.map