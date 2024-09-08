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
      <div className="grid grid-cols-2 gap-3">
        <label>
          Id:{' '}
          <input
            className="text-black"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>

        <label>
          Name:{' '}
          <input
            className="text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Age:{' '}
          <input
            className="text-black"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label>
          Breed:{' '}
          <input
            className="text-black"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>

        <label>
          Color:{' '}
          <input
            className="text-black"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <label>
          Src:{' '}
          <input
            className="text-black"
            value={src}
            onChange={(e) => setSrc(e.target.value)}
          />
        </label>
      </div>
    </Modal>
  );
}
