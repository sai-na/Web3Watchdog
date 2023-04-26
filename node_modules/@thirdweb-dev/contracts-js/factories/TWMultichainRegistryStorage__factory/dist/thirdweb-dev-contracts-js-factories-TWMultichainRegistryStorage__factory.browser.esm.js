import { _ as _defineProperty } from '../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { ContractFactory, utils, Contract } from 'ethers';

const _abi = [{
  inputs: [],
  name: "MULTICHAIN_REGISTRY_STORAGE_POSITION",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}];
const _bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063a53a5e53146038575b600080fd5b605e7f76e06728d0dcf293a9eaf59ec8b2eedd2b5c467a2521e176b50617c0c2448e2681565b60405190815260200160405180910390f3fea2646970667358221220d212503ef092bc98118608ef2071c47b67e7462dfbf8083c4e921ee5bad9880864736f6c634300080c0033";
const isSuperArgs = xs => xs.length > 1;
class TWMultichainRegistryStorage__factory extends ContractFactory {
  constructor() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address) {
    return super.attach(address);
  }
  connect(signer) {
    return super.connect(signer);
  }
  static createInterface() {
    return new utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi, signerOrProvider);
  }
}
_defineProperty(TWMultichainRegistryStorage__factory, "bytecode", _bytecode);
_defineProperty(TWMultichainRegistryStorage__factory, "abi", _abi);

export { TWMultichainRegistryStorage__factory };
