declare const _default: {
    readonly name: "Rinkeby";
    readonly title: "Ethereum Testnet Rinkeby";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://rinkeby.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rinkeby.infura.io/v3/${INFURA_API_KEY}", "wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}"];
    readonly faucets: readonly ["http://fauceth.komputing.org?chain=4&address=${ADDRESS}", "https://faucet.rinkeby.io"];
    readonly nativeCurrency: {
        readonly name: "Rinkeby Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://www.rinkeby.io";
    readonly shortName: "rin";
    readonly chainId: 4;
    readonly networkId: 4;
    readonly ens: {
        readonly registry: "0xe7410170f87102df0055eb195163a03b7f2bff4a";
    };
    readonly explorers: readonly [{
        readonly name: "etherscan-rinkeby";
        readonly url: "https://rinkeby.etherscan.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "rinkeby";
};
export default _default;
//# sourceMappingURL=4.d.ts.map