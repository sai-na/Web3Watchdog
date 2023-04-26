import { StyleObject, CustomizationOptionsType, Chain } from '@paperxyz/sdk-common-utilities';
import { Networkish } from '@ethersproject/providers';
import { Provider, TransactionRequest } from '@ethersproject/abstract-provider';
import { Signer, TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';
import { Bytes } from '@ethersproject/bytes';
import { Deferrable } from '@ethersproject/properties';

declare const EMBEDDED_WALLET_PATH = "/sdk/2022-08-12/embedded-wallet";
declare const WALLET_USER_ID_LOCAL_STORAGE_NAME: (clientId: string) => string;
declare const AUTH_TOKEN_LOCAL_STORAGE_NAME: (clientId: string) => string;
declare const DEVICE_SHARE_LOCAL_STORAGE_NAME: (clientId: string, userId: string) => string;
declare const DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED: (clientId: string) => string;

type IFrameCommunicatorProps = {
    link: string;
    iframeId: string;
    container?: HTMLElement;
    iframeStyles?: StyleObject;
    onIframeInitialize?: () => void;
};
declare class IframeCommunicator<T extends {
    [key: string]: any;
}> {
    private iframe;
    private POLLING_INTERVAL_SECONDS;
    private POST_LOAD_BUFFER_SECONDS;
    constructor({ link, iframeId, container, iframeStyles, onIframeInitialize, }: IFrameCommunicatorProps);
    protected onIframeLoadedInitVariables(): Promise<Record<string, any>>;
    onIframeLoadHandler(iframe: HTMLIFrameElement, prePostMessageSleepInSeconds: number, onIframeInitialize?: () => void): () => Promise<void>;
    call<ReturnData>({ procedureName, params, showIframe, }: {
        procedureName: keyof T;
        params: T[keyof T];
        showIframe?: boolean;
    }): Promise<ReturnData>;
    /**
     * This has to be called by any iframe that will be removed from the DOM.
     * Use to make sure that we reset the global loaded state of the particular iframe.src
     */
    destroy(): void;
}

declare class EmbeddedWalletIframeCommunicator<T extends {
    [key: string]: any;
}> extends IframeCommunicator<T> {
    clientId: string;
    constructor({ clientId, customizationOptions, }: {
        clientId: string;
        customizationOptions?: CustomizationOptionsType;
    });
    onIframeLoadedInitVariables(): Promise<{
        authCookie: string | null;
        deviceShareStored: string | null;
        walletUserId: string | null;
        clientId: string;
    }>;
}

declare class LocalStorage {
    protected isSupported: boolean;
    protected clientId: string;
    constructor({ clientId }: {
        clientId: string;
    });
    protected getItem(key: string): Promise<string | null>;
    protected setItem(key: string, value: string): Promise<void>;
    protected removeItem(key: string): Promise<boolean>;
    saveAuthCookie(cookie: string): Promise<void>;
    getAuthCookie(): Promise<string | null>;
    removeAuthCookie(): Promise<boolean>;
    saveDeviceShare(share: string, userId: string): Promise<void>;
    getDeviceShare(): Promise<string | null>;
    removeDeviceShare(): Promise<boolean>;
    getWalletUserId(): Promise<string | null>;
    saveWalletUserId(userId: string): Promise<void>;
    removeWalletUserId(): Promise<boolean>;
}

type ContractCallInputType = {
    contractAddress: string;
    methodInterface: `function ${string}(${string})${string}` | string;
    methodArgs: Array<unknown>;
};
type CallContractReturnType = {
    transactionHash: string;
};

type GaslessTransactionQuerierTypes = {
    callContract: {
        contractAddress: string;
        method: {
            stub: string;
            args: Array<unknown>;
        };
        chain: Chain;
    };
};
/**
 * @description GaslessTransactionMaker is used to execute gasless transactions from the embedded wallets
 */
declare class GaslessTransactionMaker {
    protected chain: Chain;
    protected clientId: string;
    protected gaslessTransactionQuerier: EmbeddedWalletIframeCommunicator<GaslessTransactionQuerierTypes>;
    constructor({ chain, clientId, querier }: ClientIdWithQuerierAndChainType);
    /**
     * @description
     * Use to call arbitrary contracts on the blockchain. Note that you have to enable {@link https://withpaper.com/dashboard/developers Sponsored Fees} in order for this to work.
     *
     * @param {string} params.contractAddress The address for which the contract call is directed too.
     * @param {string} params.methodInterface the function stub on the contract. This looks something like `function myFunctionName(address user, uint256 tokenId) external payable`. Refer to this {@link https://blog.ricmoo.com/human-readable-contract-abis-in-ethers-js-141902f4d917 ethers.js article} for more.
     * @param {Array} params.methodArgs The arguments that is to be passed to the contract in order that they are to be passed to the contract.
     * @throws if there is an error calling the contract for whatever reason.
     * @returns {{ transactionHash: string }} The transaction hash associated with the successful contract call.
     */
    callContract({ contractAddress, methodArgs, methodInterface, }: ContractCallInputType): Promise<CallContractReturnType>;
}

type SignerProcedureTypes = {
    getAddress: void;
    signMessage: {
        message: string | Bytes;
        chainId: number | undefined;
    };
    signTransaction: {
        transaction: Deferrable<TransactionRequest>;
        chainId: number | undefined;
    };
    signTypedDataV4: {
        domain: TypedDataDomain;
        types: Record<string, Array<TypedDataField>>;
        message: Record<string, unknown>;
        chainId: number | undefined;
    };
    connect: {
        provider: Provider;
    };
};
declare class EthersSigner extends Signer {
    protected querier: EmbeddedWalletIframeCommunicator<SignerProcedureTypes>;
    protected clientId: string;
    private DEFAULT_ETHEREUM_CHAIN_ID;
    constructor({ provider, clientId, querier, }: ClientIdWithQuerierType & {
        provider: Provider;
    });
    getAddress(): Promise<string>;
    signMessage(message: string | Bytes): Promise<string>;
    signTransaction(transaction: TransactionRequest): Promise<string>;
    _signTypedData(domain: SignerProcedureTypes["signTypedDataV4"]["domain"], types: SignerProcedureTypes["signTypedDataV4"]["types"], message: SignerProcedureTypes["signTypedDataV4"]["message"]): Promise<string>;
    connect(provider: Provider): EthersSigner;
}

type WalletManagementTypes = {
    createWallet: void;
    setUpNewDevice: void;
    getUserStatus: void;
};
type WalletManagementUiTypes = {
    createWalletUi: void;
    setUpNewDeviceUi: void;
};
declare class EmbeddedWallet {
    protected clientId: string;
    protected chain: Chain;
    protected walletManagerQuerier: EmbeddedWalletIframeCommunicator<WalletManagementTypes & WalletManagementUiTypes>;
    protected localStorage: LocalStorage;
    gasless: GaslessTransactionMaker;
    /**
     * Not meant to be initialized directly. Call {@link .initializeUser} to get an instance
     * @param param0
     */
    constructor({ clientId, chain, querier }: ClientIdWithQuerierAndChainType);
    /**
     * @description
     * Switches the chain that the user wallet is currently on.
     * @example
     * // user wallet will be set to Polygon
     * const Paper = new PaperEmbeddedWalletSdk({clientId: "", chain: "Polygon"});
     * const user = await Paper.initializeUser();
     * // Switch the user wallet to Mumbai
     * await user.wallet.setChain({ chain: "Mumbai" });
     * @param {Chain} params.chain The chain that we are changing the user wallet too
     */
    setChain({ chain }: {
        chain: Chain;
    }): Promise<void>;
    /**
     * Returns an Ethers.Js compatible signer that you can use in conjunction with the rest of dApp
     * @example
     * const Paper = new PaperEmbeddedWalletSdk({clientId: "", chain: "Polygon"});
     * const user = await Paper.getUser();
     * if (user.status === UserStatus.LOGGED_IN_WALLET_INITIALIZED) {
     *    // returns a signer on the Polygon mainnet
     *    const signer = await user.getEthersJsSigner();
     *    // returns a signer on the specified RPC endpoints
     *    const signer = await user.getEthersJsSigner({rpcEndpoint: "https://eth-rpc.gateway.pokt.network"});
     * }
     * @param {Networkish} network.rpcEndpoint the rpc url where calls will be routed through
     * @throws If attempting to call the function without the user wallet initialize on their current device. This should never happen if call {@link PaperEmbeddedWalletSdk.initializeUser} before accessing this function
     * @returns A signer that is compatible with Ether.js. Defaults to the public rpc on the chain specified when initializing the {@link PaperEmbeddedWalletSdk} instance
     */
    getEthersJsSigner(network?: {
        rpcEndpoint: Networkish;
    }): Promise<EthersSigner>;
}

type ClientIdConstructorType = {
    clientId: string;
};
type PaperConstructorType = ClientIdConstructorType & {
    chain: Chain;
    styles?: CustomizationOptionsType;
};
type ClientIdWithQuerierType = ClientIdConstructorType & {
    querier: EmbeddedWalletIframeCommunicator<any>;
};
type ClientIdWithQuerierAndChainType = ClientIdWithQuerierType & {
    chain: Chain;
};
type AuthDetails = {
    email: string;
    userWalletId: string;
};
type InitializedUser = {
    status: UserStatus.LOGGED_IN_WALLET_INITIALIZED;
    wallet: EmbeddedWallet;
    walletAddress: string;
    authDetails: AuthDetails;
};
declare enum UserStatus {
    LOGGED_OUT = "Logged Out",
    LOGGED_IN_WALLET_INITIALIZED = "Logged In, Wallet Initialized"
}
declare enum UserWalletStatus {
    LOGGED_OUT = "Logged Out",
    LOGGED_IN_WALLET_UNINITIALIZED = "Logged In, Wallet Uninitialized",
    LOGGED_IN_NEW_DEVICE = "Logged In, New Device",
    LOGGED_IN_WALLET_INITIALIZED = "Logged In, Wallet Initialized"
}
type WalletAddressObjectType = {
    walletAddress: string;
};
type SetUpWalletReturnType = WalletAddressObjectType & {
    initialUserStatus: UserWalletStatus;
};
type SetUpWalletRpcReturnType = WalletAddressObjectType & {
    deviceShareStored: string;
    isIframeStorageEnabled: boolean;
};
type SendEmailOtpReturnType = {
    isNewUser: boolean;
    isNewDevice: boolean;
};
type LogoutReturnType = {
    success: boolean;
};
type GetAuthDetailsReturnType = {
    authDetails?: AuthDetails;
};
type GetUserWalletStatusRpcReturnType = {
    status: UserWalletStatus.LOGGED_OUT;
    user: undefined;
} | {
    status: UserWalletStatus.LOGGED_IN_WALLET_UNINITIALIZED;
    user: {
        authDetails: AuthDetails;
    };
} | {
    status: UserWalletStatus.LOGGED_IN_NEW_DEVICE;
    user: {
        authDetails: AuthDetails;
        walletAddress: string;
    };
} | {
    status: UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED;
    user: Omit<InitializedUser, "wallet" | "status">;
};
type GetUserWalletStatusFnReturnType = {
    status: UserWalletStatus.LOGGED_OUT;
    user: undefined;
} | {
    status: UserWalletStatus.LOGGED_IN_WALLET_UNINITIALIZED;
    user: {
        authDetails: AuthDetails;
    };
} | {
    status: UserWalletStatus.LOGGED_IN_NEW_DEVICE;
    user: {
        authDetails: AuthDetails;
        walletAddress: string;
    };
} | {
    status: UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED;
    user: Omit<InitializedUser, "status">;
};
type GetUser = {
    status: UserStatus.LOGGED_OUT;
} | InitializedUser;

declare enum AuthProvider {
    PAPER_EMAIL_OTP = "PaperEmailOTP",
    GOOGLE = "Google",
    AUTH0 = "Auth0",
    CUSTOM_JWT = "CustomJWT"
}
type GetSocialLoginClientIdReturnType = {
    clientId: string;
};
type StoredTokenType = {
    jwtToken: string;
    authProvider: AuthProvider;
    authDetails: AuthDetails;
    developerClientId: string;
};
type AuthStoredTokenWithCookieReturnType = {
    storedToken: StoredTokenType & {
        cookieString: string;
        shouldStoreCookieString: boolean;
        isNewUser: boolean;
    };
};
type AuthAndWalletRpcReturnType = AuthStoredTokenWithCookieReturnType & {
    walletDetails: SetUpWalletRpcReturnType;
};
type AuthLoginReturnType = {
    user: InitializedUser;
};

type GetAddressReturnType = {
    address: string;
};
type SignMessageReturnType = {
    signedMessage: string;
};
type SignTransactionReturnType = {
    signedTransaction: string;
};
type SignedTypedDataReturnType = {
    signedTypedData: string;
};

type AuthQuerierTypes = {
    loginWithJwtAuthCallback: {
        token: string;
        authProvider: AuthProvider;
        recoveryCode?: string;
    };
    loginWithPaperModal: void | {
        email: string;
    };
    logout: void;
    sendPaperEmailLoginOtp: {
        email: string;
    };
    verifyPaperEmailLoginOtp: {
        email: string;
        otp: string;
        recoveryCode?: string;
    };
};
declare class Auth {
    protected clientId: string;
    protected AuthQuerier: EmbeddedWalletIframeCommunicator<AuthQuerierTypes>;
    protected localStorage: LocalStorage;
    protected onAuthSuccess: (authResults: AuthAndWalletRpcReturnType) => Promise<AuthLoginReturnType>;
    /**
     * Used to manage the user's auth states. This should not be instantiated directly.
     * Call {@link PaperEmbeddedWalletSdk.auth} instead.
     *
     * Authentication settings can be managed via the [authentication settings dashboard](https://withpaper.com/dashboard/auth-settings)
     * @param {string} params.clientId the clientId associated with the various authentication settings
     */
    constructor({ clientId, querier, onAuthSuccess, }: ClientIdWithQuerierType & {
        onAuthSuccess: (authDetails: AuthAndWalletRpcReturnType) => Promise<AuthLoginReturnType>;
    });
    private postLogin;
    /**
     * @description
     * Used to log the user in with an oauth login flow
     *
     * Note that you have to either enable "Auth0" or "Custom JSON Web Token" in the [auth setting dashboard](https://withpaper.com/dashboard/auth-settings) in order to use this
     * @param {string} jwtParams.token The associate token from the oauth callback
     * @param {AuthProvider} jwtParams.provider The Auth provider that is being used
     * @param {string} jwtParams.recoveryCode This has to be passed in if the user is not logging in for the first time in order for us to decrypt and recover the users wallet
     * @returns {{user: InitializedUser}} An InitializedUser object containing the user's status, wallet, authDetails, and more
     */
    loginWithJwtAuth({ token, authProvider, recoveryCode, }: AuthQuerierTypes["loginWithJwtAuthCallback"]): Promise<AuthLoginReturnType>;
    /**
     * @description
     * Used to log the user into their Paper wallet on your platform via a myriad of auth providers
     *
     * @example
     * const Paper = new PaperEmbeddedWalletSdk({clientId: "YOUR_CLIENT_ID", chain: "Polygon"})
     * try {
     *   const user = await Paper.auth.loginWithPaperModal();
     *   // user is now logged in
     * } catch (e) {
     *   // User closed modal or something else went wrong during the authentication process
     *   console.error(e)
     * }
     *
     * @returns {{user: InitializedUser}} An InitializedUser object. See {@link PaperEmbeddedWalletSdk.getUser} for more
     */
    loginWithPaperModal(): Promise<AuthLoginReturnType>;
    /**
     * @description
     * Used to log the user into their Paper wallet using email OTP
     *
     * @example
     *  const Paper = new PaperEmbeddedWalletSdk({clientId: "", chain: "Polygon"});
     *  try {
     *    // prompts user to enter the code they received
     *    const user = await Paper.auth.loginWithPaperEmailOtp({ email : "you@example.com" });
     *    // user is now logged in
     *  } catch (e) {
     *    // User closed the OTP modal or something else went wrong during the authentication process
     *    console.error(e)
     *  }
     * @param {string} props.email We will send the email an OTP that needs to be entered in order for them to be logged in.
     * @returns {{user: InitializedUser}} An InitializedUser object. See {@link PaperEmbeddedWalletSdk.getUser} for more
     */
    loginWithPaperEmailOtp({ email, }: {
        email: string;
    }): Promise<AuthLoginReturnType>;
    /**
     * @description
     * A headless way to send the users at {email} an OTP code.
     * You need to then call {@link Auth.verifyPaperEmailLoginOtp} in order to complete the login process
     *
     * @example
     *  const Paper = new PaperEmbeddedWalletSdk({clientId: "", chain: "Polygon"});
     *  // sends user an OTP code
     * try {
     *    const { isNewUser } = await Paper.auth.sendPaperEmailLoginOtp({ email : "you@example.com" });
     * } catch(e) {
     *    // Error Sending user's email an OTP code
     *    console.error(e);
     * }
     *
     * // Then when your user is ready to verify their OTP
     * try {
     *    const user = await Paper.auth.verifyPaperEmailLoginOtp({ email: "you@example.com", otp: "6-DIGIT_CODE_HERE", recoveryCode: "Required if user is an existing user. i.e. !isNewUser"});
     * } catch(e) {
     *    // Error verifying the OTP code
     *    console.error(e)
     * }
     *
     * @param {string} props.email We will send the email an OTP that needs to be entered in order for them to be logged in.
     * @returns {{ success: boolean, isNewUser: boolean }} Success: indicating if the email was successfully sent (Note the email could still end up in the user's spam folder). IsNewUser indicates if the user is a new user to your platform
     */
    sendPaperEmailLoginOtp({ email, }: AuthQuerierTypes["sendPaperEmailLoginOtp"]): Promise<SendEmailOtpReturnType>;
    /**
     *  @description
     * Used to verify the otp that the user receives from  Paper
     *
     * See {@link Auth.sendPaperEmailLoginOtp} for how the headless call flow looks like
     *
     * @param {string} props.email We will send the email an OTP that needs to be entered in order for them to be logged in.
     * @param {string} props.otp The code that the user received in their email
     * @param {string} props.recoveryCode The code that is first sent to the user when they sign up. Required if user is an existing user. i.e. !isNewUser from return params of {@link Auth.sendPaperEmailLoginOtp}
     * @returns {{user: InitializedUser}} An InitializedUser object containing the user's status, wallet, authDetails, and more
     */
    verifyPaperEmailLoginOtp({ email, otp, recoveryCode, }: AuthQuerierTypes["verifyPaperEmailLoginOtp"]): Promise<AuthLoginReturnType>;
    /**
     * @description
     * Logs any existing user out of their wallet.
     * @returns {{success: boolean}} true if a user is successfully logged out. false if there's no user currently logged in.
     */
    logout(): Promise<LogoutReturnType>;
}

declare class PaperEmbeddedWalletSdk {
    protected clientId: string;
    protected querier: EmbeddedWalletIframeCommunicator<AuthQuerierTypes>;
    private wallet;
    /**
     * Used to manage the Auth state of the user.
     */
    auth: Auth;
    /**
     * @example
     * const Paper = new PaperEmbeddedWalletSdk({ clientId: "", chain: "Goerli" });
     * @param {string} initParams.clientId the clientId found on the {@link https://withpaper.com/dashboard/developers developer's dashboard}
     * @param {Chain} initParams.chain sets the default chain that the EmbeddedWallet will live on.
     * @param {CustomizationOptionsType} initParams.styles sets the default style override for any modal that pops up asking for user's details when creating wallet or logging in.
     */
    constructor({ clientId, chain, styles }: PaperConstructorType);
    /**
     * Gets the usr if they are logged in
     * @example
     *  const user = await Paper.getUser();
     *  switch (user.status) {
     *     case UserStatus.LOGGED_OUT: {
     *       // User is logged out, call one of the auth methods on Paper.auth to authenticate the user
     *       break;
     *     }
     *     case UserStatus.LOGGED_IN_WALLET_INITIALIZED: {
     *       // user is logged in and wallet is all set up.
     *       // You have access to:
     *       user.status;
     *       user.authDetails;
     *       user.walletAddress;
     *       user.wallet;
     *       break;
     *     }
     *}
     * @returns {GetUser} an object to containing various information on the user statuses
     */
    getUser(): Promise<GetUser>;
}

export { AUTH_TOKEN_LOCAL_STORAGE_NAME, AuthAndWalletRpcReturnType, AuthDetails, AuthLoginReturnType, AuthProvider, AuthStoredTokenWithCookieReturnType, CallContractReturnType, ClientIdConstructorType, ClientIdWithQuerierAndChainType, ClientIdWithQuerierType, ContractCallInputType, DEVICE_SHARE_LOCAL_STORAGE_NAME, DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED, EMBEDDED_WALLET_PATH, GetAddressReturnType, GetAuthDetailsReturnType, GetSocialLoginClientIdReturnType, GetUser, GetUserWalletStatusFnReturnType, GetUserWalletStatusRpcReturnType, InitializedUser, LogoutReturnType, PaperConstructorType, PaperEmbeddedWalletSdk, SendEmailOtpReturnType, SetUpWalletReturnType, SetUpWalletRpcReturnType, SignMessageReturnType, SignTransactionReturnType, SignedTypedDataReturnType, StoredTokenType, UserStatus, UserWalletStatus, WALLET_USER_ID_LOCAL_STORAGE_NAME, WalletAddressObjectType };
