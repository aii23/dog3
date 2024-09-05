import { Dog } from '../interfaces/Dog';

export const my_mocked_dogs: Dog[] = [...Array(3)].map(() => {
  return { src: '/dog1.png', name: 'g1' };
});

export const mocked_dogs: Dog[] = [...Array(12)].map(() => {
  return { src: '/dog1.png', name: 'g1' };
});
