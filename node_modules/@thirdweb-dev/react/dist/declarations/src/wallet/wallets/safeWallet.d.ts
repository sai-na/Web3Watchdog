import { SafeWallet } from "@thirdweb-dev/wallets";
import type { WalletOptions } from "@thirdweb-dev/react-core";
export declare const safeWallet: () => {
    id: "Safe";
    meta: {
        name: string;
        iconURL: string;
    };
    create: (options: WalletOptions) => SafeWallet;
};
//# sourceMappingURL=safeWallet.d.ts.map