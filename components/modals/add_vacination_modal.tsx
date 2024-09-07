import React, { useState } from 'react';
import Modal from './modal';

export default function AddVacinationModal({
  title,
  isOpen,
  setIsOpen,
}: {
  title: string;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  const [vacinationCenter, setVacinationCenter] = useState<string>('');
  const [doctorId, setDoctorId] = useState<string>('');
  const [vaccine, setVaccine] = useState<string>('');

  const addVacination = () => {};

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      apply={addVacination}
    >
      <div className="grid grid-cols-2 gap-3">
        <label>
          Vacination Center:{' '}
          <input
            className="text-black"
            value={vacinationCenter}
            onChange={(e) => setVacinationCenter(e.target.value)}
          />
        </label>

        <label>
          Doctor Id:{' '}
          <input
            className="text-black"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
          />
        </label>

        <label>
          Vaccine :{' '}
          <input
            className="text-black"
            value={vaccine}
            onChange={(e) => setVaccine(e.target.value)}
          />
        </label>
      </div>
    </Modal>
  );
}
