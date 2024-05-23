'use client';
import BlockElement from "./components/common/BlockElement";
import { GasProvider } from "./components/common/GasContext";
import GasWrapper from "./components/gas/GasWrapper";
import Hackathon from "./components/hackathon/Hackathon";
import SignAndMintComponent from "./components/mint/SignAndMintComponent";
import StarknetProvider from "./components/starknet/StarknetProvider";
import Wallet from "./components/starknet/wallet/WalletWrapper";

export default function Home() {
  return (
    <>
      <div>
        <Hackathon />
      </div>
      <StarknetProvider>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <GasProvider>
            <BlockElement title="Wallet Information">
              <Wallet />
            </BlockElement>
            <BlockElement title="Gas Information">
              <GasWrapper />
            </BlockElement>
            <BlockElement title="Sign and Mint">
              <SignAndMintComponent />
            </BlockElement>
          </GasProvider>
        </div>
      </StarknetProvider>
    </>
  );
}
