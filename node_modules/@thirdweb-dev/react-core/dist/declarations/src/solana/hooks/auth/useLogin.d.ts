import type { LoginOptions } from "@thirdweb-dev/auth";
export interface LoginConfig {
    /**
     * The URL to redirect to on login.
     */
    redirectTo?: string;
    /**
     * Function to run on error.
     */
    onError?: (error: string) => void;
}
/**
 * Hook to securely login to a backend with the connected wallet. The backend
 * authentication URL must be configured on the ThirdwebProvider.
 *
 * @param config - Configuration for the login.
 * @returns - A function to invoke to login with the connected wallet.
 *
 * @beta
 */
export declare function useLogin(): {
    login: (options?: LoginOptions) => Promise<void>;
    isLoading: boolean;
};
//# sourceMappingURL=useLogin.d.ts.map