declare const _default: {
    readonly name: "GateChain Testnet";
    readonly chainId: 85;
    readonly shortName: "gttest";
    readonly chain: "GTTEST";
    readonly networkId: 85;
    readonly nativeCurrency: {
        readonly name: "GateToken";
        readonly symbol: "GT";
        readonly decimals: 18;
    };
    readonly rpc: readonly ["https://gatechain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.gatenode.cc"];
    readonly faucets: readonly ["https://www.gatescan.org/testnet/faucet"];
    readonly explorers: readonly [{
        readonly name: "GateScan";
        readonly url: "https://www.gatescan.org/testnet";
        readonly standard: "EIP3091";
    }];
    readonly infoURL: "https://www.gatechain.io";
    readonly testnet: true;
    readonly slug: "gatechain-testnet";
};
export default _default;
//# sourceMappingURL=85.d.ts.map