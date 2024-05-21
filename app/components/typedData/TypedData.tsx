'use client';

import useCalls from "@/app/hooks/useCalls";
import { fetchBuildTypedData } from "@avnu/gasless-sdk";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";
import { useGasContext } from "../common/GasContext";
import { TypedData } from "starknet";

function TypedDataComponent() {
  const { account } = useAccount();
  const { calls, USDC_ADDRESS } = useCalls();
  const { maxGasTokenAmount, options } = useGasContext();
  const [typedData, setTypedData] = useState<TypedData>();

  useEffect(() => {
    if (!account || !calls.length || !USDC_ADDRESS || !maxGasTokenAmount || !options) {
      return;
    }

    // Function to fetch gas token prices and update state
    const fetchTypedData = async () => {
      try {
        const result = await fetchBuildTypedData(account.address, calls, USDC_ADDRESS, maxGasTokenAmount, options);
        setTypedData(result);
      } catch (error) {
        console.error('Error fetching gas token prices:', error);
      }
    };

    // Initial fetch
    fetchTypedData();
  }, [account, calls, USDC_ADDRESS, maxGasTokenAmount, options]);

  return (
    <div className="text-neutral-300">
      Typed data: <span className="text-neutral-100">{typedData?.toString()}</span>
    </div>
  );
}

export default TypedDataComponent;