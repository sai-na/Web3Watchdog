import { Abi, PublishedMetadata, ContractSource, Address } from "../schema";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { providers } from "ethers";
/**
 * @internal
 * @param address
 * @param provider
 * @param storage
 */
export declare function fetchContractMetadataFromAddress(address: Address, provider: providers.Provider, storage: ThirdwebStorage): Promise<{
    name: string;
    metadata: Record<string, any>;
    abi: import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[];
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
    licenses: string[];
}>;
/**
 * @internal
 * @param address
 * @param provider
 * @param storage
 * @returns
 */
export declare function fetchAbiFromAddress(address: Address, provider: providers.Provider, storage: ThirdwebStorage): Promise<Abi | undefined>;
/**
 * @internal
 * @param compilerMetadataUri
 * @param storage
 */
export declare function fetchContractMetadata(compilerMetadataUri: string, storage: ThirdwebStorage): Promise<PublishedMetadata>;
/**
 * @internal
 * @param publishedMetadata
 * @param storage
 */
export declare function fetchSourceFilesFromMetadata(publishedMetadata: PublishedMetadata, storage: ThirdwebStorage): Promise<ContractSource[]>;
//# sourceMappingURL=metadata-resolver.d.ts.map