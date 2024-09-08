import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dog } from './interfaces/Dog';

export default function SellDogCard(args: { dog: Dog; price: number }) {
  const { dog, price } = args;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={`/dogs/${dog.id}`}>
      <div
        className="relative w-64 h-64 bg-gray-800 rounded-lg cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: '1000px' }} // Adds 3D perspective to the container
      >
        {/* Inner content wrapper */}
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-in-out ${
            isHovered ? 'transform rotate-y-180' : ''
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }} // Needed for 3D effect
        >
          {/* Front Side (Dog Image) */}
          <div
            className="absolute w-full h-full"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }} // Ensures the front side is not rotated
          >
            <Image
              src={dog.src}
              alt={dog.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <h2 className="absolute bottom-0 left-0 w-full text-white text-left pl-3 py-2 font-semibold bg-gradient-to-t from-black/60 to-transparent">
              {dog.name}
            </h2>
          </div>

          {/* Back Side (Dog Info) */}
          <div
            className="absolute w-full h-full bg-gray-800 rounded-lg flex justify-center"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)', // Rotate the back side by 180 degrees
            }}
          >
            <div className="flex flex-col bg-gray-800 text-white p-4 rounded-lg shadow-lg text-center h-full w-full">
              <h2 className="font-bold text-2xl mb-2">
                {dog.name} - ${price} ETH
              </h2>
              <div className="grid grid-cols-2 grid-rows-2 h-full gap-4">
                <div className="bg-gray-900 p-4 rounded-lg shadow-inner">
                  <div className="text-xl font-semibold">Id:</div>
                  <div className="text-lg">{dog.id}</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-inner">
                  <div className="text-xl font-semibold">Age:</div>
                  <div className="text-lg">{dog.age}</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-inner">
                  <div className="text-xl font-semibold">Breed:</div>
                  <div className="text-lg">{dog.breed}</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-inner">
                  <div className="text-xl font-semibold">Sex:</div>
                  <div className="text-lg">{dog.sex}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
