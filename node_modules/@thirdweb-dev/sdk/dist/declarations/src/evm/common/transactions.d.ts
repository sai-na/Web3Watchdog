import { DeployTransaction, Transaction } from "../core/classes/transactions";
import { GaslessTransaction, TransactionResult } from "../core/types";
import { SDKOptionsOutput } from "../schema/sdk-options";
import { ethers } from "ethers";
export declare function buildDeployTransactionFunction<TArgs extends any[]>(fn: (...args: TArgs) => Promise<DeployTransaction>): {
    (...args: TArgs): Promise<string>;
    prepare: (...args: TArgs) => Promise<DeployTransaction>;
};
export declare function buildTransactionFunction<TArgs extends any[], TResult = TransactionResult>(fn: (...args: TArgs) => Promise<Transaction<TResult>>): {
    (...args: TArgs): Promise<TResult>;
    prepare: (...args: TArgs) => Promise<Transaction<TResult>>;
};
export declare function defaultGaslessSendFunction(transaction: GaslessTransaction, signer: ethers.Signer, provider: ethers.providers.Provider, gaslessOptions?: SDKOptionsOutput["gasless"]): Promise<string>;
export declare function biconomySendFunction(transaction: GaslessTransaction, signer: ethers.Signer, provider: ethers.providers.Provider, gaslessOptions?: SDKOptionsOutput["gasless"]): Promise<string>;
export declare function defenderSendFunction(transaction: GaslessTransaction, signer: ethers.Signer, provider: ethers.providers.Provider, gaslessOptions?: SDKOptionsOutput["gasless"]): Promise<string>;
//# sourceMappingURL=transactions.d.ts.map