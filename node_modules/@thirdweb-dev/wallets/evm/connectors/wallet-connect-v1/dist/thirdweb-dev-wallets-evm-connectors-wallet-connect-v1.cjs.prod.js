'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateMethodGet = require('../../../../dist/classPrivateMethodGet-5131251f.cjs.prod.js');
var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-422af97a.cjs.prod.js');
var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var ethers = require('ethers');
var errors = require('../../../../dist/errors-615779a1.cjs.prod.js');
var normalizeChainId = require('../../../../dist/normalizeChainId-a44d9dec.cjs.prod.js');
require('../../../../dist/checkPrivateRedeclaration-fd0a01ed.cjs.prod.js');
require('@thirdweb-dev/chains');
require('eventemitter3');

/**
 * Wallets that support chain switching through WalletConnect
 * - imToken (token.im)
 * - MetaMask (metamask.io)
 * - Rainbow (rainbow.me)
 * - Trust Wallet (trustwallet.com)
 */
// const switchChainAllowedRegex = /(imtoken|metamask|rainbow|trust wallet)/i;

const LAST_USED_CHAIN_ID = "last-used-chain-id";
const LAST_SESSION = "last-session";
var _provider = /*#__PURE__*/new WeakMap();
var _storage = /*#__PURE__*/new WeakMap();
var _handleConnected = /*#__PURE__*/new WeakSet();
var _removeListeners = /*#__PURE__*/new WeakSet();
class WalletConnectV1Connector extends errors.Connector {
  constructor(config) {
    super(config);
    classPrivateMethodGet._classPrivateMethodInitSpec(this, _removeListeners);
    classPrivateMethodGet._classPrivateMethodInitSpec(this, _handleConnected);
    defineProperty._defineProperty(this, "id", "walletConnectV1");
    defineProperty._defineProperty(this, "name", "WalletConnectV1");
    defineProperty._defineProperty(this, "ready", true);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _storage, {
      writable: true,
      value: void 0
    });
    defineProperty._defineProperty(this, "walletName", void 0);
    defineProperty._defineProperty(this, "onSwitchChain", () => {
      this.emit("message", {
        type: "switch_chain"
      });
    });
    defineProperty._defineProperty(this, "onDisplayUri", async (error, payload) => {
      if (error) {
        this.emit("message", {
          data: error,
          type: "display_uri_error"
        });
      }
      this.emit("message", {
        data: payload.params[0],
        type: "display_uri"
      });
    });
    defineProperty._defineProperty(this, "onRequestSent", (error, payload) => {
      if (error) {
        this.emit("message", {
          data: error,
          type: "request"
        });
      }
      this.emit("message", {
        data: payload.params[0],
        type: "request"
      });
    });
    defineProperty._defineProperty(this, "onMessage", message => {
      this.emit("message", message);
    });
    defineProperty._defineProperty(this, "onAccountsChanged", accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: ethers.utils.getAddress(accounts[0])
        });
      }
    });
    defineProperty._defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId.normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      classPrivateFieldSet._classPrivateFieldGet(this, _storage).setItem(LAST_USED_CHAIN_ID, String(chainId));
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    defineProperty._defineProperty(this, "onDisconnect", async () => {
      this.walletName = undefined;
      classPrivateFieldSet._classPrivateFieldGet(this, _storage).removeItem(LAST_USED_CHAIN_ID);
      classPrivateFieldSet._classPrivateFieldGet(this, _storage).removeItem(LAST_SESSION);
      classPrivateMethodGet._classPrivateMethodGet(this, _removeListeners, _removeListeners2).call(this);
      this.emit("disconnect");
    });
    classPrivateFieldSet._classPrivateFieldSet(this, _storage, config.storage);
  }
  async connect() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      let targetChainId = chainId;
      if (!targetChainId) {
        const lastUsedChainIdStr = await classPrivateFieldSet._classPrivateFieldGet(this, _storage).getItem(LAST_USED_CHAIN_ID);
        const lastUsedChainId = lastUsedChainIdStr ? parseInt(lastUsedChainIdStr) : undefined;
        if (lastUsedChainId && !this.isChainUnsupported(lastUsedChainId)) {
          targetChainId = lastUsedChainId;
        }
      }
      const provider = await this.getProvider({
        chainId: targetChainId,
        create: true
      });
      this.setupListeners();

      // Defer message to the next tick to ensure wallet connect data (provided by `.enable()`) is available
      setTimeout(() => this.emit("message", {
        type: "connecting"
      }), 0);
      const accounts = await provider.enable();
      const account = ethers.utils.getAddress(accounts[0]);
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);

      // Not all WalletConnect options support programmatic chain switching
      // Only enable for wallet options that do
      this.walletName = provider.connector?.peerMeta?.name ?? "";

      // switch to target chainId
      if (chainId) {
        try {
          await this.switchChain(chainId);
          id = chainId;
          unsupported = this.isChainUnsupported(id);
        } catch (e) {
          console.error(`could not switch to desired chain id: ${chainId} `, e);
        }
      }
      classPrivateMethodGet._classPrivateMethodGet(this, _handleConnected, _handleConnected2).call(this);
      this.emit("connect", {
        account,
        chain: {
          id,
          unsupported
        },
        provider
      });
      return {
        account,
        chain: {
          id,
          unsupported
        },
        provider: new ethers.providers.Web3Provider(provider)
      };
    } catch (error) {
      if (/user closed modal/i.test(error.message)) {
        throw new errors.UserRejectedRequestError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    await provider.disconnect();
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = provider.accounts;
    // return checksum address
    return ethers.utils.getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = normalizeChainId.normalizeChainId(provider.chainId);
    return chainId;
  }
  async getProvider() {
    let {
      chainId,
      create
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Force create new provider
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _provider) || chainId || create) {
      const rpc = !this.options?.infuraId ? this.chains.reduce((rpc_, chain) => ({
        ...rpc_,
        [chain.chainId]: chain.rpc[0]
      }), {}) : {};
      const WalletConnectProvider = (await Promise.resolve().then(function () { return require('../../../../dist/index-e0f2f40f.cjs.prod.js'); })).default;
      const sessionStr = await classPrivateFieldSet._classPrivateFieldGet(this, _storage).getItem(LAST_SESSION);
      const session = sessionStr ? JSON.parse(sessionStr) : undefined;
      this.walletName = session?.peerMeta?.name || undefined;
      classPrivateFieldSet._classPrivateFieldSet(this, _provider, new WalletConnectProvider({
        ...this.options,
        chainId,
        rpc: {
          ...rpc,
          ...this.options?.rpc
        },
        session: session ? session : undefined
      }));
    }
    return classPrivateFieldSet._classPrivateFieldGet(this, _provider);
  }
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider({
      chainId
    }), this.getAccount()]);
    return new ethers.providers.Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    try {
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    const provider = await this.getProvider();
    const chainIdHex = ethers.utils.hexValue(chainId);
    try {
      // Set up a race between `wallet_switchEthereumChain` & the `chainChanged` event
      // to ensure the chain has been switched. This is because there could be a case
      // where a wallet may not resolve the `wallet_switchEthereumChain` method, or
      // resolves slower than `chainChanged`.
      await Promise.race([provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: chainIdHex
        }]
      }), new Promise(res => this.on("change", _ref => {
        let {
          chain
        } = _ref;
        if (chain?.id === chainId) {
          res(chainId);
        }
      }))]);
      return this.chains.find(x => x.chainId === chainId) ?? {
        chainId: chainId,
        name: `Chain ${chainIdHex}`,
        network: `${chainIdHex}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        shortName: "eth",
        chain: "ETH",
        slug: "ethereum",
        testnet: false
      };
    } catch (error) {
      const message = typeof error === "string" ? error : error?.message;
      if (/user rejected request/i.test(message)) {
        throw new errors.UserRejectedRequestError(error);
      }
      const chain = this.chains.find(x => x.chainId === chainId);

      // if chain is not supported
      if (!chain) {
        throw new errors.SwitchChainError(`Chain ${chainId} is not added in the list of supported chains`);
      }
      console.log({
        chain
      });

      // if chain is not configured in the wallet
      if (/Unrecognized chain ID/i.test(message)) {
        // configure it
        this.emit("message", {
          type: "add_chain"
        });
        const blockExplorerUrls = this.getBlockExplorerUrls(chain);
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: chainIdHex,
            chainName: chain.name,
            nativeCurrency: chain.nativeCurrency,
            rpcUrls: chain.rpc,
            blockExplorerUrls
          }]
        });
        return chain;
      } else {
        throw new errors.SwitchChainError(error);
      }
    }
  }
  async setupListeners() {
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _provider)) {
      return;
    }
    classPrivateFieldSet._classPrivateFieldGet(this, _provider).on("accountsChanged", this.onAccountsChanged);
    classPrivateFieldSet._classPrivateFieldGet(this, _provider).on("chainChanged", this.onChainChanged);
    classPrivateFieldSet._classPrivateFieldGet(this, _provider).on("disconnect", this.onDisconnect);
    classPrivateFieldSet._classPrivateFieldGet(this, _provider).on("message", this.onMessage);
    classPrivateFieldSet._classPrivateFieldGet(this, _provider).on("switchChain", this.onSwitchChain);
    classPrivateFieldSet._classPrivateFieldGet(this, _provider).on("display_uri", this.onDisplayUri);
    classPrivateFieldSet._classPrivateFieldGet(this, _provider).on("call_request_sent", this.onRequestSent);
  }
}
async function _handleConnected2() {
  const session = classPrivateFieldSet._classPrivateFieldGet(this, _provider)?.connector.session;
  this.walletName = session?.peerMeta?.name || "";
  const sessionStr = JSON.stringify(session);
  classPrivateFieldSet._classPrivateFieldGet(this, _storage).setItem(LAST_SESSION, sessionStr);
}
function _removeListeners2() {
  if (!classPrivateFieldSet._classPrivateFieldGet(this, _provider)) {
    return;
  }
  classPrivateFieldSet._classPrivateFieldGet(this, _provider).removeListener("accountsChanged", this.onAccountsChanged);
  classPrivateFieldSet._classPrivateFieldGet(this, _provider).removeListener("chainChanged", this.onChainChanged);
  classPrivateFieldSet._classPrivateFieldGet(this, _provider).removeListener("disconnect", this.onDisconnect);
  classPrivateFieldSet._classPrivateFieldGet(this, _provider).removeListener("message", this.onMessage);
  classPrivateFieldSet._classPrivateFieldGet(this, _provider).removeListener("switchChain", this.onSwitchChain);
  classPrivateFieldSet._classPrivateFieldGet(this, _provider).removeListener("display_uri", this.onDisplayUri);
  classPrivateFieldSet._classPrivateFieldGet(this, _provider).removeListener("call_request_sent", this.onRequestSent);
}

exports.WalletConnectV1Connector = WalletConnectV1Connector;
