declare const _default: {
    readonly name: "Base Goerli Testnet";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://base-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.base.org"];
    readonly faucets: readonly ["https://www.coinbase.com/faucets/base-ethereum-goerli-faucet"];
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://base.org";
    readonly shortName: "basegor";
    readonly chainId: 84531;
    readonly networkId: 84531;
    readonly explorers: readonly [{
        readonly name: "basescout";
        readonly url: "https://base-goerli.blockscout.com";
        readonly standard: "none";
    }, {
        readonly name: "basescan";
        readonly url: "https://goerli.basescan.org";
        readonly standard: "none";
    }];
    readonly testnet: true;
    readonly icon: {
        readonly url: "ipfs://QmW5Vn15HeRkScMfPcW12ZdZcC2yUASpu6eCsECRdEmjjj/base-512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly slug: "base-goerli";
};
export default _default;
//# sourceMappingURL=84531.d.ts.map