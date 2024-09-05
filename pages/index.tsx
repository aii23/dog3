import Image from 'next/image';
import { Header } from '../components/header';
import { my_mocked_dogs } from '../components/mock/mocked_data';
import DogCardExtended from '../components/extended_dog_card';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 space-y-16">
        <section>
          <h1 className="text-3xl font-semibold">My Account</h1>
          <p className="text-gray-400">
            Manage your account and view your activity
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">My Dogs</h2>
          <div className="flex flex-col gap-4">
            {my_mocked_dogs.map((dog) => (
              <DogCardExtended src={dog.src} name={dog.name} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
          <table className="w-full text-left table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-2 border-b border-gray-700">Date</th>
                <th className="p-2 border-b border-gray-700">Type</th>
                <th className="p-2 border-b border-gray-700">Amount</th>
                <th className="p-2 border-b border-gray-700">Asset</th>
                <th className="p-2 border-b border-gray-700">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-gray-700">10/22/23</td>
                <td className="p-2 border-b border-gray-700">
                  <button className="px-3 py-1 bg-blue-600 rounded-lg hover:bg-blue-500">
                    Received
                  </button>
                </td>
                <td className="p-2 border-b border-gray-700">0.1 ETH</td>
                <td className="p-2 border-b border-gray-700">Ethereum</td>
                <td className="p-2 border-b border-gray-700">Pupify #1</td>
              </tr>
              {/* Repeat similar rows for other transactions */}
            </tbody>
          </table>
        </section>
      </main>

      <footer className="p-6 bg-gray-800 text-center">
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Press
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Guidelines
            </a>
          </li>
        </ul>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#">
            <img
              src="/instagram-icon.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a href="#">
            <img src="/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-500">&copy; 2023 Pupify</p>
      </footer>
    </div>
  );
}
