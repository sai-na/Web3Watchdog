declare const _default: {
    readonly name: "Ethereum Classic Mainnet";
    readonly chain: "ETC";
    readonly rpc: readonly ["https://ethereum-classic.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://www.ethercluster.com/etc"];
    readonly faucets: readonly ["https://free-online-app.com/faucet-for-eth-evm-chains/?"];
    readonly nativeCurrency: {
        readonly name: "Ethereum Classic Ether";
        readonly symbol: "ETC";
        readonly decimals: 18;
    };
    readonly infoURL: "https://ethereumclassic.org";
    readonly shortName: "etc";
    readonly chainId: 61;
    readonly networkId: 1;
    readonly slip44: 61;
    readonly explorers: readonly [{
        readonly name: "blockscout";
        readonly url: "https://blockscout.com/etc/mainnet";
        readonly standard: "none";
    }];
    readonly testnet: false;
    readonly slug: "ethereum-classic";
};
export default _default;
//# sourceMappingURL=61.d.ts.map