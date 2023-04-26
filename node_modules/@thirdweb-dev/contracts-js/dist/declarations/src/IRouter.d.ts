import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IPluginMap {
    type PluginStruct = {
        functionSelector: BytesLike;
        functionSignature: string;
        pluginAddress: string;
    };
    type PluginStructOutput = [string, string, string] & {
        functionSelector: string;
        functionSignature: string;
        pluginAddress: string;
    };
}
export interface IRouterInterface extends utils.Interface {
    functions: {
        "addPlugin((bytes4,string,address))": FunctionFragment;
        "getAllFunctionsOfPlugin(address)": FunctionFragment;
        "getAllPlugins()": FunctionFragment;
        "getPluginForFunction(bytes4)": FunctionFragment;
        "removePlugin(bytes4)": FunctionFragment;
        "updatePlugin((bytes4,string,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addPlugin" | "getAllFunctionsOfPlugin" | "getAllPlugins" | "getPluginForFunction" | "removePlugin" | "updatePlugin"): FunctionFragment;
    encodeFunctionData(functionFragment: "addPlugin", values: [IPluginMap.PluginStruct]): string;
    encodeFunctionData(functionFragment: "getAllFunctionsOfPlugin", values: [string]): string;
    encodeFunctionData(functionFragment: "getAllPlugins", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPluginForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "removePlugin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updatePlugin", values: [IPluginMap.PluginStruct]): string;
    decodeFunctionResult(functionFragment: "addPlugin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllFunctionsOfPlugin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPlugins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPluginForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removePlugin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePlugin", data: BytesLike): Result;
    events: {
        "PluginAdded(bytes4,address)": EventFragment;
        "PluginRemoved(bytes4,address)": EventFragment;
        "PluginSet(bytes4,string,address)": EventFragment;
        "PluginUpdated(bytes4,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PluginAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PluginRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PluginSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PluginUpdated"): EventFragment;
}
export interface PluginAddedEventObject {
    functionSelector: string;
    pluginAddress: string;
}
export type PluginAddedEvent = TypedEvent<[
    string,
    string
], PluginAddedEventObject>;
export type PluginAddedEventFilter = TypedEventFilter<PluginAddedEvent>;
export interface PluginRemovedEventObject {
    functionSelector: string;
    pluginAddress: string;
}
export type PluginRemovedEvent = TypedEvent<[
    string,
    string
], PluginRemovedEventObject>;
export type PluginRemovedEventFilter = TypedEventFilter<PluginRemovedEvent>;
export interface PluginSetEventObject {
    functionSelector: string;
    functionSignature: string;
    pluginAddress: string;
}
export type PluginSetEvent = TypedEvent<[
    string,
    string,
    string
], PluginSetEventObject>;
export type PluginSetEventFilter = TypedEventFilter<PluginSetEvent>;
export interface PluginUpdatedEventObject {
    functionSelector: string;
    oldPluginAddress: string;
    newPluginAddress: string;
}
export type PluginUpdatedEvent = TypedEvent<[
    string,
    string,
    string
], PluginUpdatedEventObject>;
export type PluginUpdatedEventFilter = TypedEventFilter<PluginUpdatedEvent>;
export interface IRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRouterInterface;
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
        addPlugin(plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllFunctionsOfPlugin(pluginAddress: string, overrides?: CallOverrides): Promise<[string[]]>;
        getAllPlugins(overrides?: CallOverrides): Promise<[IPluginMap.PluginStructOutput[]]>;
        getPluginForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        removePlugin(functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updatePlugin(plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addPlugin(plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllFunctionsOfPlugin(pluginAddress: string, overrides?: CallOverrides): Promise<string[]>;
    getAllPlugins(overrides?: CallOverrides): Promise<IPluginMap.PluginStructOutput[]>;
    getPluginForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
    removePlugin(functionSelector: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updatePlugin(plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addPlugin(plugin: IPluginMap.PluginStruct, overrides?: CallOverrides): Promise<void>;
        getAllFunctionsOfPlugin(pluginAddress: string, overrides?: CallOverrides): Promise<string[]>;
        getAllPlugins(overrides?: CallOverrides): Promise<IPluginMap.PluginStructOutput[]>;
        getPluginForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
        removePlugin(functionSelector: BytesLike, overrides?: CallOverrides): Promise<void>;
        updatePlugin(plugin: IPluginMap.PluginStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PluginAdded(bytes4,address)"(functionSelector?: BytesLike | null, pluginAddress?: string | null): PluginAddedEventFilter;
        PluginAdded(functionSelector?: BytesLike | null, pluginAddress?: string | null): PluginAddedEventFilter;
        "PluginRemoved(bytes4,address)"(functionSelector?: BytesLike | null, pluginAddress?: string | null): PluginRemovedEventFilter;
        PluginRemoved(functionSelector?: BytesLike | null, pluginAddress?: string | null): PluginRemovedEventFilter;
        "PluginSet(bytes4,string,address)"(functionSelector?: BytesLike | null, functionSignature?: string | null, pluginAddress?: string | null): PluginSetEventFilter;
        PluginSet(functionSelector?: BytesLike | null, functionSignature?: string | null, pluginAddress?: string | null): PluginSetEventFilter;
        "PluginUpdated(bytes4,address,address)"(functionSelector?: BytesLike | null, oldPluginAddress?: string | null, newPluginAddress?: string | null): PluginUpdatedEventFilter;
        PluginUpdated(functionSelector?: BytesLike | null, oldPluginAddress?: string | null, newPluginAddress?: string | null): PluginUpdatedEventFilter;
    };
    estimateGas: {
        addPlugin(plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllFunctionsOfPlugin(pluginAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAllPlugins(overrides?: CallOverrides): Promise<BigNumber>;
        getPluginForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        removePlugin(functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updatePlugin(plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addPlugin(plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllFunctionsOfPlugin(pluginAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllPlugins(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPluginForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removePlugin(functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updatePlugin(plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IRouter.d.ts.map