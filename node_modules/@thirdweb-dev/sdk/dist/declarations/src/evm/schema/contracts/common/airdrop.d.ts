import { z } from "zod";
/**
 * @internal
 */
export declare const AirdropAddressInput: z.ZodObject<{
    address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    quantity: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
}, "strip", z.ZodTypeAny, {
    address: string;
    quantity: string;
}, {
    address: string;
    quantity?: string | number | undefined;
}>;
/**
 * @internal
 */
export declare const AirdropInputSchema: z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
    address: string;
    quantity: string;
}[], string[]>, z.ZodArray<z.ZodObject<{
    address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    quantity: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
}, "strip", z.ZodTypeAny, {
    address: string;
    quantity: string;
}, {
    address: string;
    quantity?: string | number | undefined;
}>, "many">]>;
//# sourceMappingURL=airdrop.d.ts.map