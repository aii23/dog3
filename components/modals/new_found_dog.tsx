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
          <label className="block text-gray-700 font-semibold mb-2">
            Location
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">Time</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
}
