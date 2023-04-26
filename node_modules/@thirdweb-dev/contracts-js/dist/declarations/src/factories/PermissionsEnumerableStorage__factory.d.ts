import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PermissionsEnumerableStorage, PermissionsEnumerableStorageInterface } from "../PermissionsEnumerableStorage";
type PermissionsEnumerableStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PermissionsEnumerableStorage__factory extends ContractFactory {
    constructor(...args: PermissionsEnumerableStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PermissionsEnumerableStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PermissionsEnumerableStorage;
    connect(signer: Signer): PermissionsEnumerableStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063871ef69d146038575b600080fd5b605e7f0c4ba382c0009cf238e4c1ca1a52f51c61e6248a70bdfb34e5ed49d5578a5c0c81565b60405190815260200160405180910390f3fea26469706673582212203a3b9fba751aeb4af8245d4ba3d2efaa5805f75f2b9a810f694d45d3de1ee61964736f6c634300080c0033";
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
    static createInterface(): PermissionsEnumerableStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PermissionsEnumerableStorage;
}
export {};
//# sourceMappingURL=PermissionsEnumerableStorage__factory.d.ts.map