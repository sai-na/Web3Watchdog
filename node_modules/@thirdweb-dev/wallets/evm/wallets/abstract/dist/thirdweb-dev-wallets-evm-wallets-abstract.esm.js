import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { providers, Contract, utils } from 'ethers';
import EventEmitter from 'eventemitter3';

// TODO improve this
function chainIdToThirdwebRpc(chainId) {
  return `https://${chainId}.rpc.thirdweb.com`;
}
const EIP1271_ABI = ["function isValidSignature(bytes32 _message, bytes _signature) public view returns (bytes4)"];
const EIP1271_MAGICVALUE = "0x1626ba7e";
async function checkContractWalletSignature(message, signature, address, chainId) {
  const provider = new providers.JsonRpcProvider(chainIdToThirdwebRpc(chainId));
  const walletContract = new Contract(address, EIP1271_ABI, provider);
  const _hashMessage = utils.hashMessage(message);
  try {
    const res = await walletContract.isValidSignature(_hashMessage, signature);
    return res === EIP1271_MAGICVALUE;
  } catch {
    return false;
  }
}
class AbstractWallet extends EventEmitter {
  constructor() {
    super(...arguments);
    _defineProperty(this, "type", "evm");
    _defineProperty(this, "signerPromise", void 0);
  }
  /**
   * @returns the account address from connected wallet
   */
  async getAddress() {
    const signer = await this.getCachedSigner();
    return signer.getAddress();
  }

  /**
   * @returns the chain id from connected wallet
   */
  async getChainId() {
    const signer = await this.getCachedSigner();
    return signer.getChainId();
  }

  /**
   * @returns the signature of the message
   */
  async signMessage(message) {
    const signer = await this.getCachedSigner();
    return await signer.signMessage(message);
  }

  /**
   * verify the signature of a message
   * @returns `true` if the signature is valid, `false` otherwise
   */
  async verifySignature(message, signature, address, chainId) {
    const messageHash = utils.hashMessage(message);
    const messageHashBytes = utils.arrayify(messageHash);
    const recoveredAddress = utils.recoverAddress(messageHashBytes, signature);
    if (recoveredAddress === address) {
      return true;
    }

    // Check if the address is a smart contract wallet
    if (chainId !== undefined) {
      try {
        const isValid = await checkContractWalletSignature(message, signature, address, chainId || 1);
        return isValid;
      } catch {
        // no-op
      }
    }
    return false;
  }
  async getCachedSigner() {
    // if we already have a signer promise, return that
    if (this.signerPromise) {
      return this.signerPromise;
    }
    this.signerPromise = this.getSigner().catch(() => {
      this.signerPromise = undefined;
      throw new Error("Unable to get a signer!");
    });
    return this.signerPromise;
  }
}

export { AbstractWallet, checkContractWalletSignature };
