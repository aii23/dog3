import React, { useState } from 'react';
import Modal from './modal';

export default function NewDogModal({
  title,
  isOpen,
  setIsOpen,
  children,
  apply,
}: {
  title: string;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  children: React.JSX.Element;
  apply: () => void;
}) {
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [src, setSrc] = useState<string>('');
  return (
    <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen} apply={apply}>
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
            value={color}
            onChange={(e) => setSrc(e.target.value)}
          />
        </label>
      </div>
    </Modal>
  );
}
