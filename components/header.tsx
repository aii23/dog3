import { ethers } from 'ethers';
import Link from 'next/link';
import React from 'react';
import { useWallet } from './wallet_provider';
import Jazzicon from 'react-jazzicon';

export const Header = () => {
  const { userAddress, setUserAddress, coinSeed, setCoinSeed } = useWallet();

  // Function to connect to MetaMask
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request wallet connection
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        // // Set the user's address
        setUserAddress(accounts[0]);
        setCoinSeed(Math.round(Math.random() * 10000000));

        // ethers;

        // Optional: you can create an ethers provider to interact with the blockchain
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        console.log('Signer:', signer);
      } catch (err) {
        console.error('User denied account access or other error:', err);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  };

  return (
    <header className="p-6 border-b border-gray-700 bg-gray-900 text-white">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">Dog3</div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/"> Home </Link>
          </li>
          <li>
            <Link href="/marketplace"> Marketplace </Link>
          </li>
          <li>
            <Link href="/lost_and_found"> Lost and Found </Link>
          </li>
        </ul>
        {userAddress ? (
          <div className="flex">
            <div className="p-2">
              {userAddress.slice(0, 4) + '...' + userAddress.slice(-4)}
            </div>
            <Jazzicon diameter={25} seed={coinSeed!} />
            {/* <div className="w-8 h-8 rounded-full bg-gray-700"></div> */}
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <button
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          </div>
        )}
      </nav>{' '}
    </header>
  );
};
