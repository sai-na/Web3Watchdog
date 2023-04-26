import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import bs58 from 'bs58';
import nacl from 'tweetnacl';

class AbstractWallet {
  constructor() {
    _defineProperty(this, "type", "solana");
    _defineProperty(this, "signer", void 0);
  }
  async getAddress() {
    const signer = await this.getCachedSigner();
    return signer.publicKey.toBase58();
  }
  async signMessage(message) {
    const signer = await this.getCachedSigner();
    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await signer.signMessage(encodedMessage);
    const signature = bs58.encode(signedMessage);
    return signature;
  }
  async verifySignature(message, signature, address) {
    return nacl.sign.detached.verify(new TextEncoder().encode(message), bs58.decode(signature), bs58.decode(address));
  }
  async getCachedSigner() {
    if (!!this.signer) {
      return this.signer;
    }
    this.signer = await this.getSigner();
    if (!this.signer) {
      throw new Error("Unable to get a signer!");
    }
    return this.signer;
  }
}

export { AbstractWallet };
