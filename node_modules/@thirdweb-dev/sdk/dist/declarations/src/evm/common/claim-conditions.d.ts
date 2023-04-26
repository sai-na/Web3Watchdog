import { Quantity } from "../../core/schema/shared";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { Address } from "../schema";
import { AbstractClaimConditionContractStruct } from "../schema/contracts/common/claim-conditions";
import { SnapshotEntry, SnapshotEntryWithProof } from "../schema/contracts/common/snapshots";
import { ClaimCondition, ClaimConditionInput, ClaimVerification, Price } from "../types";
import { SnapshotFormatVersion } from "./sharded-merkle-tree";
import { IClaimCondition } from "@thirdweb-dev/contracts-js/dist/declarations/src/Drop";
import { IDropClaimCondition_V2 } from "@thirdweb-dev/contracts-js/dist/declarations/src/IDropERC20_V2";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish, CallOverrides, ethers, providers } from "ethers";
/**
 * Returns proofs and the overrides required for the transaction.
 * @internal
 * @returns - `overrides` and `proofs` as an object.
 */
export declare function prepareClaim(addressToClaim: string, quantity: BigNumberish, activeClaimCondition: ClaimCondition, merkleMetadataFetcher: () => Promise<Record<string, string>>, tokenDecimals: number, contractWrapper: ContractWrapper<any>, storage: ThirdwebStorage, checkERC20Allowance: boolean, snapshotFormatVersion: SnapshotFormatVersion): Promise<ClaimVerification>;
/**
 * @internal
 * @param merkleRoot
 * @param merkleMetadata
 * @param storage
 */
export declare function fetchSnapshot(merkleRoot: string, merkleMetadata: Record<string, string> | undefined, storage: ThirdwebStorage): Promise<SnapshotEntry[] | null>;
export declare function fetchSnapshotEntryForAddress(address: string, merkleRoot: string, merkleMetadata: Record<string, string> | undefined, provider: ethers.providers.Provider, storage: ThirdwebStorage, snapshotFormatVersion: SnapshotFormatVersion): Promise<SnapshotEntryWithProof | null>;
/**
 * @internal
 * @param index
 * @param claimConditionInput
 * @param existingConditions
 */
export declare function updateExistingClaimConditions(index: number, claimConditionInput: ClaimConditionInput, existingConditions: ClaimCondition[]): Promise<ClaimConditionInput[]>;
/**
 * Create and uploads snapshots + converts claim conditions to contract format
 * @param claimConditionInputs
 * @param tokenDecimals
 * @param provider
 * @param storage
 * @param snapshotFormatVersion
 * @internal
 */
export declare function processClaimConditionInputs(claimConditionInputs: ClaimConditionInput[], tokenDecimals: number, provider: providers.Provider, storage: ThirdwebStorage, snapshotFormatVersion: SnapshotFormatVersion): Promise<{
    snapshotInfos: {
        merkleRoot: string;
        snapshotUri: string;
    }[];
    sortedConditions: AbstractClaimConditionContractStruct[];
}>;
export declare function abstractContractModelToLegacy(model: AbstractClaimConditionContractStruct): IDropClaimCondition_V2.ClaimConditionStruct;
export declare function abstractContractModelToNew(model: AbstractClaimConditionContractStruct): IClaimCondition.ClaimConditionStruct;
export declare function legacyContractModelToAbstract(model: IDropClaimCondition_V2.ClaimConditionStruct): AbstractClaimConditionContractStruct;
export declare function newContractModelToAbstract(model: IClaimCondition.ClaimConditionStruct): AbstractClaimConditionContractStruct;
/**
 * Transforms a contract model to local model
 * @param pm
 * @param tokenDecimals
 * @param provider
 * @param merkleMetadata
 * @param storage
 * @param shouldDownloadSnapshot
 * @internal
 */
export declare function transformResultToClaimCondition(pm: AbstractClaimConditionContractStruct, tokenDecimals: number, provider: providers.Provider, merkleMetadata: Record<string, string> | undefined, storage: ThirdwebStorage, shouldDownloadSnapshot: boolean): Promise<ClaimCondition>;
/**
 * @internal
 * @param bn
 * @param tokenDecimals
 */
export declare function convertToReadableQuantity(bn: BigNumberish, tokenDecimals: number): string;
/**
 * @internal
 * @param quantity
 * @param tokenDecimals
 */
export declare function convertQuantityToBigNumber(quantity: Quantity, tokenDecimals: number): BigNumber;
export declare function calculateClaimCost(contractWrapper: ContractWrapper<any>, pricePerToken: Price, quantity: BigNumberish, currencyAddress?: Address, checkERC20Allowance?: boolean): Promise<Promise<CallOverrides>>;
//# sourceMappingURL=claim-conditions.d.ts.map