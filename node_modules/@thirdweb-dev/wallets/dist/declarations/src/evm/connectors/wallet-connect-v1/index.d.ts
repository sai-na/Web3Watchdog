import { AsyncStorage } from "../../../core/AsyncStorage";
import { Connector } from "../../../lib/wagmi-core";
import type WalletConnectProvider from "./walletconnect-legacy-provider/index";
import type { Chain } from "@thirdweb-dev/chains";
import { providers } from "ethers";
type WalletConnectOptions = ConstructorParameters<typeof WalletConnectProvider>[0];
type WalletConnectSigner = providers.JsonRpcSigner;
export declare class WalletConnectV1Connector extends Connector<WalletConnectProvider, WalletConnectOptions, WalletConnectSigner> {
    #private;
    readonly id = "walletConnectV1";
    readonly name = "WalletConnectV1";
    readonly ready = true;
    walletName?: string;
    constructor(config: {
        chains?: Chain[];
        storage: AsyncStorage;
        options: WalletConnectOptions;
    });
    connect({ chainId }?: {
        chainId?: number;
    }): Promise<{
        account: string;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: providers.Web3Provider;
    }>;
    disconnect(): Promise<void>;
    getAccount(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider({ chainId, create, }?: {
        chainId?: number;
        create?: boolean;
    }): Promise<WalletConnectProvider>;
    getSigner({ chainId }?: {
        chainId?: number;
    }): Promise<providers.JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<Chain>;
    setupListeners(): Promise<void>;
    protected onSwitchChain: () => void;
    protected onDisplayUri: (error: any, payload: {
        params: string[];
    }) => Promise<void>;
    protected onRequestSent: (error: any, payload: {
        params: string[];
    }) => void;
    protected onMessage: (message: {
        type: string;
        data: unknown;
    }) => void;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: number | string) => void;
    protected onDisconnect: () => Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map