import { SafeWallet } from '@thirdweb-dev/wallets';

const safeWallet = () => {
  return {
    id: SafeWallet.id,
    meta: SafeWallet.meta,
    create: options => new SafeWallet({
      ...options
    })
  };
};

export { safeWallet };
