import Image from 'next/image';
import { Header } from '../components/header';
import SellDogCard from '../components/dog_card';
import { Dog } from '../components/interfaces/Dog';
import { mocked_dogs } from '../components/mock/mocked_data';
import Footer from '../components/footer';

export default function Marketplace() {
  return (
    <>
      <Header />
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
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
                {mocked_dogs.map((dog) => (
                  <SellDogCard dog={dog} price={1} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
