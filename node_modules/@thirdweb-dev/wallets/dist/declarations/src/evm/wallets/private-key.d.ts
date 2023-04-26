import { AbstractWallet } from "./abstract";
import { ethers } from "ethers";
export declare class PrivateKeyWallet extends AbstractWallet {
    #private;
    constructor(privateKey: string);
    getSigner(): Promise<ethers.Signer>;
}
//# sourceMappingURL=private-key.d.ts.map