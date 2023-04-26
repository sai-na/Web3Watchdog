import { ContractType } from "../../core/types";
import { ethers } from "ethers";
type ResolveContractTypeParams = {
    address: string;
    provider: ethers.providers.Provider;
};
export declare function resolveContractType(params: ResolveContractTypeParams): Promise<ContractType>;
export {};
//# sourceMappingURL=contract.d.ts.map