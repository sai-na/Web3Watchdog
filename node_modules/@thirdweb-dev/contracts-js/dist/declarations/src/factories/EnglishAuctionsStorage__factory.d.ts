import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EnglishAuctionsStorage, EnglishAuctionsStorageInterface } from "../EnglishAuctionsStorage";
type EnglishAuctionsStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EnglishAuctionsStorage__factory extends ContractFactory {
    constructor(...args: EnglishAuctionsStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<EnglishAuctionsStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): EnglishAuctionsStorage;
    connect(signer: Signer): EnglishAuctionsStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806385ec7cf6146038575b600080fd5b605e7fd526f5655f36f7dc8e8bd7b8ff16d8886b1e27059b0d19a6ab0f4742ac8dc6e381565b60405190815260200160405180910390f3fea264697066735822122098ae7d74d5c76eff979c0a9d32f0767238439d763f1d71f5d27bf0cd0d6efc1e64736f6c634300080c0033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): EnglishAuctionsStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EnglishAuctionsStorage;
}
export {};
//# sourceMappingURL=EnglishAuctionsStorage__factory.d.ts.map