import type { WalletOptions } from "@thirdweb-dev/react-core";
import { MetaMaskWallet } from "@thirdweb-dev/wallets";
export declare const metamaskWallet: () => {
    id: "metamask";
    meta: {
        name: string;
        iconURL: string;
    };
    create: (options: WalletOptions) => MetaMaskWallet;
};
//# sourceMappingURL=metamaskWallet.d.ts.map