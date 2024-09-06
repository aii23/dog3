import Image from 'next/image';
import { Header } from '../components/header';
import {
  mocked_transactions,
  my_mocked_dogs,
} from '../components/mock/mocked_data';
import DogCardExtended from '../components/extended_dog_card';
import Footer from '../components/footer';
import { TransactionHistory } from '../components/transaction_history';

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
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
                <DogCardExtended dog={dog} />
              ))}
            </div>
          </section>

          <TransactionHistory transactions={mocked_transactions} />
        </main>
      </div>
      <Footer />
    </>
  );
}
