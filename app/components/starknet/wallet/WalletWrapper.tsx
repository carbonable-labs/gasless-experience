'use client';

import { useAccount } from "@starknet-react/core";
import UnconnectedWallet from "./Unconnected";
import ConnectedWallet from "./Connected";

function Wallet() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <UnconnectedWallet />
    );
  }

  return (
    <ConnectedWallet />
  );
}

export default Wallet;