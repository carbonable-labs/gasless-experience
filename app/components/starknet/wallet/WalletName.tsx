'use client';

import { minifyAddress } from "@/app/utils/utils";
import { useStarkProfile } from "@starknet-react/core";

function WalletName({ address }: { address: string }) {
  const { data } = useStarkProfile({ address });

  if (!data || !data.name) {
    return <>{minifyAddress(address)}</>;
  }
  return (
      <>{data.name}</>
  );
}

export default WalletName;