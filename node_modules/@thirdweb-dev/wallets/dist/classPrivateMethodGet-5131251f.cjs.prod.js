'use strict';

var checkPrivateRedeclaration = require('./checkPrivateRedeclaration-fd0a01ed.cjs.prod.js');

function _classPrivateMethodInitSpec(obj, privateSet) {
  checkPrivateRedeclaration._checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}

function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return fn;
}

exports._classPrivateMethodGet = _classPrivateMethodGet;
exports._classPrivateMethodInitSpec = _classPrivateMethodInitSpec;
