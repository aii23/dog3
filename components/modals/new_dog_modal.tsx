import React, { useState } from 'react';
import Modal from './modal';
import { useWallet } from '../wallet_provider';
import { randomInt } from 'crypto';

export default function NewDogModal({
  title,
  isOpen,
  setIsOpen,
}: {
  title: string;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [src, setSrc] = useState<string>('');
  const { contract } = useWallet();

  const createNewDog = async () => {
    if (!contract) {
      console.log('Connect wallet');
      return;
    }

    await contract.regDoge(
      id,
      {
        name,
        species: 'dog',
        breed,
        sex,
        country: 'Some',
        region: 'Some',
        city: 'Some',
        addr: 'Some',
        tatoo: 'N/A',
        color,
        photo: '/dog1.png',
        postalCode: 'Some',
        birthday: 123,
      },
      {
        email: 'Some@gmail.com',
        cellPhone: '+Some',
        otherPhone: '+Some',
      }
    );
  };

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      apply={createNewDog}
    >
      <div className="grid grid-cols-2 gap-6 p-6 bg-gray-50 rounded-lg">
        <div className="col-span-1">
          <label className="block text-gray-700 font-semibold mb-2">Id</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-700 font-semibold mb-2">Age</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-700 font-semibold mb-2">
            Breed
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-700 font-semibold mb-2">
            Color
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-700 font-semibold mb-2">Src</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={src}
            onChange={(e) => setSrc(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
}
