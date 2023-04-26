'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-d86606c4.cjs.dev.js');
var ed25519 = require('@noble/ed25519');
var solana_wallets_base_dist_thirdwebDevWalletsSolanaWalletsBase = require('../../base/dist/thirdweb-dev-wallets-solana-wallets-base.cjs.dev.js');
require('../../../../dist/checkPrivateRedeclaration-09e2947a.cjs.dev.js');
require('bs58');
require('tweetnacl');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var ed25519__namespace = /*#__PURE__*/_interopNamespace(ed25519);

var _keypair = /*#__PURE__*/new WeakMap();
class KeypairSigner {
  constructor(keypair) {
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _keypair, {
      writable: true,
      value: void 0
    });
    defineProperty._defineProperty(this, "publicKey", void 0);
    classPrivateFieldSet._classPrivateFieldSet(this, _keypair, keypair);
    this.publicKey = keypair.publicKey;
  }
  async signMessage(message) {
    return ed25519__namespace.sync.sign(message, classPrivateFieldSet._classPrivateFieldGet(this, _keypair).secretKey.slice(0, 32));
  }
}

class KeypairWallet extends solana_wallets_base_dist_thirdwebDevWalletsSolanaWalletsBase.AbstractWallet {
  constructor(keypair) {
    super();
    this.signer = new KeypairSigner(keypair);
  }
  async getSigner() {
    return this.signer;
  }
}

exports.KeypairWallet = KeypairWallet;
