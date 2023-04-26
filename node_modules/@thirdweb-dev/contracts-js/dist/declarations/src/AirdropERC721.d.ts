import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IAirdropERC721 {
    type AirdropContentStruct = {
        tokenAddress: string;
        tokenOwner: string;
        recipient: string;
        tokenId: BigNumberish;
    };
    type AirdropContentStructOutput = [
        string,
        string,
        string,
        BigNumber
    ] & {
        tokenAddress: string;
        tokenOwner: string;
        recipient: string;
        tokenId: BigNumber;
    };
}
export interface AirdropERC721Interface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "addAirdropRecipients((address,address,address,uint256)[])": FunctionFragment;
        "airdrop(uint256)": FunctionFragment;
        "contractType()": FunctionFragment;
        "contractVersion()": FunctionFragment;
        "getAllAirdropPayments()": FunctionFragment;
        "getAllAirdropPaymentsFailed()": FunctionFragment;
        "getAllAirdropPaymentsPending()": FunctionFragment;
        "getAllAirdropPaymentsProcessed()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "hasRoleWithSwitch(bytes32,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "owner()": FunctionFragment;
        "payeeCount()": FunctionFragment;
        "processedCount()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "addAirdropRecipients" | "airdrop" | "contractType" | "contractVersion" | "getAllAirdropPayments" | "getAllAirdropPaymentsFailed" | "getAllAirdropPaymentsPending" | "getAllAirdropPaymentsProcessed" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "hasRoleWithSwitch" | "initialize" | "multicall" | "owner" | "payeeCount" | "processedCount" | "renounceRole" | "revokeRole" | "setOwner"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAirdropRecipients", values: [IAirdropERC721.AirdropContentStruct[]]): string;
    encodeFunctionData(functionFragment: "airdrop", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "contractType", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAirdropPayments", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAirdropPaymentsFailed", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAirdropPaymentsPending", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAirdropPaymentsProcessed", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRoleWithSwitch", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "payeeCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "processedCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAirdropRecipients", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "airdrop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAirdropPayments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAirdropPaymentsFailed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAirdropPaymentsPending", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAirdropPaymentsProcessed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRoleWithSwitch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payeeCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processedCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    events: {
        "AirdropPayment(address,tuple)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnerUpdated(address,address)": EventFragment;
        "RecipientsAdded(tuple[])": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AirdropPayment"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RecipientsAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface AirdropPaymentEventObject {
    recipient: string;
    content: IAirdropERC721.AirdropContentStructOutput;
}
export type AirdropPaymentEvent = TypedEvent<[
    string,
    IAirdropERC721.AirdropContentStructOutput
], AirdropPaymentEventObject>;
export type AirdropPaymentEventFilter = TypedEventFilter<AirdropPaymentEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnerUpdatedEventObject {
    prevOwner: string;
    newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<[
    string,
    string
], OwnerUpdatedEventObject>;
export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;
export interface RecipientsAddedEventObject {
    _contents: IAirdropERC721.AirdropContentStructOutput[];
}
export type RecipientsAddedEvent = TypedEvent<[
    IAirdropERC721.AirdropContentStructOutput[]
], RecipientsAddedEventObject>;
export type RecipientsAddedEventFilter = TypedEventFilter<RecipientsAddedEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface AirdropERC721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AirdropERC721Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        addAirdropRecipients(_contents: IAirdropERC721.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        airdrop(paymentsToProcess: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        contractType(overrides?: CallOverrides): Promise<[string]>;
        contractVersion(overrides?: CallOverrides): Promise<[number]>;
        getAllAirdropPayments(overrides?: CallOverrides): Promise<[
            IAirdropERC721.AirdropContentStructOutput[]
        ] & {
            contents: IAirdropERC721.AirdropContentStructOutput[];
        }>;
        getAllAirdropPaymentsFailed(overrides?: CallOverrides): Promise<[
            IAirdropERC721.AirdropContentStructOutput[]
        ] & {
            contents: IAirdropERC721.AirdropContentStructOutput[];
        }>;
        getAllAirdropPaymentsPending(overrides?: CallOverrides): Promise<[
            IAirdropERC721.AirdropContentStructOutput[]
        ] & {
            contents: IAirdropERC721.AirdropContentStructOutput[];
        }>;
        getAllAirdropPaymentsProcessed(overrides?: CallOverrides): Promise<[
            IAirdropERC721.AirdropContentStructOutput[]
        ] & {
            contents: IAirdropERC721.AirdropContentStructOutput[];
        }>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            member: string;
        }>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            count: BigNumber;
        }>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_defaultAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        payeeCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        processedCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    addAirdropRecipients(_contents: IAirdropERC721.AirdropContentStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    airdrop(paymentsToProcess: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    contractType(overrides?: CallOverrides): Promise<string>;
    contractVersion(overrides?: CallOverrides): Promise<number>;
    getAllAirdropPayments(overrides?: CallOverrides): Promise<IAirdropERC721.AirdropContentStructOutput[]>;
    getAllAirdropPaymentsFailed(overrides?: CallOverrides): Promise<IAirdropERC721.AirdropContentStructOutput[]>;
    getAllAirdropPaymentsPending(overrides?: CallOverrides): Promise<IAirdropERC721.AirdropContentStructOutput[]>;
    getAllAirdropPaymentsProcessed(overrides?: CallOverrides): Promise<IAirdropERC721.AirdropContentStructOutput[]>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(_defaultAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    payeeCount(overrides?: CallOverrides): Promise<BigNumber>;
    processedCount(overrides?: CallOverrides): Promise<BigNumber>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(_newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        addAirdropRecipients(_contents: IAirdropERC721.AirdropContentStruct[], overrides?: CallOverrides): Promise<void>;
        airdrop(paymentsToProcess: BigNumberish, overrides?: CallOverrides): Promise<void>;
        contractType(overrides?: CallOverrides): Promise<string>;
        contractVersion(overrides?: CallOverrides): Promise<number>;
        getAllAirdropPayments(overrides?: CallOverrides): Promise<IAirdropERC721.AirdropContentStructOutput[]>;
        getAllAirdropPaymentsFailed(overrides?: CallOverrides): Promise<IAirdropERC721.AirdropContentStructOutput[]>;
        getAllAirdropPaymentsPending(overrides?: CallOverrides): Promise<IAirdropERC721.AirdropContentStructOutput[]>;
        getAllAirdropPaymentsProcessed(overrides?: CallOverrides): Promise<IAirdropERC721.AirdropContentStructOutput[]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(_defaultAdmin: string, overrides?: CallOverrides): Promise<void>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        owner(overrides?: CallOverrides): Promise<string>;
        payeeCount(overrides?: CallOverrides): Promise<BigNumber>;
        processedCount(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AirdropPayment(address,tuple)"(recipient?: string | null, content?: null): AirdropPaymentEventFilter;
        AirdropPayment(recipient?: string | null, content?: null): AirdropPaymentEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnerUpdated(address,address)"(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        OwnerUpdated(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        "RecipientsAdded(tuple[])"(_contents?: null): RecipientsAddedEventFilter;
        RecipientsAdded(_contents?: null): RecipientsAddedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        addAirdropRecipients(_contents: IAirdropERC721.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        airdrop(paymentsToProcess: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        contractType(overrides?: CallOverrides): Promise<BigNumber>;
        contractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAirdropPayments(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAirdropPaymentsFailed(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAirdropPaymentsPending(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAirdropPaymentsProcessed(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        payeeCount(overrides?: CallOverrides): Promise<BigNumber>;
        processedCount(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAirdropRecipients(_contents: IAirdropERC721.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        airdrop(paymentsToProcess: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        contractType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAirdropPayments(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAirdropPaymentsFailed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAirdropPaymentsPending(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAirdropPaymentsProcessed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_defaultAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        payeeCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        processedCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=AirdropERC721.d.ts.map