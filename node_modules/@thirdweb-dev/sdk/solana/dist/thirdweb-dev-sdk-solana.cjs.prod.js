'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdk = require('../../dist/sdk-942c9af4.cjs.prod.js');
var web3_js = require('@solana/web3.js');
var zod = require('zod');
require('../../dist/QueryParams-6754e8c0.cjs.prod.js');
require('bn.js');
require('ethers');
require('@metaplex-foundation/js');
require('@metaplex-foundation/mpl-token-metadata');
require('@project-serum/anchor');
require('buffer/');
require('@solana/spl-token');
require('bs58');
require('eventemitter3');
require('tiny-invariant');
require('tweetnacl');
require('@thirdweb-dev/storage');

/**
 * @internal
 */
const PropertiesInput = zod.z.object({}).catchall(zod.z.unknown());

/**
 * @internal
 */
const OptionalPropertiesInput = zod.z.union([zod.z.array(PropertiesInput), PropertiesInput]).optional();

/**
 * @internal
 */
const RawDateSchema = zod.z.date().transform(i => {
  return Math.floor(i.getTime() / 1000);
});

/**
 * @internal
 */

/**
 * @internal
 */
const AddressSchema = zod.z.union([zod.z.string(), zod.z.instanceof(web3_js.PublicKey).transform(key => key.toBase58())]);

exports.CommonContractOutputSchema = sdk.CommonContractOutputSchema;
exports.CommonContractSchema = sdk.CommonContractSchema;
exports.CreatorInputSchema = sdk.CreatorInputSchema;
exports.Deployer = sdk.Deployer;
exports.NFTCollection = sdk.NFTCollection;
exports.NFTCollectionMetadataInputSchema = sdk.NFTCollectionMetadataInputSchema;
exports.NFTDrop = sdk.NFTDrop;
exports.NFTDropContractInputSchema = sdk.NFTDropContractInputSchema;
exports.NFTDropInitialConditionsInputSchema = sdk.NFTDropInitialConditionsInputSchema;
exports.NFTDropUpdatableConditionsInputSchema = sdk.NFTDropUpdatableConditionsInputSchema;
exports.NFTDropUpdatableConditionsOutputSchema = sdk.NFTDropUpdatableConditionsOutputSchema;
exports.Program = sdk.Program;
exports.ThirdwebSDK = sdk.ThirdwebSDK;
exports.Token = sdk.Token;
exports.TokenMetadataInputSchema = sdk.TokenMetadataInputSchema;
exports.UserWallet = sdk.UserWallet;
exports.getNework = sdk.getNework;
exports.getPublicRpc = sdk.getPublicRpc;
exports.getUrlForNetwork = sdk.getUrlForNetwork;
exports.AddressSchema = AddressSchema;
exports.OptionalPropertiesInput = OptionalPropertiesInput;
exports.RawDateSchema = RawDateSchema;
