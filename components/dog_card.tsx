import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dog } from './interfaces/Dog';

export default function DogCard(args: { dog: Dog }) {
  const { dog } = args;
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
            className="absolute w-full h-full bg-gray-800 rounded-lg flex items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)', // Rotate the back side by 180 degrees
            }}
          >
            <div className="text-white p-4 text-center">
              <h2 className="font-semibold text-xl">{dog.name}</h2>
              <p className="mt-2 text-sm">
                {/* More information about the dog */}
                This is some additional information about {dog.name}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
