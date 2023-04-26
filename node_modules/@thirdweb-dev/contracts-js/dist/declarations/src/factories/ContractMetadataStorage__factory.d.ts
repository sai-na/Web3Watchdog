import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ContractMetadataStorage, ContractMetadataStorageInterface } from "../ContractMetadataStorage";
type ContractMetadataStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ContractMetadataStorage__factory extends ContractFactory {
    constructor(...args: ContractMetadataStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractMetadataStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ContractMetadataStorage;
    connect(signer: Signer): ContractMetadataStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80637e837fbf146038575b600080fd5b605e7fa7d40346e44ca145e94a946aa34a7d4a67245577dc18699a626fe0ffc6ce328181565b60405190815260200160405180910390f3fea2646970667358221220131ad0b0d27a7e8c07f35f69cef39d7761435320890c2428655ba3a2dbf6094364736f6c634300080c0033";
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
    static createInterface(): ContractMetadataStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContractMetadataStorage;
}
export {};
//# sourceMappingURL=ContractMetadataStorage__factory.d.ts.map