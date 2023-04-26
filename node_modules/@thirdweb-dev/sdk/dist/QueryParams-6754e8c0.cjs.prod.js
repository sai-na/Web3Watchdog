'use strict';

var BN = require('bn.js');
var ethers = require('ethers');
var zod = require('zod');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var BN__default = /*#__PURE__*/_interopDefault(BN);

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
const FileOrBufferUnionSchema = isBrowser() ? zod.z.instanceof(File) : zod.z.instanceof(Buffer); // @fixme, this is a hack to make browser happy for now

/**
 * @internal
 */
const FileOrBufferSchema = zod.z.union([FileOrBufferUnionSchema, zod.z.object({
  data: zod.z.union([FileOrBufferUnionSchema, zod.z.string()]),
  name: zod.z.string()
})]);

/**
 * @internal
 */
const FileOrBufferOrStringSchema = zod.z.union([FileOrBufferSchema, zod.z.string()]);
const MAX_BPS = 10000;
const BytesLikeSchema = zod.z.union([zod.z.array(zod.z.number()), zod.z.string()]);
const BigNumberSchema = zod.z.union([zod.z.string(), zod.z.number(), zod.z.bigint(), zod.z.custom(data => {
  return ethers.BigNumber.isBigNumber(data);
}), zod.z.custom(data => {
  return BN__default["default"].isBN(data);
})]).transform(arg => {
  let str = BN__default["default"].isBN(arg) ? new BN__default["default"](arg).toString() : ethers.BigNumber.from(arg).toString();
  return ethers.BigNumber.from(str);
});
BigNumberSchema.transform(arg => arg.toString());
const BigNumberTransformSchema = zod.z.union([zod.z.bigint(), zod.z.custom(data => {
  return ethers.BigNumber.isBigNumber(data);
}), zod.z.custom(data => {
  return BN__default["default"].isBN(data);
})]).transform(arg => {
  if (BN__default["default"].isBN(arg)) {
    return new BN__default["default"](arg).toString();
  }
  return ethers.BigNumber.from(arg).toString();
});
const BasisPointsSchema = zod.z.number().max(MAX_BPS, "Cannot exceed 100%").min(0, "Cannot be below 0%");
const PercentSchema = zod.z.number().max(100, "Cannot exceed 100%").min(0, "Cannot be below 0%");
const HexColor = zod.z.union([zod.z.string().regex(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color"), zod.z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color").transform(val => val.replace("#", "")), zod.z.string().length(0)]);
const AmountSchema = zod.z.union([zod.z.string().regex(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/, "Invalid amount"), zod.z.number().min(0, "Amount cannot be negative")]).transform(arg => typeof arg === "number" ? arg.toString() : arg);

/**
 * @internal
 */

/**
 * @internal
 */
const QuantitySchema = zod.z.union([AmountSchema, zod.z.literal("unlimited")]).default("unlimited");
const RawDateSchema = zod.z.date().transform(i => {
  return ethers.BigNumber.from(Math.floor(i.getTime() / 1000));
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

const PropertiesInput = zod.z.object({}).catchall(zod.z.union([BigNumberTransformSchema, zod.z.unknown()]));

/**
 * @internal
 */
const OptionalPropertiesInput = zod.z.union([zod.z.array(PropertiesInput), PropertiesInput]).optional().nullable();

/**
 * @internal
 */
const CommonNFTInput = zod.z.object({
  name: zod.z.union([zod.z.string(), zod.z.number()]).optional().nullable(),
  description: zod.z.string().nullable().optional().nullable(),
  image: FileOrBufferOrStringSchema.nullable().optional(),
  external_url: FileOrBufferOrStringSchema.nullable().optional(),
  animation_url: FileOrBufferOrStringSchema.optional().nullable(),
  background_color: HexColor.optional().nullable(),
  properties: OptionalPropertiesInput,
  attributes: OptionalPropertiesInput
}).catchall(zod.z.union([BigNumberTransformSchema, zod.z.unknown()]));

/**
 * @internal
 */
const NFTInputOrUriSchema = zod.z.union([CommonNFTInput, zod.z.string()]);

/**
 * @internal
 */
const CommonNFTOutput = CommonNFTInput.extend({
  id: zod.z.string(),
  uri: zod.z.string(),
  image: zod.z.string().nullable().optional(),
  external_url: zod.z.string().nullable().optional(),
  animation_url: zod.z.string().nullable().optional()
});

/**
 * @public
 */

/**
 * @internal
 */
const DEFAULT_QUERY_ALL_COUNT = 100;
const QueryAllParamsSchema = zod.z.object({
  start: zod.z.number().default(0),
  count: zod.z.number().default(DEFAULT_QUERY_ALL_COUNT)
}).default({
  start: 0,
  count: DEFAULT_QUERY_ALL_COUNT
});

/**
 * Pagination Parameters
 * @public
 */

exports.AmountSchema = AmountSchema;
exports.BasisPointsSchema = BasisPointsSchema;
exports.BytesLikeSchema = BytesLikeSchema;
exports.CommonNFTInput = CommonNFTInput;
exports.CommonNFTOutput = CommonNFTOutput;
exports.DEFAULT_API_KEY = DEFAULT_API_KEY;
exports.DEFAULT_QUERY_ALL_COUNT = DEFAULT_QUERY_ALL_COUNT;
exports.FileOrBufferOrStringSchema = FileOrBufferOrStringSchema;
exports.MAX_BPS = MAX_BPS;
exports.NFTInputOrUriSchema = NFTInputOrUriSchema;
exports.PercentSchema = PercentSchema;
exports.QuantitySchema = QuantitySchema;
exports.QueryAllParamsSchema = QueryAllParamsSchema;
exports._defineProperty = _defineProperty;
exports.getRpcUrl = getRpcUrl;
