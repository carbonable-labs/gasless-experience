import useCalls from "@/app/hooks/useCalls";
import { getGasFeesInGasToken } from "@avnu/gasless-sdk";
import { useAccount, useProvider } from "@starknet-react/core";
import { useCallback, useEffect } from "react";
import { AccountInterface, Call, EstimateFeeResponse, stark, transaction } from "starknet";
import { useGasContext } from "../common/GasContext";

function EstimatedFees() {
  const { calls } = useCalls();
  const { gaslessCompatibility, gasTokenPrices, setMaxGasTokenAmount, maxGasTokenAmount } = useGasContext();
  const { provider } = useProvider();
  const { account } = useAccount();

  const estimateCalls = useCallback(
    async (account: AccountInterface, calls: Call[]): Promise<EstimateFeeResponse> => {
      return await account.estimateInvokeFee(calls, { blockIdentifier: 'latest', skipValidate: true });
    },
    [provider],
  );

  // Retrieve estimated gas fees
  useEffect(() => {
    if (!account || !gasTokenPrices.length || !gaslessCompatibility) return;
    
    estimateCalls(account, calls).then((fees) => {
      const estimatedGasFeesInGasToken = getGasFeesInGasToken(
        BigInt(fees.overall_fee),
        gasTokenPrices[0],
        BigInt(fees.gas_price!),
        BigInt(fees.data_gas_price ?? '0x1'),
        gaslessCompatibility.gasConsumedOverhead,
        gaslessCompatibility.dataGasConsumedOverhead,
      );
      console.log('Estimated gas fees in gas token:', estimatedGasFeesInGasToken);
      setMaxGasTokenAmount(estimatedGasFeesInGasToken * BigInt(2) / BigInt(Math.pow(10, 6)));
    }).catch((error) => {
      console.error('Error estimating gas fees:', error);
    });
  }, [account, gasTokenPrices, gaslessCompatibility]);
  
  return (  
    <div className="text-neutral-300">
      Estimated max fees: <span className="text-neutral-100">{maxGasTokenAmount.toString()} USDC</span>
    </div>
  );
}

export default EstimatedFees;
