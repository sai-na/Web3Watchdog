import { ThirdwebSDKProviderProps } from "../../evm/providers/types";
import { Wallet } from "../types/wallet";
import { Chain } from "@thirdweb-dev/chains";
import { CreateAsyncStorage, DAppMetaData } from "@thirdweb-dev/wallets";
import React from "react";
/**
 * The possible props for the ThirdwebProvider.
 */
export interface ThirdwebProviderCoreProps<TChains extends Chain[]> extends ThirdwebSDKProviderProps<TChains> {
    /**
     * An array of wallets that the dApp supports
     * If not provided, will default to Metamask (injected), Coinbase wallet and Device wallet
     *
     * @example
     * You can Import the wallets you want to support from `@thirdweb-dev/wallets` and pass them to `supportedWallets`
     *
     * ```jsx title="App.jsx"
     * import { ThirdwebProvider } from "@thirdweb-dev/react";
     *
     * const App = () => {
     *   return (
     *     <ThirdwebProvider>
     *       <YourApp />
     *     </ThirdwebProvider>
     *   );
     * };
     * ```
     */
    supportedWallets: Wallet[];
    /**
     * Metadata to pass to wallet connect and walletlink wallet connect. (Used to show *which* dApp is being connected to in mobile wallets that support it)
     * Defaults to just the name being passed as `thirdweb powered dApp`.
     */
    dAppMeta?: DAppMetaData;
    /**
     * Whether or not to attempt auto-connect to a wallet.
     */
    autoConnect?: boolean;
    theme?: "light" | "dark";
    createWalletStorage?: CreateAsyncStorage;
    /**
     * Whether or not to automatically switch to wallet's network to active chain
     */
    autoSwitch?: boolean;
}
export declare const ThirdwebProviderCore: <TChains extends Chain[]>({ createWalletStorage, ...props }: React.PropsWithChildren<ThirdwebProviderCoreProps<TChains>>) => JSX.Element;
//# sourceMappingURL=thirdweb-provider.d.ts.map