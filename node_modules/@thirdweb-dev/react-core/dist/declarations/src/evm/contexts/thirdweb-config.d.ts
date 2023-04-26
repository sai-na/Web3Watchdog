import { Chain } from "@thirdweb-dev/chains";
import React, { PropsWithChildren } from "react";
interface ThirdwebConfigContext {
    chains: Chain[];
    thirdwebApiKey?: string;
    alchemyApiKey?: string;
    infuraApiKey?: string;
}
declare const ThirdwebConfigContext: React.Context<ThirdwebConfigContext>;
export declare const ThirdwebConfigProvider: React.FC<PropsWithChildren<{
    value: ThirdwebConfigContext;
}>>;
export declare function useThirdwebConfigContext(): ThirdwebConfigContext;
export {};
//# sourceMappingURL=thirdweb-config.d.ts.map