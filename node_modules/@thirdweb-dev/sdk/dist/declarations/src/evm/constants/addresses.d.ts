import { PrebuiltContractType } from "../core/types";
import { ChainId, SUPPORTED_CHAIN_ID } from "./chains";
/**
 * publicly available wallet for local nodes
 */
export declare const LOCAL_NODE_PKEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
/**
 * @internal
 */
export declare const OZ_DEFENDER_FORWARDER_ADDRESS = "0xc82BbE41f2cF04e3a8efA18F7032BDD7f6d98a81";
/**
 * @internal
 */
export declare const CONTRACT_ADDRESSES: Record<SUPPORTED_CHAIN_ID, {
    openzeppelinForwarder: string;
    openzeppelinForwarderEOA: string;
    biconomyForwarder: string;
    twFactory: string;
    twRegistry: string;
    twBYOCRegistry: string;
}>;
type DropContract = Extract<PrebuiltContractType, "nft-drop" | "token-drop" | "edition-drop" | "signature-drop">;
export declare const APPROVED_IMPLEMENTATIONS: Record<SUPPORTED_CHAIN_ID, Record<DropContract, string>>;
/**
 * @internal
 * @param chainId
 * @param contractType
 */
export declare function getApprovedImplementation(chainId: SUPPORTED_CHAIN_ID, // TODO use SupportedChainId once we deploy to all chains
contractType: PrebuiltContractType): string | null;
/**
 * @internal
 */
export declare function getContractAddressByChainId(chainId: SUPPORTED_CHAIN_ID | ChainId.Hardhat, contractName: keyof (typeof CONTRACT_ADDRESSES)[SUPPORTED_CHAIN_ID]): string | undefined;
/**
 * @internal
 */
export declare function getContractPublisherAddress(): string;
/**
 * @internal
 */
export declare function getMultichainRegistryAddress(): string;
/**
 *
 * @param chainId - chain id
 * @returns the array of trusted forwarders for the given chain id
 * @internal
 */
export declare function getDefaultTrustedForwarders(chainId: SUPPORTED_CHAIN_ID): string[];
export {};
//# sourceMappingURL=addresses.d.ts.map