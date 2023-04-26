import { useCallback } from 'react';

// import { useConnect } from "../../../core/hooks/wallet-hooks";

function useMagic() {
  // const connect = useConnect();
  return useCallback(() => {
    throw new Error("not implemented yet");
  }, []);
}

export { useMagic };
