'use client';

import { useAccount } from "@starknet-react/core";
import WalletName from "./WalletName";
import WalletCompatibility from "./Compatibility";

function ConnectedWallet() {
  const { address } = useAccount();

  if (!address) {
    return null;
  }

  return (
    <>
      <div className="text-neutral-300">
        You are conneted with:
      </div>
      <div>
        <WalletName address={address} />
      </div>
      <div className="mt-2 text-sm text-neutral-200">
        <WalletCompatibility />
      </div>
    </>
  );
}

export default ConnectedWallet;