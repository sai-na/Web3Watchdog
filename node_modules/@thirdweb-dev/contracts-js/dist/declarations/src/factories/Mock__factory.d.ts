import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Mock, MockInterface } from "../Mock";
type MockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Mock__factory extends ContractFactory {
    constructor(...args: MockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Mock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Mock;
    connect(signer: Signer): Mock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060c98061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063785e9e86146041578063bca6ce6414606f578063d56022d7146081575b600080fd5b6000546053906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6001546053906001600160a01b031681565b6002546053906001600160a01b03168156fea2646970667358221220ea831809809fbd79b157ae6f266f68fdab8d7993be583ed3d3ca363834cc681d64736f6c634300080c0033";
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
    static createInterface(): MockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Mock;
}
export {};
//# sourceMappingURL=Mock__factory.d.ts.map