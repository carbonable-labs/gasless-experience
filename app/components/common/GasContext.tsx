import { BASE_URL, GasTokenPrice, GaslessCompatibility, GaslessOptions, SEPOLIA_BASE_URL } from '@avnu/gasless-sdk';
import React, { FC, ReactNode, createContext, useContext, useState } from 'react';

type GasContextType = {
  gaslessCompatibility: GaslessCompatibility | undefined;
  setGaslessCompatibility: (compatibility: GaslessCompatibility) => void;
  gasTokenPrices: any;
  setGasTokenPrices: any;
  maxGasTokenAmount: bigint;
  setMaxGasTokenAmount: (amount: bigint) => void;
  options: GaslessOptions;
};

const GasContext = createContext<GasContextType>({} as GasContextType);

interface Props {
  children: ReactNode;
}

export const GasProvider: FC<Props> = ({ children }) => {
  const [gasTokenPrices, setGasTokenPrices] = useState<GasTokenPrice[]>([]);
  const [maxGasTokenAmount, setMaxGasTokenAmount] = useState<bigint>(BigInt(2));
  const [gaslessCompatibility, setGaslessCompatibility] = useState<GaslessCompatibility>();
  const options: GaslessOptions = { baseUrl: process.env.NEXT_PUBLIC_NETWORK === 'mainnet' ? BASE_URL : SEPOLIA_BASE_URL };

  return (
    <GasContext.Provider
      value={{
        gaslessCompatibility,
        setGaslessCompatibility,
        gasTokenPrices,
        setGasTokenPrices,
        maxGasTokenAmount,
        setMaxGasTokenAmount,
        options,
      }}
    >
      {children}
    </GasContext.Provider>
  );
};

export const useGasContext = () => useContext(GasContext);