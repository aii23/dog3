import Image from 'next/image';

type DogCardProps = {
  src: string;
  name: string;
};

export default function DogCardExtended({ src, name }: DogCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg flex h-80 w-full">
      {/* Image container */}
      <div className="h-full aspect-square relative">
        <Image
          src={src}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg" // Only round the left corners of the image
        />
      </div>

      {/* Content on the right */}
      <div className="flex flex-col justify-center pl-4 w-full">
        <h2 className="text-white text-left font-semibold">{name}</h2>
        <p className="text-gray-400 text-left">Some description here</p>
      </div>
    </div>
  );
}
