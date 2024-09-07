import Image from 'next/image';
import Link from 'next/link';
import { Dog } from './interfaces/Dog';
// import Modal from './modal';
import { useState } from 'react';
import Modal from './modals/modal';
import NewLostDogModal from './modals/new_lost_dog_modal';

type DogCardProps = {
  dog: Dog;
  isBreeder: boolean;
};

export default function DogCardExtended({ dog, isBreeder }: DogCardProps) {
  const [lostDogModalOpen, setLostDogModalOpen] = useState<boolean>(false);

  const onLostDogClick = () => {
    setLostDogModalOpen(true);
  };

  return (
    <>
      <div className="bg-gray-800 rounded-lg flex h-80 w-full">
        {/* Image container */}
        <div className="h-full aspect-square relative">
          <Link href={`/dogs/${dog.id}`}>
            <Image
              src={dog.src}
              alt={dog.name}
              layout="fill"
              objectFit="cover"
              className="rounded-l-lg" // Only round the left corners of the image
            />
          </Link>
        </div>

        {/* Content on the right */}
        <div className="flex flex-col justify-center pl-4 w-full">
          <h2 className="text-white text-left font-semibold">{dog.name}</h2>
          <p className="text-gray-400 text-left">Age: {dog.age}</p>
          <p className="text-gray-400 text-left">Breed: {dog.breed}</p>
          <p className="text-gray-400 text-left">Sex: {dog.sex}</p>

          <div>
            <button
              className="p-2 m-2 bg-red-500 rounded"
              onClick={onLostDogClick}
            >
              {' '}
              Claim lost{' '}
            </button>
            {isBreeder && (
              <button className="p-2 m-2 bg-blue-500 rounded"> Sell </button>
            )}
          </div>
        </div>
      </div>
      <NewLostDogModal
        title="Some big tile"
        isOpen={lostDogModalOpen}
        setIsOpen={setLostDogModalOpen}
        apply={() => {}}
      >
        <div></div>
      </NewLostDogModal>
    </>
  );
}
