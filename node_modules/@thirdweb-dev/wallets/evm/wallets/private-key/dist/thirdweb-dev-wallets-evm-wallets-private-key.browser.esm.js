import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-eea39a9a.browser.esm.js';
import { AbstractWallet } from '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import { ethers } from 'ethers';
import '../../../../dist/checkPrivateRedeclaration-3aaaa21d.browser.esm.js';
import '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import 'eventemitter3';

var _signer = /*#__PURE__*/new WeakMap();
class PrivateKeyWallet extends AbstractWallet {
  constructor(privateKey) {
    super();
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _signer, new ethers.Wallet(privateKey));
  }
  async getSigner() {
    return _classPrivateFieldGet(this, _signer);
  }
}

export { PrivateKeyWallet };
