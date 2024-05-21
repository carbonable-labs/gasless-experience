'use client';

import { fetchAccountCompatibility } from "@avnu/gasless-sdk";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";
import { useGasContext } from "../../common/GasContext";

function WalletCompatibility() {
  const { account } = useAccount();
  const { gaslessCompatibility, setGaslessCompatibility, options } = useGasContext();
  

  useEffect(() => {
    if (!account) {
      return;
    }

    const fetchCompatibility = async () => {
      const compat = await fetchAccountCompatibility(account.address, options);
      setGaslessCompatibility(compat);
    };

    fetchCompatibility();
  }, [account]);

  if (!gaslessCompatibility || gaslessCompatibility.isCompatible === false) {
    return <>Gasless compatibility 🔴</>
  }

  return <>Gasless compatibility 🟢</>
}

export default WalletCompatibility;