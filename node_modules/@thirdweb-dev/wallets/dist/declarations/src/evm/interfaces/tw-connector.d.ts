import { Connector } from "../../lib/wagmi-core";
import type { Chain } from "@thirdweb-dev/chains";
import type { Signer, providers } from "ethers";
import EventEmitter from "eventemitter3";
export declare abstract class TWConnector<TConnectParams extends Record<string, any> = {}> extends EventEmitter {
    abstract connect(args?: ConnectParams<TConnectParams>): Promise<string>;
    abstract disconnect(): Promise<void>;
    abstract getAddress(): Promise<string>;
    abstract getSigner(): Promise<Signer>;
    abstract getProvider(): Promise<providers.Provider>;
    abstract switchChain(chainId: number): Promise<void>;
    abstract isConnected(): Promise<boolean>;
    abstract setupListeners(): Promise<void>;
    abstract updateChains(chains: Chain[]): void;
}
export type ConnectParams<TOpts extends Record<string, any> = {}> = {
    chainId?: number;
    saveParams?: boolean;
} & TOpts;
export declare class WagmiAdapter<TConnectParams extends Record<string, any> = {}> extends TWConnector<TConnectParams> {
    wagmiConnector: Connector<any, any, any>;
    constructor(wagmiConnector: Connector);
    connect(args?: ConnectParams<TConnectParams>): Promise<string>;
    disconnect(): Promise<void>;
    isConnected(): Promise<boolean>;
    getAddress(): Promise<string>;
    getSigner(): Promise<Signer>;
    getProvider(): Promise<providers.Provider>;
    switchChain(chainId: number): Promise<void>;
    setupTWConnectorListeners(): void;
    setupListeners(): Promise<void>;
    updateChains(chains: Chain[]): void;
}
//# sourceMappingURL=tw-connector.d.ts.map