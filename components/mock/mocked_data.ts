import {
  Dog,
  DogTransactionParams,
  FoundDogInfo,
  LostDogInfo,
} from '../interfaces/Dog';

export const my_mocked_dogs: Dog[] = [...Array(3)].map(() => {
  return {
    src: '/dog1.png',
    name: 'g1',
    age: '' + Math.floor(Math.random() * 10) + 1, // Generate a random age between 1 and 10
    breed: 'Unknown', // Set the breed as "Unknown"
    color: 'Unknown', // Set the color as "Unknown"
    sex: 'male',
  };
});

export const mocked_dogs: Dog[] = [...Array(12)].map(() => {
  return {
    src: '/dog1.png',
    name: 'g1',
    age: '' + Math.floor(Math.random() * 10) + 1, // Generate a random age between 1 and 10
    breed: 'Unknown', // Set the breed as "Unknown"
    color: 'Unknown', // Set the color as "Unknown"
    sex: 'male',
  };
});

export const mocked_transactions: DogTransactionParams[] = [
  {
    date: '10/12/24',
    type: 'Vacination',
    dog: 'Pupify #1',
    description: 'Vacination 2',
  },
  {
    date: '11/10/24',
    type: 'Vacination',
    dog: 'Pupify #1',
    description: 'Vacination 1',
  },
  {
    date: '10/10/24',
    type: 'Purchase',
    dog: 'Pupify #1',
    description: 'Purchase',
  },
];

export const mocked_lost_dogs: LostDogInfo[] = [
  {
    dog: mocked_dogs[0],
    location: 'San Jose, CA',
    time: 'Found at 10:30am',
  },
  {
    dog: mocked_dogs[1],
    location: 'New York, NY',
    time: 'Found at 11:30am',
  },
];

export const mocked_found_dogs: FoundDogInfo[] = [
  {
    dog: mocked_dogs[2],
    location: 'San Jose, CA',
    time: 'Found at 10:30am',
    foundBy: 'John Doe',
  },
  {
    dog: mocked_dogs[3],
    location: 'New York, NY',
    time: 'Found at 11:30am',
    foundBy: 'Peter Parker',
  },
  {
    dog: mocked_dogs[4],
    location: 'Hollywood, CA',
    time: 'Found at 9:30am',
    foundBy: 'Sam Wilson',
  },
];
