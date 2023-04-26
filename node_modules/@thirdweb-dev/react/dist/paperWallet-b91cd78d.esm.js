import { PaperWallet } from '@thirdweb-dev/wallets';

const paperWallet = config => {
  return {
    id: PaperWallet.id,
    meta: PaperWallet.meta,
    create: options => new PaperWallet({
      ...options,
      ...config
    })
  };
};

export { paperWallet };
