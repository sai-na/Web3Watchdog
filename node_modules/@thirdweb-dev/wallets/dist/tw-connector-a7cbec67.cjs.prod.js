'use strict';

var defineProperty = require('./defineProperty-6ca2d9a5.cjs.prod.js');
var EventEmitter = require('eventemitter3');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefault(EventEmitter);

class TWConnector extends EventEmitter__default["default"] {}
class WagmiAdapter extends TWConnector {
  constructor(wagmiConnector) {
    super();
    defineProperty._defineProperty(this, "wagmiConnector", void 0);
    this.wagmiConnector = wagmiConnector;
  }
  async connect(args) {
    const chainId = args?.chainId;
    this.setupTWConnectorListeners();
    const result = await this.wagmiConnector.connect({
      chainId
    });
    return result.account;
  }
  disconnect() {
    this.wagmiConnector.removeAllListeners("connect");
    this.wagmiConnector.removeAllListeners("change");
    return this.wagmiConnector.disconnect();
  }
  isConnected() {
    return this.wagmiConnector.isAuthorized();
  }
  getAddress() {
    return this.wagmiConnector.getAccount();
  }
  getSigner() {
    return this.wagmiConnector.getSigner();
  }
  getProvider() {
    return this.wagmiConnector.getProvider();
  }
  async switchChain(chainId) {
    if (!this.wagmiConnector.switchChain) {
      throw new Error("Switch chain not supported");
    }
    await this.wagmiConnector.switchChain(chainId);
  }
  setupTWConnectorListeners() {
    this.wagmiConnector.addListener("connect", data => {
      this.emit("connect", data);
    });
    this.wagmiConnector.addListener("change", data => {
      this.emit("change", data);
    });
    this.wagmiConnector.addListener("disconnect", () => {
      this.emit("disconnect");
    });
  }
  async setupListeners() {
    this.setupTWConnectorListeners();
    await this.wagmiConnector.setupListeners();
  }
  updateChains(chains) {
    this.wagmiConnector.updateChains(chains);
  }
}

exports.TWConnector = TWConnector;
exports.WagmiAdapter = WagmiAdapter;
