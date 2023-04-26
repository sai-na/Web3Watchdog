import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from '../../../../dist/classPrivateMethodGet-9d546189.browser.esm.js';
import { _ as _classPrivateFieldInitSpec, b as _classPrivateFieldGet, a as _classPrivateFieldSet } from '../../../../dist/classPrivateFieldSet-eea39a9a.browser.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { utils, providers } from 'ethers';
import { C as Connector, U as UserRejectedRequestError, S as SwitchChainError } from '../../../../dist/errors-e1a2656b.browser.esm.js';
import { n as normalizeChainId } from '../../../../dist/normalizeChainId-e4cc0175.browser.esm.js';
import '../../../../dist/checkPrivateRedeclaration-3aaaa21d.browser.esm.js';
import '@thirdweb-dev/chains';
import 'eventemitter3';

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
class WalletConnectV1Connector extends Connector {
  constructor(config) {
    super(config);
    _classPrivateMethodInitSpec(this, _removeListeners);
    _classPrivateMethodInitSpec(this, _handleConnected);
    _defineProperty(this, "id", "walletConnectV1");
    _defineProperty(this, "name", "WalletConnectV1");
    _defineProperty(this, "ready", true);
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _storage, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "walletName", void 0);
    _defineProperty(this, "onSwitchChain", () => {
      this.emit("message", {
        type: "switch_chain"
      });
    });
    _defineProperty(this, "onDisplayUri", async (error, payload) => {
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
    _defineProperty(this, "onRequestSent", (error, payload) => {
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
    _defineProperty(this, "onMessage", message => {
      this.emit("message", message);
    });
    _defineProperty(this, "onAccountsChanged", accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: utils.getAddress(accounts[0])
        });
      }
    });
    _defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      _classPrivateFieldGet(this, _storage).setItem(LAST_USED_CHAIN_ID, String(chainId));
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    _defineProperty(this, "onDisconnect", async () => {
      this.walletName = undefined;
      _classPrivateFieldGet(this, _storage).removeItem(LAST_USED_CHAIN_ID);
      _classPrivateFieldGet(this, _storage).removeItem(LAST_SESSION);
      _classPrivateMethodGet(this, _removeListeners, _removeListeners2).call(this);
      this.emit("disconnect");
    });
    _classPrivateFieldSet(this, _storage, config.storage);
  }
  async connect() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      let targetChainId = chainId;
      if (!targetChainId) {
        const lastUsedChainIdStr = await _classPrivateFieldGet(this, _storage).getItem(LAST_USED_CHAIN_ID);
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
      const account = utils.getAddress(accounts[0]);
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
      _classPrivateMethodGet(this, _handleConnected, _handleConnected2).call(this);
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
        provider: new providers.Web3Provider(provider)
      };
    } catch (error) {
      if (/user closed modal/i.test(error.message)) {
        throw new UserRejectedRequestError(error);
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
    return utils.getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = normalizeChainId(provider.chainId);
    return chainId;
  }
  async getProvider() {
    let {
      chainId,
      create
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Force create new provider
    if (!_classPrivateFieldGet(this, _provider) || chainId || create) {
      const rpc = !this.options?.infuraId ? this.chains.reduce((rpc_, chain) => ({
        ...rpc_,
        [chain.chainId]: chain.rpc[0]
      }), {}) : {};
      const WalletConnectProvider = (await import('../../../../dist/index-42b0f5f5.browser.esm.js')).default;
      const sessionStr = await _classPrivateFieldGet(this, _storage).getItem(LAST_SESSION);
      const session = sessionStr ? JSON.parse(sessionStr) : undefined;
      this.walletName = session?.peerMeta?.name || undefined;
      _classPrivateFieldSet(this, _provider, new WalletConnectProvider({
        ...this.options,
        chainId,
        rpc: {
          ...rpc,
          ...this.options?.rpc
        },
        session: session ? session : undefined
      }));
    }
    return _classPrivateFieldGet(this, _provider);
  }
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider({
      chainId
    }), this.getAccount()]);
    return new providers.Web3Provider(provider, chainId).getSigner(account);
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
    const chainIdHex = utils.hexValue(chainId);
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
        throw new UserRejectedRequestError(error);
      }
      const chain = this.chains.find(x => x.chainId === chainId);

      // if chain is not supported
      if (!chain) {
        throw new SwitchChainError(`Chain ${chainId} is not added in the list of supported chains`);
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
        throw new SwitchChainError(error);
      }
    }
  }
  async setupListeners() {
    if (!_classPrivateFieldGet(this, _provider)) {
      return;
    }
    _classPrivateFieldGet(this, _provider).on("accountsChanged", this.onAccountsChanged);
    _classPrivateFieldGet(this, _provider).on("chainChanged", this.onChainChanged);
    _classPrivateFieldGet(this, _provider).on("disconnect", this.onDisconnect);
    _classPrivateFieldGet(this, _provider).on("message", this.onMessage);
    _classPrivateFieldGet(this, _provider).on("switchChain", this.onSwitchChain);
    _classPrivateFieldGet(this, _provider).on("display_uri", this.onDisplayUri);
    _classPrivateFieldGet(this, _provider).on("call_request_sent", this.onRequestSent);
  }
}
async function _handleConnected2() {
  const session = _classPrivateFieldGet(this, _provider)?.connector.session;
  this.walletName = session?.peerMeta?.name || "";
  const sessionStr = JSON.stringify(session);
  _classPrivateFieldGet(this, _storage).setItem(LAST_SESSION, sessionStr);
}
function _removeListeners2() {
  if (!_classPrivateFieldGet(this, _provider)) {
    return;
  }
  _classPrivateFieldGet(this, _provider).removeListener("accountsChanged", this.onAccountsChanged);
  _classPrivateFieldGet(this, _provider).removeListener("chainChanged", this.onChainChanged);
  _classPrivateFieldGet(this, _provider).removeListener("disconnect", this.onDisconnect);
  _classPrivateFieldGet(this, _provider).removeListener("message", this.onMessage);
  _classPrivateFieldGet(this, _provider).removeListener("switchChain", this.onSwitchChain);
  _classPrivateFieldGet(this, _provider).removeListener("display_uri", this.onDisplayUri);
  _classPrivateFieldGet(this, _provider).removeListener("call_request_sent", this.onRequestSent);
}

export { WalletConnectV1Connector };
