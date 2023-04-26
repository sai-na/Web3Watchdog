import { DAppMetaData } from "../types/dAppMeta";
import type { Wallet, WalletInstance } from "../types/wallet";
import { Chain } from "@thirdweb-dev/chains";
import { ConnectParams, CreateAsyncStorage } from "@thirdweb-dev/wallets";
import { Signer } from "ethers";
import { PropsWithChildren } from "react";
type NonNullable<T> = T extends null | undefined ? never : T;
type WalletConnectParams<I extends WalletInstance> = Parameters<I["connect"]>[0];
type ConnectionStatus = "unknown" | "connected" | "disconnected" | "connecting";
type ConnectFnArgs<I extends WalletInstance> = undefined extends WalletConnectParams<I> ? [wallet: Wallet<I>, connectParams?: NonNullable<WalletConnectParams<I>>] : [
    wallet: Wallet<I>,
    connectParams: NonNullable<WalletConnectParams<I>>
];
type ThirdwebWalletContextData = {
    wallets: Wallet[];
    signer?: Signer;
    activeWallet?: WalletInstance;
    connect: <I extends WalletInstance>(...args: ConnectFnArgs<I>) => Promise<void>;
    disconnect: () => Promise<void>;
    connectionStatus: ConnectionStatus;
    setConnectionStatus: (status: ConnectionStatus) => void;
    createWalletInstance: <I extends WalletInstance>(Wallet: Wallet<I>) => I;
    createWalletStorage: CreateAsyncStorage;
    switchChain: (chain: number) => Promise<void>;
    chainToConnect?: Chain;
    activeChain?: Chain;
    handleWalletConnect: (wallet: WalletInstance, params?: ConnectParams<Record<string, any>>) => void;
};
export declare function ThirdwebWalletProvider(props: PropsWithChildren<{
    activeChain?: Chain;
    supportedWallets: Wallet[];
    shouldAutoConnect?: boolean;
    createWalletStorage: CreateAsyncStorage;
    dAppMeta?: DAppMetaData;
    chains: Chain[];
    autoSwitch?: boolean;
}>): JSX.Element;
export declare function useThirdwebWallet(): ThirdwebWalletContextData | undefined;
export {};
//# sourceMappingURL=thirdweb-wallet-provider.d.ts.map