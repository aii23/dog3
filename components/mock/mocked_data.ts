import { Dog, DogTransactionParams } from '../interfaces/Dog';

export const my_mocked_dogs: Dog[] = [...Array(3)].map(() => {
  return { src: '/dog1.png', name: 'g1' };
});

export const mocked_dogs: Dog[] = [...Array(12)].map(() => {
  return { src: '/dog1.png', name: 'g1' };
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
