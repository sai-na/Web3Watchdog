declare const _default: {
    readonly name: "Mas Mainnet";
    readonly chain: "MAS";
    readonly rpc: readonly ["https://mas.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://node.masnet.ai:8545"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Master Bank";
        readonly symbol: "MAS";
        readonly decimals: 18;
    };
    readonly features: readonly [{
        readonly name: "EIP155";
    }, {
        readonly name: "EIP1559";
    }];
    readonly infoURL: "https://masterbank.org";
    readonly shortName: "mas";
    readonly chainId: 220315;
    readonly networkId: 220315;
    readonly icon: {
        readonly url: "ipfs://QmZ9njQhhKkpJKGnoYy6XTuDtk5CYiDFUd8atqWthqUT3Q";
        readonly width: 1024;
        readonly height: 1024;
        readonly format: "png";
    };
    readonly explorers: readonly [{
        readonly name: "explorer masnet";
        readonly url: "https://explorer.masnet.ai";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "mas";
};
export default _default;
//# sourceMappingURL=220315.d.ts.map