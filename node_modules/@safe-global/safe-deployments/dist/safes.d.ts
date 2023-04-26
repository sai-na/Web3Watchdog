import { DeploymentFilter, SingletonDeployment } from './types';
export declare const _safeDeployments: SingletonDeployment[];
export declare const getSafeSingletonDeployment: (filter?: DeploymentFilter | undefined) => SingletonDeployment | undefined;
export declare const _safeL2Deployments: SingletonDeployment[];
export declare const getSafeL2SingletonDeployment: (filter?: DeploymentFilter | undefined) => SingletonDeployment | undefined;
