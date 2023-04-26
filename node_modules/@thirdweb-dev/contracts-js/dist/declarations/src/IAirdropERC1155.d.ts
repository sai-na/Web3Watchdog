import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IAirdropERC1155 {
    type AirdropContentStruct = {
        tokenAddress: string;
        tokenOwner: string;
        recipient: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
    };
    type AirdropContentStructOutput = [
        string,
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        tokenAddress: string;
        tokenOwner: string;
        recipient: string;
        tokenId: BigNumber;
        amount: BigNumber;
    };
}
export interface IAirdropERC1155Interface extends utils.Interface {
    functions: {
        "addAirdropRecipients((address,address,address,uint256,uint256)[])": FunctionFragment;
        "airdrop(uint256)": FunctionFragment;
        "getAllAirdropPayments()": FunctionFragment;
        "getAllAirdropPaymentsFailed()": FunctionFragment;
        "getAllAirdropPaymentsPending()": FunctionFragment;
        "getAllAirdropPaymentsProcessed()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAirdropRecipients" | "airdrop" | "getAllAirdropPayments" | "getAllAirdropPaymentsFailed" | "getAllAirdropPaymentsPending" | "getAllAirdropPaymentsProcessed"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAirdropRecipients", values: [IAirdropERC1155.AirdropContentStruct[]]): string;
    encodeFunctionData(functionFragment: "airdrop", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllAirdropPayments", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAirdropPaymentsFailed", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAirdropPaymentsPending", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAirdropPaymentsProcessed", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addAirdropRecipients", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "airdrop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAirdropPayments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAirdropPaymentsFailed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAirdropPaymentsPending", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAirdropPaymentsProcessed", data: BytesLike): Result;
    events: {
        "AirdropPayment(address,tuple)": EventFragment;
        "RecipientsAdded(tuple[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AirdropPayment"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RecipientsAdded"): EventFragment;
}
export interface AirdropPaymentEventObject {
    recipient: string;
    content: IAirdropERC1155.AirdropContentStructOutput;
}
export type AirdropPaymentEvent = TypedEvent<[
    string,
    IAirdropERC1155.AirdropContentStructOutput
], AirdropPaymentEventObject>;
export type AirdropPaymentEventFilter = TypedEventFilter<AirdropPaymentEvent>;
export interface RecipientsAddedEventObject {
    _contents: IAirdropERC1155.AirdropContentStructOutput[];
}
export type RecipientsAddedEvent = TypedEvent<[
    IAirdropERC1155.AirdropContentStructOutput[]
], RecipientsAddedEventObject>;
export type RecipientsAddedEventFilter = TypedEventFilter<RecipientsAddedEvent>;
export interface IAirdropERC1155 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAirdropERC1155Interface;
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
        addAirdropRecipients(_contents: IAirdropERC1155.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        airdrop(paymentsToProcess: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllAirdropPayments(overrides?: CallOverrides): Promise<[
            IAirdropERC1155.AirdropContentStructOutput[]
        ] & {
            contents: IAirdropERC1155.AirdropContentStructOutput[];
        }>;
        getAllAirdropPaymentsFailed(overrides?: CallOverrides): Promise<[
            IAirdropERC1155.AirdropContentStructOutput[]
        ] & {
            contents: IAirdropERC1155.AirdropContentStructOutput[];
        }>;
        getAllAirdropPaymentsPending(overrides?: CallOverrides): Promise<[
            IAirdropERC1155.AirdropContentStructOutput[]
        ] & {
            contents: IAirdropERC1155.AirdropContentStructOutput[];
        }>;
        getAllAirdropPaymentsProcessed(overrides?: CallOverrides): Promise<[
            IAirdropERC1155.AirdropContentStructOutput[]
        ] & {
            contents: IAirdropERC1155.AirdropContentStructOutput[];
        }>;
    };
    addAirdropRecipients(_contents: IAirdropERC1155.AirdropContentStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    airdrop(paymentsToProcess: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllAirdropPayments(overrides?: CallOverrides): Promise<IAirdropERC1155.AirdropContentStructOutput[]>;
    getAllAirdropPaymentsFailed(overrides?: CallOverrides): Promise<IAirdropERC1155.AirdropContentStructOutput[]>;
    getAllAirdropPaymentsPending(overrides?: CallOverrides): Promise<IAirdropERC1155.AirdropContentStructOutput[]>;
    getAllAirdropPaymentsProcessed(overrides?: CallOverrides): Promise<IAirdropERC1155.AirdropContentStructOutput[]>;
    callStatic: {
        addAirdropRecipients(_contents: IAirdropERC1155.AirdropContentStruct[], overrides?: CallOverrides): Promise<void>;
        airdrop(paymentsToProcess: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getAllAirdropPayments(overrides?: CallOverrides): Promise<IAirdropERC1155.AirdropContentStructOutput[]>;
        getAllAirdropPaymentsFailed(overrides?: CallOverrides): Promise<IAirdropERC1155.AirdropContentStructOutput[]>;
        getAllAirdropPaymentsPending(overrides?: CallOverrides): Promise<IAirdropERC1155.AirdropContentStructOutput[]>;
        getAllAirdropPaymentsProcessed(overrides?: CallOverrides): Promise<IAirdropERC1155.AirdropContentStructOutput[]>;
    };
    filters: {
        "AirdropPayment(address,tuple)"(recipient?: string | null, content?: null): AirdropPaymentEventFilter;
        AirdropPayment(recipient?: string | null, content?: null): AirdropPaymentEventFilter;
        "RecipientsAdded(tuple[])"(_contents?: null): RecipientsAddedEventFilter;
        RecipientsAdded(_contents?: null): RecipientsAddedEventFilter;
    };
    estimateGas: {
        addAirdropRecipients(_contents: IAirdropERC1155.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        airdrop(paymentsToProcess: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllAirdropPayments(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAirdropPaymentsFailed(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAirdropPaymentsPending(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAirdropPaymentsProcessed(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addAirdropRecipients(_contents: IAirdropERC1155.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        airdrop(paymentsToProcess: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllAirdropPayments(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAirdropPaymentsFailed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAirdropPaymentsPending(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAirdropPaymentsProcessed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IAirdropERC1155.d.ts.map