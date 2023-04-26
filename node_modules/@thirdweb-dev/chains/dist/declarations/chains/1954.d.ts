declare const _default: {
    readonly name: "Dexilla Testnet";
    readonly chain: "Dexilla";
    readonly rpc: readonly ["https://dexilla-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.dexilla.com"];
    readonly faucets: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmUBveetVibvSEWQrjyxySgUphLuoMGSVLGmYnobt5FgEZ";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly nativeCurrency: {
        readonly name: "Dexilla Native Token";
        readonly symbol: "DXZ";
        readonly decimals: 18;
    };
    readonly infoURL: "https://dexilla.com";
    readonly shortName: "Dexilla";
    readonly chainId: 1954;
    readonly networkId: 1954;
    readonly explorers: readonly [{
        readonly name: "dos-mainnet";
        readonly url: "https://exp.dexilla.com";
        readonly standard: "EIP3091";
    }];
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-11155111";
        readonly bridges: readonly [{
            readonly url: "https://bridge.dexilla.com";
        }];
    };
    readonly testnet: true;
    readonly slug: "dexilla-testnet";
};
export default _default;
//# sourceMappingURL=1954.d.ts.map