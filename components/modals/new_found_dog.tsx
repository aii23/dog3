import React, { useState } from 'react';
import Modal from './modal';

export default function NewFoundDogModal({
  title,
  isOpen,
  setIsOpen,
}: {
  title: string;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  const [id, setId] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const publishFoundDog = () => {};

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      apply={publishFoundDog}
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
          Location:{' '}
          <input
            className="text-black"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label>
          Time:{' '}
          <input
            className="text-black"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
      </div>
    </Modal>
  );
}
