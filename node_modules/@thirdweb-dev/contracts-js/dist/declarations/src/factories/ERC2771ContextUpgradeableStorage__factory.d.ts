import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC2771ContextUpgradeableStorage, ERC2771ContextUpgradeableStorageInterface } from "../ERC2771ContextUpgradeableStorage";
type ERC2771ContextUpgradeableStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC2771ContextUpgradeableStorage__factory extends ContractFactory {
    constructor(...args: ERC2771ContextUpgradeableStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC2771ContextUpgradeableStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC2771ContextUpgradeableStorage;
    connect(signer: Signer): ERC2771ContextUpgradeableStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063d4c9c357146038575b600080fd5b605e7f08b81add78656d45cb1db131fc8babf6da94538f821f834e8160ef32928adeef81565b60405190815260200160405180910390f3fea2646970667358221220fce6b3ba5fdff212b2d6ebe28b563b0774ecf5bc2d0575df70b129ec5529d98664736f6c634300080c0033";
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
    static createInterface(): ERC2771ContextUpgradeableStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC2771ContextUpgradeableStorage;
}
export {};
//# sourceMappingURL=ERC2771ContextUpgradeableStorage__factory.d.ts.map