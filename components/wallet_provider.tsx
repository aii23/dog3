import { ethers } from 'ethers';
import { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextProps {
  userAddress: string | null;
  setUserAddress: (address: string | null) => void;
  coinSeed: number | null;
  setCoinSeed: (seed: number | null) => void;
  contract: ethers.Contract | null;
  setContract: (contract: ethers.Contract) => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [coinSeed, setCoinSeed] = useState<number | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  return (
    <WalletContext.Provider
      value={{
        userAddress,
        setUserAddress,
        coinSeed,
        setCoinSeed,
        contract,
        setContract,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
