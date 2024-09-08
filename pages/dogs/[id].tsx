import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  all_mocked_dogs,
  mocked_dogs_vaccinations,
} from '../../components/mock/mocked_data';
import { Header } from '../../components/header';
import Footer from '../../components/footer';
import { useState } from 'react';
import AddVacinationModal from '../../components/modals/add_vacination_modal';
import { Button } from '../../components/elements/button';

const DogDetails = () => {
  const router = useRouter();
  const [isVacineModalOpen, setVacineModalOpen] = useState(false);

  const dog = all_mocked_dogs.find((dog) => dog.id === router.query.id);
  const dogVaccination = mocked_dogs_vaccinations.filter(
    (record) => record.dogId === router.query.id
  );

  return (
    <>
      <Header />
      {!dog ? (
        'No dog found'
      ) : (
        <div className="min-h-screen bg-gray-900 text-white p-6">
          <div className="flex flex-col lg:flex-row bg-gray-800 rounded-lg p-6 shadow-lg">
            {/* Left: Dog Image */}
            <div className="lg:w-1/3">
              <div className="w-full h-72 relative rounded-lg overflow-hidden">
                <Image
                  src={dog.src}
                  alt={dog.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Right: Dog Properties */}
            <div className="lg:w-2/3 lg:pl-6 mt-4 lg:mt-0">
              <h1 className="text-3xl font-bold mb-4 text-white">{dog.name}</h1>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <strong className="text-white">Breed:</strong> {dog.breed}
                </li>
                <li>
                  <strong className="text-white">Age:</strong> {dog.age}
                </li>
                <li>
                  <strong className="text-white">Gender:</strong> {dog.sex}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom: Vaccination Info */}
          <div className="flex m-2">
            <div className="flex text-xl font-semibold justify-center items-center mr-2">
              Vaccination Info
            </div>
            <Button
              name="Add vacination info"
              onClick={() => setVacineModalOpen(true)}
            />
          </div>
          <table className="w-full text-left table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-2 border-b border-gray-700">Type</th>
                <th className="p-2 border-b border-gray-700">Description</th>
                <th className="p-2 border-b border-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {dogVaccination.map((vacination, index) => (
                <tr key={index}>
                  <td className="p-2 border-b border-gray-700">
                    {vacination.type}
                  </td>
                  <td className="p-2 border-b border-gray-700">
                    {vacination.description}
                  </td>
                  <td className="p-2 border-b border-gray-700">
                    {vacination.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Footer />

      <AddVacinationModal
        title="Fill vacination info"
        isOpen={isVacineModalOpen}
        setIsOpen={setVacineModalOpen}
      />
    </>
  );
};

export default DogDetails;
