declare const _default: {
    readonly name: "Sepolia";
    readonly title: "Ethereum Testnet Sepolia";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://sepolia.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.sepolia.org", "https://rpc2.sepolia.org", "https://rpc-sepolia.rockx.com"];
    readonly faucets: readonly ["http://fauceth.komputing.org?chain=11155111&address=${ADDRESS}"];
    readonly nativeCurrency: {
        readonly name: "Sepolia Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://sepolia.otterscan.io";
    readonly shortName: "sep";
    readonly chainId: 11155111;
    readonly networkId: 11155111;
    readonly explorers: readonly [{
        readonly name: "etherscan-sepolia";
        readonly url: "https://sepolia.etherscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "otterscan-sepolia";
        readonly url: "https://sepolia.otterscan.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "sepolia";
};
export default _default;
//# sourceMappingURL=11155111.d.ts.map