import Image from 'next/image';
import { Header } from '../components/header';
import DogCard from '../components/dog_card';

const dogs = [...Array(12)].map(() => {
  return { src: '/dog1.png', name: 'g1' };
});

export default function Marketplace() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-8 space-y-8">
        <section>
          <h1 className="text-3xl font-semibold">Marketplace</h1>
          <div className="flex space-x-4 mt-4">
            <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              All
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              On Sale
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              New
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              Price: Low to High
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              Price: High to Low
            </button>
          </div>
        </section>

        <div className="p-8 flex justify-center">
          <div className="w-3/4">
            <div className={`grid grid-cols-5 gap-3`}>
              {dogs.map((dog) => (
                <DogCard src={dog.src} name={dog.name} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
