import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-eea39a9a.browser.esm.js';
import * as ed25519 from '@noble/ed25519';
import { AbstractWallet } from '../../base/dist/thirdweb-dev-wallets-solana-wallets-base.browser.esm.js';
import '../../../../dist/checkPrivateRedeclaration-3aaaa21d.browser.esm.js';
import 'bs58';
import 'tweetnacl';

var _keypair = /*#__PURE__*/new WeakMap();
class KeypairSigner {
  constructor(keypair) {
    _classPrivateFieldInitSpec(this, _keypair, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "publicKey", void 0);
    _classPrivateFieldSet(this, _keypair, keypair);
    this.publicKey = keypair.publicKey;
  }
  async signMessage(message) {
    return ed25519.sync.sign(message, _classPrivateFieldGet(this, _keypair).secretKey.slice(0, 32));
  }
}

class KeypairWallet extends AbstractWallet {
  constructor(keypair) {
    super();
    this.signer = new KeypairSigner(keypair);
  }
  async getSigner() {
    return this.signer;
  }
}

export { KeypairWallet };
