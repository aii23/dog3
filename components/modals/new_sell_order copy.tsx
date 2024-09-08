import React, { useState } from 'react';
import Modal from './modal';

export default function NewSellOrderModal({
  title,
  isOpen,
  setIsOpen,
}: {
  title: string;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  const [price, setPrice] = useState<string>('');

  const createSellOrder = () => {};

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      apply={createSellOrder}
    >
      <div className="grid grid-cols-1 gap-6 p-6 bg-gray-50 rounded-lg">
        <div className="col-span-1">
          <label className="block text-gray-700 font-semibold mb-2">
            Price
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
}
