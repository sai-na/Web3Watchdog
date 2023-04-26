import { ContractWrapper } from "../core/classes/contract-wrapper";
import { Amount, Currency, CurrencyValue, Price } from "../types/currency";
import { BaseERC20 } from "../types/eips";
import { BigNumber, BigNumberish, providers } from "ethers";
export declare function isNativeToken(tokenAddress: string): boolean;
export declare function cleanCurrencyAddress(currencyAddress: string): string;
/**
 *
 * @param provider
 * @param inputPrice
 * @param currencyAddress
 * @returns
 * @internal
 */
export declare function normalizePriceValue(provider: providers.Provider, inputPrice: Price, currencyAddress: string): Promise<BigNumber>;
/**
 *
 * @param provider
 * @param asset
 * @returns
 * @internal
 */
export declare function fetchCurrencyMetadata(provider: providers.Provider, asset: string): Promise<Currency>;
/**
 *
 * @param providerOrSigner
 * @param asset
 * @param price
 * @returns
 * @internal
 */
export declare function fetchCurrencyValue(providerOrSigner: providers.Provider, asset: string, price: BigNumberish): Promise<CurrencyValue>;
export declare function setErc20Allowance(contractToApprove: ContractWrapper<any>, value: BigNumber, currencyAddress: string, overrides: any): Promise<any>;
export declare function approveErc20Allowance(contractToApprove: ContractWrapper<any>, currencyAddress: string, price: BigNumber, quantity: BigNumberish, tokenDecimals: number): Promise<void>;
export declare function hasERC20Allowance(contractToApprove: ContractWrapper<any>, currencyAddress: string, value: BigNumber): Promise<boolean>;
export declare function normalizeAmount(contractWrapper: ContractWrapper<BaseERC20>, amount: Amount): Promise<BigNumber>;
export declare function toEther(amount: BigNumberish): string;
export declare function toWei(amount: Amount): BigNumber;
export declare function toUnits(amount: Amount, decimals: BigNumberish): BigNumber;
export declare function toDisplayValue(amount: BigNumberish, decimals: BigNumberish): string;
//# sourceMappingURL=currency.d.ts.map