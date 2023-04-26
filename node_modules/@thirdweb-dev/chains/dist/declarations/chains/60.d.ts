declare const _default: {
    readonly name: "GoChain";
    readonly chain: "GO";
    readonly rpc: readonly ["https://gochain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.gochain.io"];
    readonly faucets: readonly ["https://free-online-app.com/faucet-for-eth-evm-chains/"];
    readonly nativeCurrency: {
        readonly name: "GoChain Ether";
        readonly symbol: "GO";
        readonly decimals: 18;
    };
    readonly infoURL: "https://gochain.io";
    readonly shortName: "go";
    readonly chainId: 60;
    readonly networkId: 60;
    readonly slip44: 6060;
    readonly explorers: readonly [{
        readonly name: "GoChain Explorer";
        readonly url: "https://explorer.gochain.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "gochain";
};
export default _default;
//# sourceMappingURL=60.d.ts.map