import { _ as _defineProperty } from './defineProperty-e24c82ea.esm.js';
import { IJsonRpcConnection } from '@walletconnect/jsonrpc-types';
import { formatJsonRpcError } from '@walletconnect/jsonrpc-utils';
import WalletConnect from '@walletconnect/legacy-client';
import QRCodeModal from '@walletconnect/legacy-modal';
import EventEmitter from 'eventemitter3';
import { HttpConnection } from '@walletconnect/jsonrpc-http-connection';
import { JsonRpcProvider } from '@walletconnect/jsonrpc-provider';
import { SIGNING_METHODS } from '@walletconnect/legacy-types';
import { getRpcUrl } from '@walletconnect/legacy-utils';

class SignerConnection extends IJsonRpcConnection {
  constructor(opts) {
    super();
    _defineProperty(this, "events", new EventEmitter());
    _defineProperty(this, "accounts", []);
    _defineProperty(this, "chainId", 1);
    _defineProperty(this, "pending", false);
    _defineProperty(this, "wc", void 0);
    _defineProperty(this, "bridge", "https://bridge.walletconnect.org");
    _defineProperty(this, "qrcode", true);
    _defineProperty(this, "qrcodeModalOptions", undefined);
    _defineProperty(this, "opts", void 0);
    this.opts = opts;
    this.chainId = opts?.chainId || this.chainId;
    this.wc = this.register(opts);
  }
  get connected() {
    return typeof this.wc !== "undefined" && this.wc.connected;
  }
  get connecting() {
    return this.pending;
  }
  get connector() {
    this.wc = this.register(this.opts);
    return this.wc;
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async open(chainId) {
    if (this.connected) {
      this.onOpen();
      return;
    }
    return new Promise((resolve, reject) => {
      this.on("error", err => {
        reject(err);
      });
      this.on("open", () => {
        resolve();
      });
      this.create(chainId);
    });
  }
  async close() {
    if (typeof this.wc === "undefined") {
      return;
    }
    if (this.wc.connected) {
      this.wc.killSession();
    }
    this.onClose();
  }
  async send(payload) {
    this.wc = this.register(this.opts);
    if (!this.connected) {
      await this.open();
    }
    this.sendPayload(payload).then(res => this.events.emit("payload", res)).catch(e => this.events.emit("payload", formatJsonRpcError(payload.id, e.message)));
  }
  async sendAsync(payload) {
    // noop
    console.log("sendAsync", payload);
  }

  // ---------- Private ----------------------------------------------- //

  register(opts) {
    if (this.wc) {
      return this.wc;
    }
    this.opts = opts || this.opts;
    this.bridge = opts?.connector ? opts.connector.bridge : opts?.bridge || "https://bridge.walletconnect.org";
    this.qrcode = typeof opts?.qrcode === "undefined" || opts.qrcode !== false;
    this.chainId = typeof opts?.chainId !== "undefined" ? opts.chainId : this.chainId;
    this.qrcodeModalOptions = opts?.qrcodeModalOptions;
    const connectorOpts = {
      bridge: this.bridge,
      qrcodeModal: this.qrcode ? QRCodeModal : undefined,
      qrcodeModalOptions: this.qrcodeModalOptions,
      storageId: opts?.storageId,
      signingMethods: opts?.signingMethods,
      clientMeta: opts?.clientMeta,
      session: opts?.session
    };
    this.wc = typeof opts?.connector !== "undefined" ? opts.connector : new WalletConnect(connectorOpts);
    if (typeof this.wc === "undefined") {
      throw new Error("Failed to register WalletConnect connector");
    }
    if (this.wc.accounts.length) {
      this.accounts = this.wc.accounts;
    }
    if (this.wc.chainId) {
      this.chainId = this.wc.chainId;
    }
    // this.accounts = this.wc.accounts;
    // this.chainId = this.wc.chainId;
    this.registerConnectorEvents();
    return this.wc;
  }
  onOpen(wc) {
    this.pending = false;
    if (wc) {
      this.wc = wc;
    }
    this.events.emit("open");
  }
  onClose() {
    this.pending = false;
    if (this.wc) {
      this.wc = undefined;
    }
    this.events.emit("close");
  }
  onError(payload) {
    let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Failed or Rejected Request";
    let code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -32000;
    const errorPayload = {
      id: payload.id,
      jsonrpc: payload.jsonrpc,
      error: {
        code,
        message
      }
    };
    this.events.emit("payload", errorPayload);
    return errorPayload;
  }
  create(chainId) {
    this.wc = this.register(this.opts);
    this.chainId = chainId || this.chainId;
    if (this.connected || this.pending) {
      return;
    }
    this.pending = true;
    this.registerConnectorEvents();
    this.wc.createSession({
      chainId: this.chainId
    }).then(() => this.events.emit("created")).catch(e => this.events.emit("error", e));
  }
  registerConnectorEvents() {
    this.wc = this.register(this.opts);
    this.wc.on("connect", err => {
      if (err) {
        this.events.emit("error", err);
        return;
      }
      this.accounts = this.wc?.accounts || [];
      this.chainId = this.wc?.chainId || this.chainId;
      this.onOpen();
    });
    this.wc.on("disconnect", err => {
      if (err) {
        this.events.emit("error", err);
        return;
      }
      this.onClose();
    });
    this.wc.on("modal_closed", () => {
      this.events.emit("error", new Error("User closed modal"));
    });
    this.wc.on("session_update", (_error, payload) => {
      const {
        accounts,
        chainId
      } = payload.params[0];
      if (!this.accounts || accounts && this.accounts !== accounts) {
        this.accounts = accounts;
        this.events.emit("accountsChanged", accounts);
      }
      if (!this.chainId || chainId && this.chainId !== chainId) {
        this.chainId = chainId;
        this.events.emit("chainChanged", chainId);
      }
    });
  }
  async sendPayload(payload) {
    this.wc = this.register(this.opts);
    try {
      const response = await this.wc.unsafeSend(payload);
      return this.sanitizeResponse(response);
    } catch (error) {
      return this.onError(payload, error.message);
    }
  }
  sanitizeResponse(response) {
    return typeof response.error !== "undefined" && typeof response.error.code === "undefined" ? formatJsonRpcError(response.id, response.error.message) : response;
  }
}
var SignerConnection$1 = SignerConnection;

class WalletConnectProvider {
  constructor(opts) {
    _defineProperty(this, "events", new EventEmitter());
    _defineProperty(this, "rpc", void 0);
    _defineProperty(this, "signer", void 0);
    _defineProperty(this, "http", void 0);
    this.rpc = {
      infuraId: opts?.infuraId,
      custom: opts?.rpc
    };
    this.signer = new JsonRpcProvider(new SignerConnection$1(opts));
    const chainId = this.signer.connection.chainId || opts?.chainId || 1;
    this.http = this.setHttpProvider(chainId);
    this.registerEventListeners();
  }
  get connected() {
    return this.signer.connection.connected;
  }
  get connector() {
    return this.signer.connection.connector;
  }
  get accounts() {
    return this.signer.connection.accounts;
  }
  get chainId() {
    return this.signer.connection.chainId;
  }
  get rpcUrl() {
    return (this.http?.connection).url || "";
  }
  async request(args) {
    switch (args.method) {
      case "eth_requestAccounts":
        await this.connect();
        return this.signer.connection.accounts;
      case "eth_accounts":
        return this.signer.connection.accounts;
      case "eth_chainId":
        return this.signer.connection.chainId;
    }
    if (SIGNING_METHODS.includes(args.method)) {
      return this.signer.request(args);
    }
    if (typeof this.http === "undefined") {
      throw new Error(`Cannot request JSON-RPC method (${args.method}) without provided rpc url`);
    }
    return this.http.request(args);
  }
  async enable() {
    const accounts = await this.request({
      method: "eth_requestAccounts"
    });
    return accounts;
  }
  async connect() {
    if (!this.signer.connection.connected) {
      await this.signer.connect();
    }
  }
  async disconnect() {
    if (this.signer.connection.connected) {
      await this.signer.disconnect();
    }
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  get isWalletConnect() {
    return true;
  }

  // ---------- Private ----------------------------------------------- //

  registerEventListeners() {
    this.signer.connection.on("accountsChanged", accounts => {
      this.events.emit("accountsChanged", accounts);
    });
    this.signer.connection.on("chainChanged", chainId => {
      this.http = this.setHttpProvider(chainId);
      this.events.emit("chainChanged", chainId);
    });
    this.connector.on("display_uri", (error, payload) => {
      this.events.emit("display_uri", error, payload);
    });
    this.connector.on("call_request_sent", (error, payload) => {
      this.events.emit("call_request_sent", error, payload);
    });
    this.signer.on("disconnect", () => {
      this.events.emit("disconnect");
    });
  }
  setHttpProvider(chainId) {
    const rpcUrl = getRpcUrl(chainId, this.rpc);
    if (typeof rpcUrl === "undefined") {
      return undefined;
    }
    const http = new JsonRpcProvider(new HttpConnection(rpcUrl));
    return http;
  }
}

export { WalletConnectProvider as default };
