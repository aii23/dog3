import React, { useState } from 'react';
import Modal from './modal';

export default function NewSellOrderModal({
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
  const [price, setPrice] = useState<string>('');
  return (
    <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen} apply={apply}>
      <div className="grid grid-cols-2 gap-3">
        <label>
          Name:{' '}
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
