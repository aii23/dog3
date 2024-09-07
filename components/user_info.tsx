import Image from 'next/image';
import { User } from './interfaces/User';

export const UserInfo = (args: { user: User }) => {
  const { user } = args;
  return (
    <div className="flex flex-col h-1/5">
      <h1 className="text-3xl font-semibold">My Account: ${user.address}</h1>
      <div className="flex flex-col sm:flex-row mt-4 items-start">
        <div className="relative w-44 h-44 flex-0">
          <Image
            src={user.src}
            alt={user.address}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex-0 sm:ml-4 mt-4 sm:mt-0 flex-1">
          <h1 className="text-xl font-semibold">Description</h1>
          <div>{user.descriptions}</div>
        </div>
      </div>
    </div>
  );
};
