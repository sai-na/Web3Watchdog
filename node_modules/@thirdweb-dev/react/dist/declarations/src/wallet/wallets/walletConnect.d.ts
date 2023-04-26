import { WalletConnect } from "@thirdweb-dev/wallets";
import type { WalletOptions } from "@thirdweb-dev/react-core";
export declare const walletConnect: (config?: {
    projectId?: string;
}) => {
    id: string;
    meta: {
        name: string;
        iconURL: string;
    };
    create: (options: WalletOptions) => WalletConnect;
};
//# sourceMappingURL=walletConnect.d.ts.map