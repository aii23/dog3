import {
  Dog,
  DogTransactionParams,
  FoundDogInfo,
  LostDogInfo,
  Vaccination,
} from '../interfaces/Dog';

export const my_mocked_dogs: Dog[] = [...Array(3)].map(() => {
  const id = Math.random().toString(36).substring(7); // Generate a random ID
  return {
    id, // Add the ID property
    src: '/dog1.png',
    name: 'g1',
    age: '' + Math.floor(Math.random() * 10) + 1,
    breed: 'Unknown',
    color: 'Unknown',
    sex: 'male',
  };
});

export const mocked_dogs: Dog[] = [...Array(12)].map(() => {
  const id = Math.random().toString(36).substring(7); // Generate a random ID
  return {
    id, // Add the ID property
    src: '/dog1.png',
    name: 'g1',
    age: '' + Math.floor(Math.random() * 10) + 1,
    breed: 'Unknown',
    color: 'Unknown',
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

export const all_mocked_dogs = [...mocked_dogs, ...my_mocked_dogs];

export const mocked_dogs_vaccinations = all_mocked_dogs.flatMap((dog) =>
  generateRandomVaccinations(dog.id)
);

function generateRandomVaccinations(dogId: string): Vaccination[] {
  const numVaccinations = Math.floor(Math.random() * 4) + 1; // Generate a random number of vaccinations (1 to 4)
  const vaccinations: Vaccination[] = [];
  for (let i = 0; i < numVaccinations; i++) {
    const date = generateRandomDate();
    const type = generateRandomVaccinationType();
    const description = generateRandomVaccinationDescription();
    vaccinations.push({ dogId, date, type, description });
  }
  return vaccinations;
}

function generateRandomDate() {
  const year = Math.floor(Math.random() * 3) + 2022; // Generate a random year (2022 to 2024)
  const month = Math.floor(Math.random() * 12) + 1; // Generate a random month (1 to 12)
  const day = Math.floor(Math.random() * 28) + 1; // Generate a random day (1 to 28)
  return `${month}/${day}/${year}`;
}

function generateRandomVaccinationType() {
  const types = ['Rabies', 'Distemper', 'Parvovirus', 'Bordetella'];
  const randomIndex = Math.floor(Math.random() * types.length);
  return types[randomIndex];
}

function generateRandomVaccinationDescription() {
  const descriptions = [
    'Annual vaccination',
    'Booster shot',
    'Puppy vaccination',
    'Required for boarding',
  ];
  const randomIndex = Math.floor(Math.random() * descriptions.length);
  return descriptions[randomIndex];
}
