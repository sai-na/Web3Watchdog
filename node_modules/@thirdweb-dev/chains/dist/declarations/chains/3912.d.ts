declare const _default: {
    readonly name: "DRAC Network";
    readonly chain: "DRAC";
    readonly rpc: readonly ["https://drac-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://www.dracscan.com/rpc"];
    readonly faucets: readonly ["https://www.dracscan.io/faucet"];
    readonly nativeCurrency: {
        readonly name: "DRAC";
        readonly symbol: "DRAC";
        readonly decimals: 18;
    };
    readonly infoURL: "https://drac.io/";
    readonly shortName: "drac";
    readonly features: readonly [{
        readonly name: "EIP155";
    }, {
        readonly name: "EIP1559";
    }];
    readonly chainId: 3912;
    readonly networkId: 3912;
    readonly icon: {
        readonly url: "ipfs://QmXbsQe7QsVFZJZdBmbZVvS6LgX9ZFoaTMBs9MiQXUzJTw";
        readonly width: 256;
        readonly height: 256;
        readonly format: "png";
    };
    readonly explorers: readonly [{
        readonly name: "DRAC_Network Scan";
        readonly url: "https://www.dracscan.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "drac-network";
};
export default _default;
//# sourceMappingURL=3912.d.ts.map