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
      <div className="grid grid-cols-2 gap-3">
        <label>
          Price:{' '}
          <input
            className="text-black"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>
    </Modal>
  );
}
