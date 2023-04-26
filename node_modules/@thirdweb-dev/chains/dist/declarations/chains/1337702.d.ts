declare const _default: {
    readonly name: "Kintsugi";
    readonly title: "Kintsugi merge testnet";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://kintsugi.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.kintsugi.themerge.dev"];
    readonly faucets: readonly ["http://fauceth.komputing.org?chain=1337702&address=${ADDRESS}", "https://faucet.kintsugi.themerge.dev"];
    readonly nativeCurrency: {
        readonly name: "kintsugi Ethere";
        readonly symbol: "kiETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://kintsugi.themerge.dev/";
    readonly shortName: "kintsugi";
    readonly chainId: 1337702;
    readonly networkId: 1337702;
    readonly explorers: readonly [{
        readonly name: "kintsugi explorer";
        readonly url: "https://explorer.kintsugi.themerge.dev";
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "kintsugi";
};
export default _default;
//# sourceMappingURL=1337702.d.ts.map