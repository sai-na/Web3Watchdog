import { Feature, FeatureName, FeatureWithEnabled } from "../constants/contract-features";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { DetectableFeature } from "../core/interfaces/DetectableFeature";
import { Abi, AbiEvent, AbiFunction, AbiInput, FullPublishMetadata, PreDeployMetadataFetched } from "../schema/contracts/custom";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BaseContract, ethers } from "ethers";
import { z } from "zod";
/**
 * @internal
 * @param contractWrapper
 * @param abi
 * @returns
 */
export declare function matchesPrebuiltAbi<T extends BaseContract>(contractWrapper: ContractWrapper<BaseContract>, abi: AbiInput): contractWrapper is ContractWrapper<T>;
/**
 * @internal
 * @param contractAbi
 * @param featureAbis
 * @returns
 */
export declare function hasMatchingAbi(contractAbi: AbiInput, featureAbis: readonly AbiInput[]): boolean;
/**
 * @internal
 */
export declare function extractConstructorParams(predeployMetadataUri: string, storage: ThirdwebStorage): Promise<z.objectOutputType<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    stateMutability: z.ZodOptional<z.ZodString>;
    components: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">>, "many">>;
}, z.ZodAny, "strip">[]>;
/**
 * @internal
 * @param predeployMetadataUri
 * @param storage
 */
export declare function extractFunctions(predeployMetadataUri: string, storage: ThirdwebStorage): Promise<AbiFunction[]>;
/**
 *
 * @param abi
 * @returns
 * @internal
 */
export declare function extractConstructorParamsFromAbi(abi: AbiInput): z.objectOutputType<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    stateMutability: z.ZodOptional<z.ZodString>;
    components: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">>, "many">>;
}, z.ZodAny, "strip">[];
/**
 *
 * @param abi
 * @param functionName
 * @returns
 * @internal
 */
export declare function extractFunctionParamsFromAbi(abi: AbiInput, functionName: string): z.objectOutputType<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    stateMutability: z.ZodOptional<z.ZodString>;
    components: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">>, "many">>;
}, z.ZodAny, "strip">[];
/**
 * @internal
 * @param abi
 * @param metadata
 */
export declare function extractFunctionsFromAbi(abi: AbiInput, metadata?: Record<string, any>): AbiFunction[];
/**
 * @internal
 * @param abi
 * @param metadata
 */
export declare function extractEventsFromAbi(abi: AbiInput, metadata?: Record<string, any>): AbiEvent[];
/**
 * @internal
 * @param bytecode
 */
export declare function extractMinimalProxyImplementationAddress(bytecode: string): string | undefined;
/**
 * @internal
 * @param address
 * @param provider
 */
export declare function resolveContractUriFromAddress(address: string, provider: ethers.providers.Provider): Promise<string | undefined>;
/**
 * @internal
 * @param bytecode
 */
export declare function extractIPFSHashFromBytecode(bytecode: string): string | undefined;
/**
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
export declare function fetchRawPredeployMetadata(publishMetadataUri: string, storage: ThirdwebStorage): Promise<z.objectOutputType<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
}, z.ZodAny, "strip">>;
/**
 * Fetch the metadata coming from CLI, this is before deploying or releasing the contract.
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
export declare function fetchPreDeployMetadata(publishMetadataUri: string, storage: ThirdwebStorage): Promise<PreDeployMetadataFetched>;
/**
 * Fetch and parse the full metadata AFTER publishing a contract, with all the extra information (version, readme, etc)
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
export declare function fetchExtendedReleaseMetadata(publishMetadataUri: string, storage: ThirdwebStorage): Promise<FullPublishMetadata>;
/**
 * Processes ALL supported features and sets whether the passed in abi supports each individual feature
 * @internal
 * @param abi
 * @param features
 * @returns the nested struct of all features and whether they're detected in the abi
 */
export declare function detectFeatures(abi: Abi, features?: Record<string, Feature>): Record<string, FeatureWithEnabled>;
/**
 * Return all the detected features in the abi
 * @param abi - parsed array of abi entries
 * @returns array of all detected extensions with full information on each feature
 * @public
 */
export declare function getAllDetectedFeatures(abi: Abi): FeatureWithEnabled[];
/**
 * Return all the detected features names in the abi
 * @param abi - parsed array of abi entries
 * @returns array of all detected features names
 * @public
 */
export declare function getAllDetectedFeatureNames(abi: Abi): string[];
/**
 * Checks whether the given ABI supports a given feature
 * @internal
 * @param abi
 * @param featureName
 */
export declare function isFeatureEnabled(abi: AbiInput, featureName: FeatureName): boolean;
/**
 * Checks whether the given DetectableFeature is defined
 * @internal
 * @param namespace The namespace to check
 * @param feature The corresponding feature
 */
export declare function assertEnabled<T extends DetectableFeature>(namespace: T | undefined, feature: Feature): T;
/**
 * Type guard for contractWrappers depending on passed feature name
 * @internal
 * @param contractWrapper
 * @param featureName
 */
export declare function detectContractFeature<T extends BaseContract>(contractWrapper: ContractWrapper<BaseContract>, featureName: FeatureName): contractWrapper is ContractWrapper<T>;
/**
 * @internal
 * @param contractWrapper
 * @param functionName
 */
export declare function hasFunction<TContract extends BaseContract>(functionName: string, contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<TContract>;
//# sourceMappingURL=feature-detection.d.ts.map