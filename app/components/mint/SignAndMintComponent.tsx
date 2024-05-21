'use client';

import useCalls from "@/app/hooks/useCalls";
import { useAccount } from "@starknet-react/core";
import { useState } from "react";
import { useGasContext } from "../common/GasContext";
import { executeCalls } from "@avnu/gasless-sdk";

function SignAndMintComponent() {
  const { account } = useAccount();
  const [loading, setLoading] = useState(false);
  const [tx, setTx] = useState<string | undefined>();
  const { calls } = useCalls();
  const { gasTokenPrices, maxGasTokenAmount, options } = useGasContext();

  const isValidJSON = (str: string): boolean => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  };

  const onClickExecute = async () => {
    if (!account || !gasTokenPrices.length) return;
    setLoading(true);
    setTx(undefined);
    return executeCalls(
      account,
      calls,
      {
        gasTokenAddress: gasTokenPrices[0].tokenAddress,
        maxGasTokenAmount,
      },
      options,
    )
      .then((response) => {
        console.log('Transaction hash:', response);
        setTx(response.transactionHash);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
      <div>
      {account && (
        <button 
          disabled={!isValidJSON(JSON.stringify(calls)) || loading || !gasTokenPrices.length} 
          onClick={onClickExecute}
          className="uppercase bg-greenish-500 text-neutral-100 py-2 px-4 rounded-lg hover:bg-greenish-400"
        >
          {loading ? 'Loading' : 'Sign and Mint'}
        </button>
      )}
    </div>
  );
}

export default SignAndMintComponent;