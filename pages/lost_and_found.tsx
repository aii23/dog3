import Image from 'next/image';
import { useState } from 'react';
import {
  mocked_found_dogs,
  mocked_lost_dogs,
} from '../components/mock/mocked_data';
import { Header } from '../components/header';
import Footer from '../components/footer';
import { LostDogInfo, FoundDogInfo } from '../components/interfaces/Dog';

const LostDogsComponent = (args: { lostDogs: LostDogInfo[] }) => {
  return (
    <ul className="space-y-4">
      {args.lostDogs.map((dogInfo, index) => (
        <li key={index} className="flex items-center space-x-4">
          <div className="w-24 h-16 relative rounded-lg overflow-hidden">
            <Image
              src={dogInfo.dog.src}
              alt={`${dogInfo.dog.age} - ${dogInfo.dog.breed}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="font-semibold">
              {`${dogInfo.dog.age} - ${dogInfo.dog.breed}`}
            </h2>
            <p className="text-gray-400">{dogInfo.time}</p>
            <p className="text-gray-400">{dogInfo.location}</p>
          </div>
          <div className="ml-auto">
            <span className="text-xl">📍</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

const FoundDogsComponent = (args: { foundDogs: FoundDogInfo[] }) => {
  return (
    <ul className="space-y-4">
      {args.foundDogs.map((dogInfo, index) => (
        <li key={index} className="flex items-center space-x-4">
          <div className="w-24 h-16 relative rounded-lg overflow-hidden">
            <Image
              src={dogInfo.dog.src}
              alt={`${dogInfo.dog.age} - ${dogInfo.dog.breed}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="font-semibold">
              {`${dogInfo.dog.age} - ${dogInfo.dog.breed}`}
            </h2>
            <p className="text-gray-400">{dogInfo.time}</p>
            <p className="text-gray-400">{dogInfo.location}</p>
          </div>
          <div className="ml-auto">
            <span className="text-xl">📍</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

const LostAndFoundDogs = () => {
  const [activeTab, setActiveTab] = useState<'lost' | 'found'>('lost');

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-800 p-2 rounded">
              <span className="font-bold text-lg">Lost Dogs</span>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-white rounded p-2 w-64"
            />
          </div>
          <button className="bg-blue-600 p-2 rounded text-white">Post</button>
        </header>

        <h1 className="text-2xl font-bold mb-6">Lost and Found Dogs</h1>

        {/* Toggle Button */}
        <div className="flex justify-center mb-6">
          <div className="flex rounded-lg p-2">
            <button
              className={`px-4 py-2 rounded-l-lg font-semibold ${
                activeTab === 'lost'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setActiveTab('lost')}
            >
              Lost
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg font-semibold ${
                activeTab === 'found'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setActiveTab('found')}
            >
              Found
            </button>
          </div>
        </div>

        {activeTab == 'lost' ? (
          <LostDogsComponent lostDogs={mocked_lost_dogs} />
        ) : (
          <FoundDogsComponent foundDogs={mocked_found_dogs} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default LostAndFoundDogs;
