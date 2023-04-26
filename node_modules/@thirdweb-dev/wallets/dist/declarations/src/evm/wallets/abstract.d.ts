import { Ecosystem, GenericAuthWallet } from "../../core";
import { EVMWallet } from "../interfaces";
import type { Signer } from "ethers";
import EventEmitter from "eventemitter3";
export type WalletData = {
    address?: string;
    chainId?: number;
};
export interface WalletEvents {
    connect(data: WalletData): void;
    change(data: WalletData): void;
    message({ type, data }: {
        type: string;
        data?: unknown;
    }): void;
    disconnect(): void;
    error(error: Error): void;
    open_wallet(uri?: string): void;
    request(): void;
}
export declare function checkContractWalletSignature(message: string, signature: string, address: string, chainId: number): Promise<boolean>;
export declare abstract class AbstractWallet extends EventEmitter<WalletEvents> implements GenericAuthWallet, EVMWallet {
    type: Ecosystem;
    protected signerPromise?: Promise<Signer>;
    abstract getSigner(): Promise<Signer>;
    /**
     * @returns the account address from connected wallet
     */
    getAddress(): Promise<string>;
    /**
     * @returns the chain id from connected wallet
     */
    getChainId(): Promise<number>;
    /**
     * @returns the signature of the message
     */
    signMessage(message: string): Promise<string>;
    /**
     * verify the signature of a message
     * @returns `true` if the signature is valid, `false` otherwise
     */
    verifySignature(message: string, signature: string, address: string, chainId?: number): Promise<boolean>;
    getCachedSigner(): Promise<Signer>;
}
//# sourceMappingURL=abstract.d.ts.map