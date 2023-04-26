import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PermissionsStorage, PermissionsStorageInterface } from "../PermissionsStorage";
type PermissionsStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PermissionsStorage__factory extends ContractFactory {
    constructor(...args: PermissionsStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PermissionsStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PermissionsStorage;
    connect(signer: Signer): PermissionsStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80630998ed3b146038575b600080fd5b605e7fd0ebebe8e6445c62babf8fef767eb39f1002bb957bb5b83258275a4e46428ed581565b60405190815260200160405180910390f3fea26469706673582212201175e7c237b00cd193334ea7031c5ab6c4a1d82ab6f15e8cce35f083845373ae64736f6c634300080c0033";
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
    static createInterface(): PermissionsStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PermissionsStorage;
}
export {};
//# sourceMappingURL=PermissionsStorage__factory.d.ts.map