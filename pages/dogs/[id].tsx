import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  all_mocked_dogs,
  mocked_dogs_vaccinations,
} from '../../components/mock/mocked_data';
import { Header } from '../../components/header';
import Footer from '../../components/footer';

const DogDetails = () => {
  const router = useRouter();

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
          <h1 className="text-2xl font-bold mb-6 text-center">{dog.name}</h1>

          <div className="flex flex-col lg:flex-row bg-gray-800 rounded-lg p-6">
            {/* Left: Dog Image */}
            <div className="lg:w-1/2">
              <div className="w-full h-96 relative rounded-lg overflow-hidden">
                <Image
                  src={dog.src}
                  alt={dog.name}
                  layout="fill"
                  objectFit="contain" // Changed from "cover" to "contain"
                />
              </div>
            </div>

            {/* Right: Dog Properties */}
            <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
              <ul className="space-y-4">
                <li>
                  <strong>Breed:</strong> {dog.breed}
                </li>
                <li>
                  <strong>Age:</strong> {dog.age}
                </li>
                <li>
                  <strong>Gender:</strong> {dog.sex}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom: Vaccination Info */}
          <h2 className="text-xl font-semibold mb-4">Vaccination Info</h2>
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
    </>
  );
};

export default DogDetails;
