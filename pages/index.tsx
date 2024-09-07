import Image from 'next/image';
import { Header } from '../components/header';
import {
  mocked_transactions,
  my_mocked_account,
  my_mocked_dogs,
} from '../components/mock/mocked_data';
import DogCardExtended from '../components/extended_dog_card';
import Footer from '../components/footer';
import { TransactionHistory } from '../components/transaction_history';
import { UserInfo } from '../components/user_info';
import { useState } from 'react';
import NewDogModal from '../components/modals/new_dog_modal';

export default function Home() {
  const [isNewDogModalOpen, setIsNewDogModalOpen] = useState<boolean>(false);
  const [isBreeder, setIsBreeder] = useState<boolean>(false);

  return (
    <>
      <Header />
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <main className="flex-1 p-8 space-y-16">
          <UserInfo
            user={my_mocked_account}
            isBreeder={isBreeder}
            setIsBreeder={setIsBreeder}
          />
          <section>
            <div className="flex">
              <h2 className="flex-1 text-2xl font-semibold mb-4">My Dogs</h2>
              <button
                className="p-2 bg-blue-500 rounded m-2"
                onClick={() => setIsNewDogModalOpen(true)}
              >
                {' '}
                Add new dog{' '}
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {my_mocked_dogs.map((dog) => (
                <DogCardExtended isBreeder={isBreeder} dog={dog} key={dog.id} />
              ))}
            </div>
          </section>

          <TransactionHistory transactions={mocked_transactions} />
        </main>
      </div>
      <Footer />
      <NewDogModal
        title="New dog creation"
        isOpen={isNewDogModalOpen}
        setIsOpen={setIsNewDogModalOpen}
      ></NewDogModal>
    </>
  );
}
