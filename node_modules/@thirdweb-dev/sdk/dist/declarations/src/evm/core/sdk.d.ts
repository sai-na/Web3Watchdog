import { SmartContract } from "../contracts/smart-contract";
import { AddressOrEns, SDKOptions } from "../schema";
import { ContractWithMetadata, CurrencyValue } from "../types";
import { ContractDeployer } from "./classes";
import { ContractPublisher } from "./classes/contract-publisher";
import { MultichainRegistry } from "./classes/multichain-registry";
import { RPCConnectionHandler } from "./classes/rpc-connection-handler";
import type { ChainOrRpcUrl, ContractForPrebuiltContractType, ContractType, NetworkInput, PrebuiltContractType } from "./types";
import { UserWallet } from "./wallet/user-wallet";
import { Chain } from "@thirdweb-dev/chains";
import { ContractAddress } from "@thirdweb-dev/generated-abis";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import type { EVMWallet } from "@thirdweb-dev/wallets";
import type { ContractInterface, Signer, BaseContract } from "ethers";
import { BaseContractForAddress } from "../types/contract";
/**
 * The main entry point for the thirdweb SDK
 * @public
 */
export declare class ThirdwebSDK extends RPCConnectionHandler {
    /**
     * Get an instance of the thirdweb SDK based on an AbstractWallet
     *
     * @example
     * ```javascript
     * import { ThirdwebSDK } from "@thirdweb-dev/sdk"
     *
     * const wallet = new AbstractWalletImplementation();
     * const sdk = await ThirdwebSDK.fromWallet(wallet, "mainnet");
     * ```
     *
     * @param wallet - the implementation of the AbstractWallet class to use for signing
     * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
     * @param options - the SDK options to use
     * @param storage - optional storage implementation to use
     * @returns an instance of the SDK
     *
     * @beta
     */
    static fromWallet(wallet: EVMWallet, network: ChainOrRpcUrl, options?: SDKOptions, storage?: ThirdwebStorage): Promise<ThirdwebSDK>;
    /**
     * Get an instance of the thirdweb SDK based on an existing ethers signer
     *
     * @example
     * ```javascript
     * // get a signer from somewhere (createRandom is being used purely for example purposes)
     * const signer = ethers.Wallet.createRandom();
     *
     * // get an instance of the SDK with the signer already setup
     * const sdk = ThirdwebSDK.fromSigner(signer, "mainnet");
     * ```
     *
     * @param signer - a ethers Signer to be used for transactions
     * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
     * @param options - the SDK options to use
     * @param storage - optional storage implementation to use
     * @returns an instance of the SDK
     *
     * @beta
     */
    static fromSigner(signer: Signer, network?: ChainOrRpcUrl, options?: SDKOptions, storage?: ThirdwebStorage): ThirdwebSDK;
    /**
     * Get an instance of the thirdweb SDK based on a private key.
     *
     * @remarks
     * This should only be used for backend services or scripts, with the private key stored in a secure way.
     * **NEVER** expose your private key to the public in any way.
     *
     * @example
     * ```javascript
     * const sdk = ThirdwebSDK.fromPrivateKey("SecretPrivateKey", "mainnet");
     * ```
     *
     * @param privateKey - the private key - **DO NOT EXPOSE THIS TO THE PUBLIC**
     * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
     * @param options - the SDK options to use
     * @param storage - optional storage implementation to use
     * @returns an instance of the SDK
     *
     * @public
     */
    static fromPrivateKey(privateKey: string, network: ChainOrRpcUrl, options?: SDKOptions, storage?: ThirdwebStorage): ThirdwebSDK;
    /**
     * @internal
     * the cache of contracts that we have already seen
     */
    private contractCache;
    /**
     * @internal
     * should never be accessed directly, use {@link ThirdwebSDK.getPublisher} instead
     */
    private _publisher;
    /**
     * Internal handler for uploading and downloading files
     */
    private storageHandler;
    /**
     * New contract deployer
     */
    deployer: ContractDeployer;
    /**
     * The registry of deployed contracts
     */
    multiChainRegistry: MultichainRegistry;
    /**
     * Interact with the connected wallet
     */
    wallet: UserWallet;
    /**
     * Upload and download files from IPFS or from your own storage service
     */
    storage: ThirdwebStorage;
    constructor(network: NetworkInput, options?: SDKOptions, storage?: ThirdwebStorage);
    get auth(): void;
    /**
     * Get an instance of a NFT Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const dropContract = await sdk.getDropContract("0x1234...");
     * + const dropContract = await sdk.getContract("0x1234...", "nft-drop");
     * ```
     */
    getNFTDrop(contractAddress: AddressOrEns): Promise<import("..").NFTDrop>;
    /**
     * Get an instance of a Signature Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const signatureDrop = await sdk.getSignatureDrop("0x1234...");
     * + const signatureDrop = await sdk.getContract("0x1234...", "signature-drop");
     * ```
     */
    getSignatureDrop(contractAddress: AddressOrEns): Promise<import("..").SignatureDrop>;
    /**
     * Get an instance of a NFT Collection Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const signatureDrop = await sdk.getNFTCollection("0x1234...");
     * + const signatureDrop = await sdk.getContract("0x1234...", "nft-collection");
     * ```
     */
    getNFTCollection(contractAddress: AddressOrEns): Promise<import("..").NFTCollection>;
    /**
     * Get an instance of a Edition Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const editionDrop = await sdk.getEditionDrop("0x1234...");
     * + const editionDrop = await sdk.getContract("0x1234...", "edition-drop");
     * ```
     */
    getEditionDrop(contractAddress: AddressOrEns): Promise<import("..").EditionDrop>;
    /**
     * Get an instance of a Edition contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const edition = await sdk.getEdition("0x1234...");
     * + const edition = await sdk.getContract("0x1234...", "edition");
     * ```
     */
    getEdition(contractAddress: AddressOrEns): Promise<import("..").Edition>;
    /**
     * Get an instance of a Token Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const tokenDrop = await sdk.getTokenDrop("0x1234...");
     * + const tokenDrop = await sdk.getContract("0x1234...", "token-drop");
     * ```
     */
    getTokenDrop(contractAddress: AddressOrEns): Promise<import("..").TokenDrop>;
    /**
     * Get an instance of a Token contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const token = await sdk.getToken("0x1234...");
     * + const token = await sdk.getContract("0x1234...", "token");
     * ```
     */
    getToken(contractAddress: AddressOrEns): Promise<import("..").Token>;
    /**
     * Get an instance of a Vote contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const vote = await sdk.getVote("0x1234...");
     * + const vote = await sdk.getContract("0x1234...", "vote");
     * ```
     */
    getVote(contractAddress: AddressOrEns): Promise<import("..").Vote>;
    /**
     * Get an instance of a Split contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const split = await sdk.getSplit("0x1234...");
     * + const split = await sdk.getContract("0x1234...", "split");
     * ```
     */
    getSplit(contractAddress: AddressOrEns): Promise<import("..").Split>;
    /**
     * Get an instance of a Marketplace contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const marketplace = await sdk.getMarketplace("0x1234...");
     * + const marketplace = await sdk.getContract("0x1234...", "marketplace");
     * ```
     */
    getMarketplace(contractAddress: AddressOrEns): Promise<import("..").Marketplace>;
    /**
     * Get an instance of a Marketplace contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const marketplace = await sdk.getMarketplaceV3("0x1234...");
     * + const marketplace = await sdk.getContract("0x1234...", "marketplace-v3");
     * ```
     */
    getMarketplaceV3(contractAddress: AddressOrEns): Promise<import("..").MarketplaceV3>;
    /**
     * Get an instance of a Pack contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const pack = await sdk.getPack("0x1234...");
     * + const pack = await sdk.getContract("0x1234...", "pack");
     * ```
     */
    getPack(contractAddress: AddressOrEns): Promise<import("..").Pack>;
    /**
     * Get an instance of a Pack contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const multiWrap = await sdk.getMultiwrap("0x1234...");
     * + const multiWrap = await sdk.getContract("0x1234...", "multiwrap");
     * ```
     */
    getMultiwrap(contractAddress: AddressOrEns): Promise<import("..").Multiwrap>;
    /**
     * Get an instance of a Custom ThirdwebContract
     * @param address - the address of the deployed contract
     * @returns the contract
     * @public
     * @example
     * ```javascript
     * const contract = await sdk.getContract("{{contract_address}}");
     * ```
     */
    getContract<TContractAddress extends AddressOrEns | ContractAddress>(address: TContractAddress): Promise<TContractAddress extends ContractAddress ? SmartContract<BaseContractForAddress<TContractAddress>> : SmartContract<BaseContract>>;
    /**
     * Get an instance of a Custom ThirdwebContract
     * @param address - the address of the deployed contract
     * @param contractType - the {@link ContractType} of the contract to load
     * @returns the contract
     * @public
     * @example
     * ```javascript
     * const contract = await sdk.getContract("{{contract_address}}", "nft-drop");
     * ```
     */
    getContract<TContractType extends ContractType>(address: AddressOrEns, contractType: TContractType): Promise<TContractType extends PrebuiltContractType ? ContractForPrebuiltContractType<TContractType> : SmartContract>;
    /**
     * Get an instance of a Custom ThirdwebContract
     * @param address - the address of the deployed contract
     * @param abi - the ABI ({@link ContractInterface}) of the contract to load
     * @returns the contract
     * @public
     * @example
     * ```javascript
     * const contract = await sdk.getContract("{{contract_address}}", ABI);
     * ```
     */
    getContract(address: AddressOrEns, abi: ContractInterface): Promise<SmartContract>;
    /**
     * @internal
     * @deprecated use {@link getContract} directly instead
     */
    getBuiltInContract<TContractType extends PrebuiltContractType>(address: AddressOrEns, contractType: TContractType): Promise<ContractForPrebuiltContractType<TContractType>>;
    /**
     * @param contractAddress - the address of the contract to attempt to resolve the contract type for
     * @returns the {@link ContractType} for the given contract address
     *
     */
    resolveContractType(contractAddress: AddressOrEns): Promise<ContractType>;
    /**
     * Return all the contracts deployed by the specified address
     * @param walletAddress - the deployed address
     * @example
     * ```javascript
     * const contracts = sdk.getContractList("{{wallet_address}}");
     * ```
     */
    getContractList(walletAddress: AddressOrEns): Promise<ContractWithMetadata[]>;
    getMultichainContractList(walletAddress: AddressOrEns, chains?: Chain[]): Promise<ContractWithMetadata[]>;
    /**
     * Update the active signer or provider for all contracts
     * @param network - the new signer or provider
     */
    updateSignerOrProvider(network: NetworkInput): void;
    private updateContractSignerOrProvider;
    /**
     * Get an instance of a Custom contract from a json ABI
     * @param address - the address of the deployed contract
     * @param abi - the JSON abi
     * @returns the contract
     * @beta
     * @example
     * ```javascript
     * // Import your ABI from a JSON file
     * import myABI from "./path/to/myABI.json";
     *
     * const contract = sdk.getContractFromAbi(
     *   "{{contract_address}}",
     *   // Pass in the "abi" field from the JSON file
     *   myABI.abi
     * );
     * ```
     */
    getContractFromAbi(address: AddressOrEns, abi: ContractInterface): Promise<SmartContract<BaseContract>>;
    /**
     * Get the native balance of a given address (wallet or contract)
     * @example
     * ```javascript
     * const balance = await sdk.getBalance("0x...");
     * console.log(balance.displayValue);
     * ```
     * @param address - the address to check the balance for
     */
    getBalance(address: AddressOrEns): Promise<CurrencyValue>;
    /**
     * @internal
     */
    getPublisher(): ContractPublisher;
}
//# sourceMappingURL=sdk.d.ts.map