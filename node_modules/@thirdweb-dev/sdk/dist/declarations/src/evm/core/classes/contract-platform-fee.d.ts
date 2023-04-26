import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
import type { IPlatformFee } from "@thirdweb-dev/contracts-js";
/**
 * Handle platform fees and recipients
 * @remarks Configure platform fees for a contract, which can be applied on certain paid transactions
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const feeInfo = await contract.platformFee.get();
 * await contract.platformFee.set({
 *   platform_fee_basis_points: 100, // 1% fee
 *   platform_fee_recipient: "0x..." // the fee recipient
 * })
 * ```
 * @public
 */
export declare class ContractPlatformFee<TContract extends IPlatformFee> implements DetectableFeature {
    featureName: "PlatformFee";
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Get the platform fee recipient and basis points
     *
     * @example
     * ```javascript
     * const feeInfo = await contract.platformFee.get();
     * console.log(feeInfo.platform_fee_recipient);
     * console.log(feeInfo.platform_fee_basis_points);
     * ```
     * @twfeature PlatformFee
     */
    get(): Promise<{
        platform_fee_basis_points: number;
        platform_fee_recipient: string;
    }>;
    /**
     * Set the platform fee recipient and basis points
     *
     * @example
     * ```javascript
     * await contract.platformFee.set({
     *   platform_fee_basis_points: 100, // 1% fee
     *   platform_fee_recipient: "0x..." // the fee recipient
     * })
     * ```
     *
     * @param platformFeeInfo - the platform fee information
     * @twfeature PlatformFee
     */
    set: {
        (platformFeeInfo: {
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
        }): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (platformFeeInfo: {
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
        }) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=contract-platform-fee.d.ts.map