'use client';

import { Connector, useConnect } from "@starknet-react/core";
import Image from "next/image";

function UnconnectedWallet() {
  const { connectors, connectAsync } = useConnect();

  const handleClick = async (connector: Connector) => {
    try {
      await connectAsync({ connector });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="text-neutral-300">
        Connect on {process.env.NEXT_PUBLIC_NETWORK === 'mainnet' ? 'Mainnet' : 'Sepolia'} with
      </div>
      {connectors.map((connector) => (
        <div key={connector.id + "_modal"}>
          <div
            className="px-4 py-2 my-2 flex items-center justify-start cursor-pointer rounded-lg bg-opacityLight-5 hover:bg-opacityLight-10 w-full" 
            onClick={() => handleClick(connector)}
          >
              {connector.icon.dark && 
                <Image className="mr-3" width={24} height={24} src={connector.icon.dark} alt={`Connect with ${connector.id}`} />
              }
              <div className="uppercase font-inter">{connector.id}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default UnconnectedWallet;