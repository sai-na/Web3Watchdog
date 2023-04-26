import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721Holder, ERC721HolderInterface } from "../ERC721Holder";
type ERC721HolderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721Holder__factory extends ContractFactory {
    constructor(...args: ERC721HolderConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721Holder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721Holder;
    connect(signer: Signer): ERC721Holder__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101bc806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004e61003e3660046100aa565b630a85bd0160e11b949350505050565b6040516001600160e01b0319909116815260200160405180910390f35b803573ffffffffffffffffffffffffffffffffffffffff8116811461008f57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156100c057600080fd5b6100c98561006b565b93506100d76020860161006b565b925060408501359150606085013567ffffffffffffffff808211156100fb57600080fd5b818701915087601f83011261010f57600080fd5b81358181111561012157610121610094565b604051601f8201601f19908116603f0116810190838211818310171561014957610149610094565b816040528281528a602084870101111561016257600080fd5b8260208601602083013760006020848301015280955050505050509295919450925056fea2646970667358221220f2235aea9b71347a723303f7de0c717439a62f2ed5355ef6915e933f268416c764736f6c634300080c0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ERC721HolderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721Holder;
}
export {};
//# sourceMappingURL=ERC721Holder__factory.d.ts.map