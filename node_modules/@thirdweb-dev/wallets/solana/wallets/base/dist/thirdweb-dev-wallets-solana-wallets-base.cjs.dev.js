'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var bs58 = require('bs58');
var nacl = require('tweetnacl');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var bs58__default = /*#__PURE__*/_interopDefault(bs58);
var nacl__default = /*#__PURE__*/_interopDefault(nacl);

class AbstractWallet {
  constructor() {
    defineProperty._defineProperty(this, "type", "solana");
    defineProperty._defineProperty(this, "signer", void 0);
  }
  async getAddress() {
    const signer = await this.getCachedSigner();
    return signer.publicKey.toBase58();
  }
  async signMessage(message) {
    const signer = await this.getCachedSigner();
    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await signer.signMessage(encodedMessage);
    const signature = bs58__default["default"].encode(signedMessage);
    return signature;
  }
  async verifySignature(message, signature, address) {
    return nacl__default["default"].sign.detached.verify(new TextEncoder().encode(message), bs58__default["default"].decode(signature), bs58__default["default"].decode(address));
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

exports.AbstractWallet = AbstractWallet;
