import Image from 'next/image';
import Link from 'next/link';
import { Dog } from './interfaces/Dog';
// import Modal from './modal';
import { useState } from 'react';
import Modal from './modals/modal';
import NewLostDogModal from './modals/new_lost_dog_modal';
import NewSellOrderModal from './modals/new_sell_order copy';
import { Button } from './elements/button';

type DogCardProps = {
  dog: Dog;
  isBreeder: boolean;
};

export default function DogCardExtended({ dog, isBreeder }: DogCardProps) {
  const [sellModalOpen, setSellModalOpen] = useState<boolean>(false);
  const [lostDogModalOpen, setLostDogModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-gray-800 rounded-lg flex h-54 w-full shadow-lg overflow-hidden">
        {/* Image container */}
        <div className="h-full w-1/3 relative">
          <Link href={`/dogs/${dog.id}`}>
            <Image
              src={dog.src}
              alt={dog.name}
              layout="fill"
              objectFit="contain"
              className="rounded-l-lg"
            />
          </Link>
        </div>

        {/* Content on the right */}
        <div className="flex flex-col justify-between p-4 w-2/3">
          <div>
            <h2 className="text-white text-left text-2xl font-bold">
              {dog.name}
            </h2>
            <p className="text-gray-400 text-left mt-2">Age: {dog.age}</p>
            <p className="text-gray-400 text-left mt-1">Breed: {dog.breed}</p>
            <p className="text-gray-400 text-left mt-1">Sex: {dog.sex}</p>
          </div>

          <div className="flex mt-4">
            <Button
              onClick={() => setLostDogModalOpen(true)}
              name="Claim Lost"
              color="red"
            />
            {isBreeder && (
              <Button
                name="Sell"
                onClick={() => setSellModalOpen(true)}
                color="blue"
              />
            )}
          </div>
        </div>
      </div>

      <NewLostDogModal
        title="Fill information about missing dog"
        isOpen={lostDogModalOpen}
        setIsOpen={setLostDogModalOpen}
      />
      <NewSellOrderModal
        title="Fill sell order information"
        isOpen={sellModalOpen}
        setIsOpen={setSellModalOpen}
      />
    </>
  );
}
