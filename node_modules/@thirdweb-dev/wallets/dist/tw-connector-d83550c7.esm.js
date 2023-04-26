import { _ as _defineProperty } from './defineProperty-e24c82ea.esm.js';
import EventEmitter from 'eventemitter3';

class TWConnector extends EventEmitter {}
class WagmiAdapter extends TWConnector {
  constructor(wagmiConnector) {
    super();
    _defineProperty(this, "wagmiConnector", void 0);
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

export { TWConnector as T, WagmiAdapter as W };
