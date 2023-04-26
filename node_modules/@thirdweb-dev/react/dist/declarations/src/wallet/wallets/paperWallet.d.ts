import { PaperWallet } from "@thirdweb-dev/wallets";
import type { WalletOptions } from "@thirdweb-dev/react-core";
export declare const paperWallet: (config: {
    clientId: string;
}) => {
    id: "PaperWallet";
    meta: {
        name: string;
        iconURL: string;
    };
    create: (options: WalletOptions) => PaperWallet;
};
//# sourceMappingURL=paperWallet.d.ts.map