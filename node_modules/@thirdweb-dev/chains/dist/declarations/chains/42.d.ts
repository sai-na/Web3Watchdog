declare const _default: {
    readonly name: "Kovan";
    readonly title: "Ethereum Testnet Kovan";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://kovan.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://kovan.poa.network", "http://kovan.poa.network:8545", "https://kovan.infura.io/v3/${INFURA_API_KEY}", "wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}", "ws://kovan.poa.network:8546"];
    readonly faucets: readonly ["http://fauceth.komputing.org?chain=42&address=${ADDRESS}", "https://faucet.kovan.network", "https://gitter.im/kovan-testnet/faucet"];
    readonly nativeCurrency: {
        readonly name: "Kovan Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://kovan.etherscan.io";
        readonly standard: "EIP3091";
    }];
    readonly infoURL: "https://kovan-testnet.github.io/website";
    readonly shortName: "kov";
    readonly chainId: 42;
    readonly networkId: 42;
    readonly testnet: true;
    readonly slug: "kovan";
};
export default _default;
//# sourceMappingURL=42.d.ts.map