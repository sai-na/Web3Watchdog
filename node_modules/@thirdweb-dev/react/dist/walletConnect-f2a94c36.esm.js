import { WalletConnect } from '@thirdweb-dev/wallets';

const TW_WC_PROJECT_ID = "145769e410f16970a79ff77b2d89a1e0";

const walletConnect = config => {
  const projectId = config?.projectId || TW_WC_PROJECT_ID;
  return {
    id: WalletConnect.id,
    meta: WalletConnect.meta,
    create: options => new WalletConnect({
      ...options,
      qrcode: true,
      projectId
    })
  };
};

export { walletConnect };
