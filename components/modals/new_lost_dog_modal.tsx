import React, { useState } from 'react';
import Modal from './modal';

export default function NewLostDogModal({
  title,
  isOpen,
  setIsOpen,
}: {
  title: string;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  const [place, setPlace] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [reward, setReward] = useState<string>('');

  const createNewLostDog = () => {};

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      apply={createNewLostDog}
    >
      <div className="grid grid-cols-2 gap-3">
        <label>
          Place:{' '}
          <input
            className="text-black"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
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

        <label>
          Reward:{' '}
          <input
            className="text-black"
            value={reward}
            onChange={(e) => setReward(e.target.value)}
          />
        </label>
      </div>
    </Modal>
  );
}
