import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export interface TWRouterInterface extends utils.Interface {
    functions: {
        "addExtension(string)": FunctionFragment;
        "defaultExtensionSet()": FunctionFragment;
        "extensionRegistry()": FunctionFragment;
        "getAllExtensions()": FunctionFragment;
        "getAllFunctionsOfExtension(string)": FunctionFragment;
        "getExtension(string)": FunctionFragment;
        "getExtensionForFunction(bytes4)": FunctionFragment;
        "getExtensionImplementation(string)": FunctionFragment;
        "getImplementationForFunction(bytes4)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "removeExtension(string)": FunctionFragment;
        "updateExtension(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addExtension" | "defaultExtensionSet" | "extensionRegistry" | "getAllExtensions" | "getAllFunctionsOfExtension" | "getExtension" | "getExtensionForFunction" | "getExtensionImplementation" | "getImplementationForFunction" | "multicall" | "removeExtension" | "updateExtension"): FunctionFragment;
    encodeFunctionData(functionFragment: "addExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "defaultExtensionSet", values?: undefined): string;
    encodeFunctionData(functionFragment: "extensionRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllFunctionsOfExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "getExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "getExtensionForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getExtensionImplementation", values: [string]): string;
    encodeFunctionData(functionFragment: "getImplementationForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "removeExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "updateExtension", values: [string]): string;
    decodeFunctionResult(functionFragment: "addExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultExtensionSet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extensionRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllFunctionsOfExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExtensionForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExtensionImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getImplementationForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateExtension", data: BytesLike): Result;
    events: {
        "ExtensionAdded(address,bytes4,string)": EventFragment;
        "ExtensionRemoved(address,bytes4,string)": EventFragment;
        "ExtensionUpdated(address,address,bytes4,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExtensionAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExtensionRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExtensionUpdated"): EventFragment;
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
export interface TWRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TWRouterInterface;
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
        addExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        defaultExtensionSet(overrides?: CallOverrides): Promise<[string]>;
        extensionRegistry(overrides?: CallOverrides): Promise<[string]>;
        getAllExtensions(overrides?: CallOverrides): Promise<[
            IExtension.ExtensionStructOutput[]
        ] & {
            allExtensions: IExtension.ExtensionStructOutput[];
        }>;
        getAllFunctionsOfExtension(_extensionName: string, overrides?: CallOverrides): Promise<[IExtension.ExtensionFunctionStructOutput[]]>;
        getExtension(_extensionName: string, overrides?: CallOverrides): Promise<[IExtension.ExtensionStructOutput]>;
        getExtensionForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<[IExtension.ExtensionMetadataStructOutput]>;
        getExtensionImplementation(_extensionName: string, overrides?: CallOverrides): Promise<[string]>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            extensionAddress: string;
        }>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addExtension(_extensionName: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    defaultExtensionSet(overrides?: CallOverrides): Promise<string>;
    extensionRegistry(overrides?: CallOverrides): Promise<string>;
    getAllExtensions(overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput[]>;
    getAllFunctionsOfExtension(_extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionFunctionStructOutput[]>;
    getExtension(_extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput>;
    getExtensionForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<IExtension.ExtensionMetadataStructOutput>;
    getExtensionImplementation(_extensionName: string, overrides?: CallOverrides): Promise<string>;
    getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeExtension(_extensionName: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateExtension(_extensionName: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addExtension(_extensionName: string, overrides?: CallOverrides): Promise<void>;
        defaultExtensionSet(overrides?: CallOverrides): Promise<string>;
        extensionRegistry(overrides?: CallOverrides): Promise<string>;
        getAllExtensions(overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput[]>;
        getAllFunctionsOfExtension(_extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionFunctionStructOutput[]>;
        getExtension(_extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput>;
        getExtensionForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<IExtension.ExtensionMetadataStructOutput>;
        getExtensionImplementation(_extensionName: string, overrides?: CallOverrides): Promise<string>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        removeExtension(_extensionName: string, overrides?: CallOverrides): Promise<void>;
        updateExtension(_extensionName: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ExtensionAdded(address,bytes4,string)"(extensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionAddedEventFilter;
        ExtensionAdded(extensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionAddedEventFilter;
        "ExtensionRemoved(address,bytes4,string)"(extensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionRemovedEventFilter;
        ExtensionRemoved(extensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionRemovedEventFilter;
        "ExtensionUpdated(address,address,bytes4,string)"(oldExtensionAddress?: string | null, newExtensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionUpdatedEventFilter;
        ExtensionUpdated(oldExtensionAddress?: string | null, newExtensionAddress?: string | null, functionSelector?: BytesLike | null, functionSignature?: null): ExtensionUpdatedEventFilter;
    };
    estimateGas: {
        addExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        defaultExtensionSet(overrides?: CallOverrides): Promise<BigNumber>;
        extensionRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        getAllExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        getAllFunctionsOfExtension(_extensionName: string, overrides?: CallOverrides): Promise<BigNumber>;
        getExtension(_extensionName: string, overrides?: CallOverrides): Promise<BigNumber>;
        getExtensionForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getExtensionImplementation(_extensionName: string, overrides?: CallOverrides): Promise<BigNumber>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        defaultExtensionSet(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extensionRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllFunctionsOfExtension(_extensionName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExtension(_extensionName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExtensionForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExtensionImplementation(_extensionName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=TWRouter.d.ts.map