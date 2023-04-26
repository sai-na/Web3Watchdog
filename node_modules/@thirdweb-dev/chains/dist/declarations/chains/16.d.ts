declare const _default: {
    readonly name: "Flare Testnet Coston";
    readonly chain: "FLR";
    readonly icon: {
        readonly url: "ipfs://QmW7Ljv2eLQ1poRrhJBaVWJBF1TyfZ8QYxDeELRo6sssrj";
        readonly width: 382;
        readonly height: 382;
        readonly format: "png";
    };
    readonly rpc: readonly ["https://flare-testnet-coston.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://coston-api.flare.network/ext/bc/C/rpc"];
    readonly faucets: readonly ["https://faucet.towolabs.com", "https://fauceth.komputing.org?chain=16&address=${ADDRESS}"];
    readonly nativeCurrency: {
        readonly name: "Coston Flare";
        readonly symbol: "CFLR";
        readonly decimals: 18;
    };
    readonly infoURL: "https://flare.xyz";
    readonly shortName: "cflr";
    readonly chainId: 16;
    readonly networkId: 16;
    readonly explorers: readonly [{
        readonly name: "blockscout";
        readonly url: "https://coston-explorer.flare.network";
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "flare-testnet-coston";
};
export default _default;
//# sourceMappingURL=16.d.ts.map