import { Dog, DogTransactionParams } from '../interfaces/Dog';

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
