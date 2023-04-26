'use strict';

var checkPrivateRedeclaration = require('./checkPrivateRedeclaration-09e2947a.cjs.dev.js');

function _classPrivateFieldInitSpec(obj, privateMap, value) {
  checkPrivateRedeclaration._checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

exports._classPrivateFieldGet = _classPrivateFieldGet;
exports._classPrivateFieldInitSpec = _classPrivateFieldInitSpec;
exports._classPrivateFieldSet = _classPrivateFieldSet;
