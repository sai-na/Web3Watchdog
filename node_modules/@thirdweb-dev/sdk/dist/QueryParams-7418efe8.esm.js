import BN from 'bn.js';
import { BigNumber } from 'ethers';
import { z } from 'zod';

const DEFAULT_API_KEY = "c6634ad2d97b74baf15ff556016830c251050e6c36b9da508ce3ec80095d3dc1";
function getRpcUrl(network) {
  let apikey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_API_KEY;
  return `https://${network}.rpc.thirdweb.com/${apikey}`;
}

/**
 * @internal
 */
const isBrowser = () => typeof window !== "undefined";
/**
 * @internal
 */
const FileOrBufferUnionSchema = isBrowser() ? z.instanceof(File) : z.instanceof(Buffer); // @fixme, this is a hack to make browser happy for now

/**
 * @internal
 */
const FileOrBufferSchema = z.union([FileOrBufferUnionSchema, z.object({
  data: z.union([FileOrBufferUnionSchema, z.string()]),
  name: z.string()
})]);

/**
 * @internal
 */
const FileOrBufferOrStringSchema = z.union([FileOrBufferSchema, z.string()]);
const MAX_BPS = 10000;
const BytesLikeSchema = z.union([z.array(z.number()), z.string()]);
const BigNumberSchema = z.union([z.string(), z.number(), z.bigint(), z.custom(data => {
  return BigNumber.isBigNumber(data);
}), z.custom(data => {
  return BN.isBN(data);
})]).transform(arg => {
  let str = BN.isBN(arg) ? new BN(arg).toString() : BigNumber.from(arg).toString();
  return BigNumber.from(str);
});
BigNumberSchema.transform(arg => arg.toString());
const BigNumberTransformSchema = z.union([z.bigint(), z.custom(data => {
  return BigNumber.isBigNumber(data);
}), z.custom(data => {
  return BN.isBN(data);
})]).transform(arg => {
  if (BN.isBN(arg)) {
    return new BN(arg).toString();
  }
  return BigNumber.from(arg).toString();
});
const BasisPointsSchema = z.number().max(MAX_BPS, "Cannot exceed 100%").min(0, "Cannot be below 0%");
const PercentSchema = z.number().max(100, "Cannot exceed 100%").min(0, "Cannot be below 0%");
const HexColor = z.union([z.string().regex(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color"), z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color").transform(val => val.replace("#", "")), z.string().length(0)]);
const AmountSchema = z.union([z.string().regex(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/, "Invalid amount"), z.number().min(0, "Amount cannot be negative")]).transform(arg => typeof arg === "number" ? arg.toString() : arg);

/**
 * @internal
 */

/**
 * @internal
 */
const QuantitySchema = z.union([AmountSchema, z.literal("unlimited")]).default("unlimited");
const RawDateSchema = z.date().transform(i => {
  return BigNumber.from(Math.floor(i.getTime() / 1000));
});

/**
 * Default to now
 */
RawDateSchema.default(new Date(0));

/**
 * Default to 10 years from now
 */
RawDateSchema.default(new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 10));

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const PropertiesInput = z.object({}).catchall(z.union([BigNumberTransformSchema, z.unknown()]));

/**
 * @internal
 */
const OptionalPropertiesInput = z.union([z.array(PropertiesInput), PropertiesInput]).optional().nullable();

/**
 * @internal
 */
const CommonNFTInput = z.object({
  name: z.union([z.string(), z.number()]).optional().nullable(),
  description: z.string().nullable().optional().nullable(),
  image: FileOrBufferOrStringSchema.nullable().optional(),
  external_url: FileOrBufferOrStringSchema.nullable().optional(),
  animation_url: FileOrBufferOrStringSchema.optional().nullable(),
  background_color: HexColor.optional().nullable(),
  properties: OptionalPropertiesInput,
  attributes: OptionalPropertiesInput
}).catchall(z.union([BigNumberTransformSchema, z.unknown()]));

/**
 * @internal
 */
const NFTInputOrUriSchema = z.union([CommonNFTInput, z.string()]);

/**
 * @internal
 */
const CommonNFTOutput = CommonNFTInput.extend({
  id: z.string(),
  uri: z.string(),
  image: z.string().nullable().optional(),
  external_url: z.string().nullable().optional(),
  animation_url: z.string().nullable().optional()
});

/**
 * @public
 */

/**
 * @internal
 */
const DEFAULT_QUERY_ALL_COUNT = 100;
const QueryAllParamsSchema = z.object({
  start: z.number().default(0),
  count: z.number().default(DEFAULT_QUERY_ALL_COUNT)
}).default({
  start: 0,
  count: DEFAULT_QUERY_ALL_COUNT
});

/**
 * Pagination Parameters
 * @public
 */

export { AmountSchema as A, BytesLikeSchema as B, CommonNFTOutput as C, DEFAULT_API_KEY as D, FileOrBufferOrStringSchema as F, MAX_BPS as M, NFTInputOrUriSchema as N, PercentSchema as P, QuantitySchema as Q, _defineProperty as _, BasisPointsSchema as a, CommonNFTInput as b, DEFAULT_QUERY_ALL_COUNT as c, QueryAllParamsSchema as d, getRpcUrl as g };
