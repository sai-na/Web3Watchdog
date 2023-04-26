declare const _default: {
    readonly name: "Etica Mainnet";
    readonly chain: "Etica Protocol (ETI/EGAZ)";
    readonly icon: {
        readonly url: "ipfs://QmYSyhUqm6ArWyALBe3G64823ZpEUmFdkzKZ93hUUhNKgU";
        readonly width: 360;
        readonly height: 361;
        readonly format: "png";
    };
    readonly rpc: readonly ["https://etica.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eticamainnet.eticascan.org", "https://eticamainnet.eticaprotocol.org"];
    readonly faucets: readonly ["http://faucet.etica-stats.org/"];
    readonly nativeCurrency: {
        readonly name: "EGAZ";
        readonly symbol: "EGAZ";
        readonly decimals: 18;
    };
    readonly infoURL: "https://eticaprotocol.org";
    readonly shortName: "Etica";
    readonly chainId: 61803;
    readonly networkId: 61803;
    readonly explorers: readonly [{
        readonly name: "eticascan";
        readonly url: "https://eticascan.org";
        readonly standard: "EIP3091";
    }, {
        readonly name: "eticastats";
        readonly url: "http://explorer.etica-stats.org";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "etica";
};
export default _default;
//# sourceMappingURL=61803.d.ts.map