import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IExtension {
    type ExtensionMetadataStruct = {
        name: string;
        metadataURI: string;
        implementation: string;
    };
    type ExtensionMetadataStructOutput = [string, string, string] & {
        name: string;
        metadataURI: string;
        implementation: string;
    };
    type ExtensionFunctionStruct = {
        functionSelector: BytesLike;
        functionSignature: string;
    };
    type ExtensionFunctionStructOutput = [string, string] & {
        functionSelector: string;
        functionSignature: string;
    };
    type ExtensionStruct = {
        metadata: IExtension.ExtensionMetadataStruct;
        functions: IExtension.ExtensionFunctionStruct[];
    };
    type ExtensionStructOutput = [
        IExtension.ExtensionMetadataStructOutput,
        IExtension.ExtensionFunctionStructOutput[]
    ] & {
        metadata: IExtension.ExtensionMetadataStructOutput;
        functions: IExtension.ExtensionFunctionStructOutput[];
    };
}
export interface ExtensionRegistryInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "addExtension(((string,string,address),(bytes4,string)[]))": FunctionFragment;
        "getAllExtensions()": FunctionFragment;
        "getAllFunctionsOfExtension(string)": FunctionFragment;
        "getExtension(string)": FunctionFragment;
        "getExtensionForFunction(bytes4)": FunctionFragment;
        "getExtensionImplementation(string)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "hasRoleWithSwitch(bytes32,address)": FunctionFragment;
        "removeExtension(string)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "updateExtension(((string,string,address),(bytes4,string)[]))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "addExtension" | "getAllExtensions" | "getAllFunctionsOfExtension" | "getExtension" | "getExtensionForFunction" | "getExtensionImplementation" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "hasRoleWithSwitch" | "removeExtension" | "renounceRole" | "revokeRole" | "updateExtension"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addExtension", values: [IExtension.ExtensionStruct]): string;
    encodeFunctionData(functionFragment: "getAllExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllFunctionsOfExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "getExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "getExtensionForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getExtensionImplementation", values: [string]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRoleWithSwitch", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "removeExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "updateExtension", values: [IExtension.ExtensionStruct]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllFunctionsOfExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExtensionForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExtensionImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRoleWithSwitch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateExtension", data: BytesLike): Result;
    events: {
        "ExtensionAdded(address,bytes4,string)": EventFragment;
        "ExtensionRemoved(address,bytes4,string)": EventFragment;
        "ExtensionUpdated(address,address,bytes4,string)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExtensionAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExtensionRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExtensionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface ExtensionAddedEventObject {
    extensionAddress: string;
    functionSelector: string;
    functionSignature: string;
}
export type ExtensionAddedEvent = TypedEvent<[
    string,
    string,
    string
], ExtensionAddedEventObject>;
export type ExtensionAddedEventFilter = TypedEventFilter<ExtensionAddedEvent>;
export interface ExtensionRemovedEventObject {
    extensionAddress: string;
    functionSelector: string;
    functionSignature: string;
}
export type ExtensionRemovedEvent = TypedEvent<[
    string,
    string,
    string
], ExtensionRemovedEventObject>;
export type ExtensionRemovedEventFilter = TypedEventFilter<ExtensionRemovedEvent>;
export interface ExtensionUpdatedEventObject {
    oldExtensionAddress: string;
    newExtensionAddress: string;
    functionSelector: string;
    functionSignature: string;
}
export type ExtensionUpdatedEvent = TypedEvent<[
    string,
    string,
    string,
    string
], ExtensionUpdatedEventObject>;
export type ExtensionUpdatedEventFilter = TypedEventFilter<ExtensionUpdatedEvent>;
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
export interface ExtensionRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExtensionRegistryInterface;
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
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllExtensions(overrides?: CallOverrides): Promise<[
            IExtension.ExtensionStructOutput[]
        ] & {
            allExtensions: IExtension.ExtensionStructOutput[];
        }>;
        getAllFunctionsOfExtension(_extensionName: string, overrides?: CallOverrides): Promise<[IExtension.ExtensionFunctionStructOutput[]]>;
        getExtension(_extensionName: string, overrides?: CallOverrides): Promise<[IExtension.ExtensionStructOutput]>;
        getExtensionForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<[IExtension.ExtensionMetadataStructOutput]>;
        getExtensionImplementation(_extensionName: string, overrides?: CallOverrides): Promise<[string]>;
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
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllExtensions(overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput[]>;
    getAllFunctionsOfExtension(_extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionFunctionStructOutput[]>;
    getExtension(_extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput>;
    getExtensionForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<IExtension.ExtensionMetadataStructOutput>;
    getExtensionImplementation(_extensionName: string, overrides?: CallOverrides): Promise<string>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    removeExtension(_extensionName: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: CallOverrides): Promise<void>;
        getAllExtensions(overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput[]>;
        getAllFunctionsOfExtension(_extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionFunctionStructOutput[]>;
        getExtension(_extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput>;
        getExtensionForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<IExtension.ExtensionMetadataStructOutput>;
        getExtensionImplementation(_extensionName: string, overrides?: CallOverrides): Promise<string>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        removeExtension(_extensionName: string, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        updateExtension(_extension: IExtension.ExtensionStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ExtensionAdded(address,bytes4,string)"(extensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionAddedEventFilter;
        ExtensionAdded(extensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionAddedEventFilter;
        "ExtensionRemoved(address,bytes4,string)"(extensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionRemovedEventFilter;
        ExtensionRemoved(extensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionRemovedEventFilter;
        "ExtensionUpdated(address,address,bytes4,string)"(oldExtensionAddress?: string | null, newExtensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionUpdatedEventFilter;
        ExtensionUpdated(oldExtensionAddress?: string | null, newExtensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionUpdatedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        getAllFunctionsOfExtension(_extensionName: string, overrides?: CallOverrides): Promise<BigNumber>;
        getExtension(_extensionName: string, overrides?: CallOverrides): Promise<BigNumber>;
        getExtensionForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getExtensionImplementation(_extensionName: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllFunctionsOfExtension(_extensionName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExtension(_extensionName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExtensionForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExtensionImplementation(_extensionName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ExtensionRegistry.d.ts.map