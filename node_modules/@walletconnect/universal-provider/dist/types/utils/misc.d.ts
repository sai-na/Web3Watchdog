import { Namespace } from "../types";
export declare function getRpcUrl(chainId: string, rpc: Namespace, projectId?: string): string | undefined;
export declare function getChainId(chain: string): number;
export declare function validateChainApproval(chain: string, chains: string[]): void;
export declare function getChainsFromApprovedSession(accounts: string[]): string[];
//# sourceMappingURL=misc.d.ts.map