declare const _default: {
    readonly name: "Celo Mainnet";
    readonly chainId: 42220;
    readonly shortName: "celo";
    readonly chain: "CELO";
    readonly networkId: 42220;
    readonly nativeCurrency: {
        readonly name: "CELO";
        readonly symbol: "CELO";
        readonly decimals: 18;
    };
    readonly rpc: readonly ["https://celo.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://forno.celo.org", "wss://forno.celo.org/ws"];
    readonly faucets: readonly ["https://free-online-app.com/faucet-for-eth-evm-chains/"];
    readonly infoURL: "https://docs.celo.org/";
    readonly explorers: readonly [{
        readonly name: "Celoscan";
        readonly url: "https://celoscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout";
        readonly url: "https://explorer.celo.org";
        readonly standard: "none";
    }];
    readonly testnet: false;
    readonly slug: "celo";
};
export default _default;
//# sourceMappingURL=42220.d.ts.map