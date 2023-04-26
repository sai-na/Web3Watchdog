declare const _default: {
    readonly name: "BlockChain Station Testnet";
    readonly chain: "BCS";
    readonly rpc: readonly ["https://blockchain-station-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.bcsdev.io", "wss://rpc-ws-testnet.bcsdev.io"];
    readonly faucets: readonly ["https://faucet.bcsdev.io"];
    readonly nativeCurrency: {
        readonly name: "BCS Testnet Token";
        readonly symbol: "tBCS";
        readonly decimals: 18;
    };
    readonly infoURL: "https://blockchainstation.io";
    readonly shortName: "tbcs";
    readonly chainId: 708;
    readonly networkId: 708;
    readonly explorers: readonly [{
        readonly name: "BlockChain Station Explorer";
        readonly url: "https://testnet.bcsdev.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "blockchain-station-testnet";
};
export default _default;
//# sourceMappingURL=708.d.ts.map