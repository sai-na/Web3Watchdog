'use strict';

var wallets = require('@thirdweb-dev/wallets');

const paperWallet = config => {
  return {
    id: wallets.PaperWallet.id,
    meta: wallets.PaperWallet.meta,
    create: options => new wallets.PaperWallet({
      ...options,
      ...config
    })
  };
};

exports.paperWallet = paperWallet;
