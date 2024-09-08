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
      <div className="grid grid-cols-2 gap-6 p-6 bg-gray-50 rounded-lg">
        <div className="col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">
            Vaccination Center
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={vacinationCenter}
            onChange={(e) => setVacinationCenter(e.target.value)}
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-700 font-semibold mb-2">
            Doctor Id
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-700 font-semibold mb-2">
            Vaccine
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={vaccine}
            onChange={(e) => setVaccine(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
}
