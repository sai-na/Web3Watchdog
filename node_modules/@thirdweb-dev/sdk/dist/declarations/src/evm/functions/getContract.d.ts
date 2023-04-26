import { SmartContract } from "../contracts/smart-contract";
import { ContractForPrebuiltContractType, NetworkInput, PrebuiltContractType } from "../core/types";
import { AddressOrEns } from "../schema";
import { SDKOptions } from "../schema/sdk-options";
import type { ThirdwebStorage } from "@thirdweb-dev/storage";
import type { ContractInterface } from "ethers";
export type GetContractParams<TContractType extends PrebuiltContractType> = {
    address: AddressOrEns;
    contractTypeOrAbi?: PrebuiltContractType | ContractInterface | TContractType;
    network: NetworkInput;
    storage?: ThirdwebStorage;
    sdkOptions?: SDKOptions;
};
type ReturnedContractType<TContractType extends PrebuiltContractType> = TContractType extends PrebuiltContractType ? ContractForPrebuiltContractType<TContractType> : SmartContract;
export declare function getContract<TContractType extends PrebuiltContractType>(params: GetContractParams<TContractType>): Promise<ReturnedContractType<TContractType>>;
export {};
//# sourceMappingURL=getContract.d.ts.map