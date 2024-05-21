'use client'

import { useBlockNumber } from "@starknet-react/core";
import { BlockNumber } from "starknet";
import StarknetProvider from "../starknet/StarknetProvider";

function LastBlockComponent() {
  return (
    <StarknetProvider>
      <div className="text-sm font-light flex items-center justify-end">
        <span className="text-[8px] mr-1">🟢</span> Last block: <span className="ml-1"><LastBlock /></span>
      </div>
    </StarknetProvider>
    
  )
}

function LastBlock() {
  const { data, isLoading, isError } = useBlockNumber({
    blockIdentifier: 'latest' as BlockNumber
  })

  if (isLoading) return <span>Loading...</span>
  if (isError) return <span>Error</span>

  return <span>{data}</span>
}

export default LastBlockComponent;