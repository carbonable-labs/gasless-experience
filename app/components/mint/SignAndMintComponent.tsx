'use client';

import useCalls from "@/app/hooks/useCalls";
import { useAccount } from "@starknet-react/core";
import { useState } from "react";
import { useGasContext } from "../common/GasContext";
import { executeCalls, fetchBuildTypedData, fetchExecuteTransaction } from "@avnu/gasless-sdk";
import buildTypedData from "@/app/actions/buildTypedData";
import executeTransaction from "@/app/actions/executeTransaction";

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
    if (!account) return;
    setLoading(true);
    setTx(undefined);
    const typedData = await buildTypedData(account.address, calls, undefined, undefined, options);
    let signature = undefined;

    try {
      signature = await account.signMessage(typedData);
    } catch (error) {
      console.error('Error signing message:', error);
      setLoading(false);
      return;
    }
    const result = await executeTransaction(account.address, JSON.stringify(typedData), signature, options);
    console.log('Transaction result:', result);
    setLoading(false);
  };

  return (
      <div>
      {account && (
        <button 
          disabled={!isValidJSON(JSON.stringify(calls)) || loading} 
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