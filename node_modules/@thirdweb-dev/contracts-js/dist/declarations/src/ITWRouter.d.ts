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
export interface ITWRouterInterface extends utils.Interface {
    functions: {
        "addExtension(string)": FunctionFragment;
        "getAllExtensions()": FunctionFragment;
        "getAllFunctionsOfExtension(string)": FunctionFragment;
        "getExtension(string)": FunctionFragment;
        "getExtensionForFunction(bytes4)": FunctionFragment;
        "getExtensionImplementation(string)": FunctionFragment;
        "removeExtension(string)": FunctionFragment;
        "updateExtension(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addExtension" | "getAllExtensions" | "getAllFunctionsOfExtension" | "getExtension" | "getExtensionForFunction" | "getExtensionImplementation" | "removeExtension" | "updateExtension"): FunctionFragment;
    encodeFunctionData(functionFragment: "addExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "getAllExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllFunctionsOfExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "getExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "getExtensionForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getExtensionImplementation", values: [string]): string;
    encodeFunctionData(functionFragment: "removeExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "updateExtension", values: [string]): string;
    decodeFunctionResult(functionFragment: "addExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllFunctionsOfExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExtensionForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExtensionImplementation", data: BytesLike): Result;
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
export interface ITWRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITWRouterInterface;
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
        addExtension(extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllExtensions(overrides?: CallOverrides): Promise<[IExtension.ExtensionStructOutput[]]>;
        getAllFunctionsOfExtension(extensionName: string, overrides?: CallOverrides): Promise<[IExtension.ExtensionFunctionStructOutput[]]>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<[IExtension.ExtensionStructOutput]>;
        getExtensionForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<[IExtension.ExtensionMetadataStructOutput]>;
        getExtensionImplementation(extensionName: string, overrides?: CallOverrides): Promise<[string]>;
        removeExtension(extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateExtension(extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addExtension(extensionName: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllExtensions(overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput[]>;
    getAllFunctionsOfExtension(extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionFunctionStructOutput[]>;
    getExtension(extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput>;
    getExtensionForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<IExtension.ExtensionMetadataStructOutput>;
    getExtensionImplementation(extensionName: string, overrides?: CallOverrides): Promise<string>;
    removeExtension(extensionName: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateExtension(extensionName: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addExtension(extensionName: string, overrides?: CallOverrides): Promise<void>;
        getAllExtensions(overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput[]>;
        getAllFunctionsOfExtension(extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionFunctionStructOutput[]>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput>;
        getExtensionForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<IExtension.ExtensionMetadataStructOutput>;
        getExtensionImplementation(extensionName: string, overrides?: CallOverrides): Promise<string>;
        removeExtension(extensionName: string, overrides?: CallOverrides): Promise<void>;
        updateExtension(extensionName: string, overrides?: CallOverrides): Promise<void>;
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
        addExtension(extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        getAllFunctionsOfExtension(extensionName: string, overrides?: CallOverrides): Promise<BigNumber>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<BigNumber>;
        getExtensionForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getExtensionImplementation(extensionName: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeExtension(extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateExtension(extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addExtension(extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllFunctionsOfExtension(extensionName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExtensionForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExtensionImplementation(extensionName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeExtension(extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateExtension(extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ITWRouter.d.ts.map