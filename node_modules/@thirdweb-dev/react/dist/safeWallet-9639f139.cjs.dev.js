'use strict';

var wallets = require('@thirdweb-dev/wallets');

const safeWallet = () => {
  return {
    id: wallets.SafeWallet.id,
    meta: wallets.SafeWallet.meta,
    create: options => new wallets.SafeWallet({
      ...options
    })
  };
};

exports.safeWallet = safeWallet;
