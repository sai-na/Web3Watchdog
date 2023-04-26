declare const _default: {
    readonly name: "Ropsten";
    readonly title: "Ethereum Testnet Ropsten";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://ropsten.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://ropsten.infura.io/v3/${INFURA_API_KEY}", "wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}"];
    readonly faucets: readonly ["http://fauceth.komputing.org?chain=3&address=${ADDRESS}", "https://faucet.ropsten.be?${ADDRESS}"];
    readonly nativeCurrency: {
        readonly name: "Ropsten Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://github.com/ethereum/ropsten";
    readonly shortName: "rop";
    readonly chainId: 3;
    readonly networkId: 3;
    readonly ens: {
        readonly registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010";
    };
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://ropsten.etherscan.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "ropsten";
};
export default _default;
//# sourceMappingURL=3.d.ts.map