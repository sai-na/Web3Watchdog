import { Chain, MinimalChain } from "./types";
export type ChainRPCOptions = {
    thirdwebApiKey?: string;
    alchemyApiKey?: string;
    infuraApiKey?: string;
    mode?: "http" | "ws";
};
/**
 * Construct the list of RPC URLs given a specific chain config. Format any RPC URLs
 * with necessary API keys.
 *
 * @param chain - The chain config to assemble RPC URLs from
 * @param options - Options to configure the RPC URLs
 * @returns The list of RPC URLs for the chain
 */
export declare function getChainRPCs(chain: Pick<Chain, "rpc" | "chainId">, options?: ChainRPCOptions): string[];
/**
 * Get the highest priority RPC URL for a specific chain
 *
 * @param chain - The chain config to get the RPC URL for
 * @param options - Options to configure the RPC URL
 * @returns The RPC URL for the chain
 *
 * @internal
 */
export declare function getChainRPC(chain: Pick<Chain, "rpc" | "chainId">, options?: ChainRPCOptions): string;
export declare function minimizeChain(chain: Chain): MinimalChain;
type ChainConfiguration = {
    rpc?: string | string[];
};
export declare function configureChain(chain: Chain, chainConfig: ChainConfiguration): Chain;
export {};
//# sourceMappingURL=utils.d.ts.map