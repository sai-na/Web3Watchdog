declare const _default: {
    readonly name: "Metis Goerli Testnet";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://metis-goerli-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.gateway.metisdevops.link"];
    readonly faucets: readonly ["https://goerli.faucet.metisdevops.link"];
    readonly nativeCurrency: {
        readonly name: "Goerli Metis";
        readonly symbol: "METIS";
        readonly decimals: 18;
    };
    readonly infoURL: "https://www.metis.io";
    readonly shortName: "metis-goerli";
    readonly chainId: 599;
    readonly networkId: 599;
    readonly explorers: readonly [{
        readonly name: "blockscout";
        readonly url: "https://goerli.explorer.metisdevops.link";
        readonly standard: "EIP3091";
    }];
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-4";
        readonly bridges: readonly [{
            readonly url: "https://testnet-bridge.metis.io";
        }];
    };
    readonly icon: {
        readonly url: "ipfs://QmbWKNucbMtrMPPkHG5ZmVmvNUo8CzqHHcrpk1C2BVQsEG/2022_H-Brand_Stacked_WhiteGreen.svg";
        readonly format: "svg";
        readonly height: 512;
        readonly width: 512;
    };
    readonly testnet: true;
    readonly slug: "metis-goerli-testnet";
};
export default _default;
//# sourceMappingURL=599.d.ts.map