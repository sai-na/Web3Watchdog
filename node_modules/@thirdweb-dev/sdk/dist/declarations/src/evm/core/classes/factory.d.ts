import { SDKOptions } from "../../schema/sdk-options";
import { DeployEvents } from "../../types";
import { DeploySchemaForPrebuiltContractType, NetworkInput, PrebuiltContractType } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
import type { TWFactory } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, ContractInterface } from "ethers";
import { EventEmitter } from "eventemitter3";
import { z } from "zod";
/**
 * @internal
 */
export declare class ContractFactory extends ContractWrapper<TWFactory> {
    private storage;
    private DEFAULT_VERSION_MAP;
    constructor(factoryAddr: string, network: NetworkInput, storage: ThirdwebStorage, options?: SDKOptions);
    deploy: {
        (contractType: any, contractMetadata: any, eventEmitter: EventEmitter<DeployEvents, any>, version?: number | undefined, onExecute?: (() => void) | undefined): Promise<string>;
        prepare: (contractType: any, contractMetadata: any, eventEmitter: EventEmitter<DeployEvents, any>, version?: number | undefined, onExecute?: (() => void) | undefined) => Promise<Transaction<string>>;
    };
    deployProxyByImplementation: {
        (implementationAddress: string, implementationAbi: ContractInterface, initializerFunction: string, initializerArgs: any[], eventEmitter: EventEmitter<DeployEvents, any>, onExecute?: (() => void) | undefined): Promise<string>;
        prepare: (implementationAddress: string, implementationAbi: ContractInterface, initializerFunction: string, initializerArgs: any[], eventEmitter: EventEmitter<DeployEvents, any>, onExecute?: (() => void) | undefined) => Promise<Transaction<string>>;
    };
    /**
     *
     * @param contractType
     * @param metadata
     * @param contractURI
     * @returns
     * @internal
     */
    getDeployArguments<TContractType extends PrebuiltContractType>(contractType: TContractType, metadata: z.input<DeploySchemaForPrebuiltContractType<TContractType>>, contractURI: string): Promise<any[]>;
    private getDefaultTrustedForwarders;
    private getImplementation;
    getLatestVersion(contractType: PrebuiltContractType): Promise<BigNumber>;
}
//# sourceMappingURL=factory.d.ts.map