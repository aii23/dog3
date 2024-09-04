import Image from 'next/image';

type DogCardProps = {
  src: string;
  name: string;
};

export default function DogCard({ src, name }: DogCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg flex items-center justify-center">
      <div className="w-full h-0 pb-[100%] relative">
        <Image
          src={src}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <h2 className="absolute bottom-0 left-0 w-full text-white text-left pl-3 py-2 font-semibold">
          {name}
        </h2>
      </div>
    </div>
  );
}
