/// <reference types="react" />
import { ThirdwebSDKProviderProps } from "./types";
import { Chain } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
/**
 * A basic wrapper around the Thirdweb SDK.
 *
 * You can use this in order to be able to pass a provider & signer directly to the SDK.
 *
 * @remarks Utilizing this provider will mean hooks for wallet management are not available, if you need those please use the {@link ThirdwebProvider} instead.
 *
 * @public
 */
export declare const ThirdwebSDKProvider: <TChains extends Chain[]>({ signer, children, queryClient, supportedChains, activeChain, thirdwebApiKey, alchemyApiKey, infuraApiKey, ...restProps }: import("react").PropsWithChildren<ThirdwebSDKProviderProps<TChains>>) => JSX.Element;
/**
 *
 * @returns {@link ThirdwebSDK}
 * Access the instance of the thirdweb SDK created by the ThirdwebProvider
 * to call methods using the connected wallet on the desiredChainId.
 * @example
 * ```javascript
 * const sdk = useSDK();
 * ```
 */
export declare function useSDK(): ThirdwebSDK | undefined;
/**
 * @internal
 */
export declare function useSDKChainId(): number | undefined;
//# sourceMappingURL=thirdweb-sdk-provider.d.ts.map