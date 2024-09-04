import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="p-6 border-b border-gray-700">
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
            <a href="#" className="hover:text-gray-300">
              Lost & Found
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500">
            Connect Wallet
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
        </div>
      </nav>{' '}
    </header>
  );
};
