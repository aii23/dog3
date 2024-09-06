export interface Dog {
  src: string;
  name: string;
  age: string;
  sex: string;
  breed: string;
}

export interface LostDogInfo {
  dog: Dog;
  location: string;
  time: string;
}

export interface FoundDogInfo {
  dog: Dog;
  location: string;
  time: string;
  foundBy: string;
}

export interface DogTransactionParams {
  date: string;
  type: string;
  dog: string;
  description: string;
}
