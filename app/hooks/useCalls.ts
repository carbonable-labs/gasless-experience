import { Call, num } from "starknet"

function useCalls() {
  const USDC_ADDRESS = '0x075b439cc965cea7e5ac09d7cf15043ad8fe15447423a51bbcb789f8ec659d8c';
  const USDC_AMOUNT = 10000000;
  const MINTER_ADDRESS = '0x01bb54e00035b0a5cb63985fe9d8ebe871380e378b456fef31f1a3b475e2f02b'
  const calls: Call[] = [
    {
      contractAddress: USDC_ADDRESS,
      entrypoint: 'approve',
      calldata: [MINTER_ADDRESS, num.toHexString(USDC_AMOUNT), '0x0']
    },
    {
      contractAddress: MINTER_ADDRESS,
      entrypoint: 'public_buy',
      calldata: [num.toHexString(USDC_AMOUNT), '0x0', '0x1']
    }
  ]

  return { calls, USDC_ADDRESS }
}

export default useCalls;