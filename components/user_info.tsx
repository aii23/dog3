import Image from 'next/image';
import { User } from './interfaces/User';
import { useState } from 'react';
import { ethers } from 'ethers';
import { useWallet } from './wallet_provider';

export const UserInfo = (args: {
  user: User;
  isBreeder: boolean;
  setIsBreeder: (v: boolean) => void;
}) => {
  const { user, isBreeder, setIsBreeder } = args;

  const { userAddress } = useWallet();

  return (
    <div className="flex flex-col h-1/5">
      <h1 className="text-3xl font-semibold">
        My Account: {userAddress ? userAddress : 'Connect wallet'}
      </h1>
      <div className="flex flex-col sm:flex-row mt-4 items-start">
        <div className="relative w-44 h-44 flex-0">
          <Image
            src={user.src}
            alt={user.address}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex-0 sm:ml-4 mt-4 sm:mt-0 flex-1">
          <h1 className="text-xl font-semibold">Description</h1>
          <div>{user.descriptions}</div>
          <label>
            <input
              type="checkbox"
              checked={isBreeder}
              onChange={() => setIsBreeder(!isBreeder)}
            />{' '}
            Is breeder
          </label>
        </div>
      </div>
    </div>
  );
};
