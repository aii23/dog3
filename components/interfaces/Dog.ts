export interface Dog {
  src: string;
  name: string;
  age: string;
  sex: string;
  breed: string;
}

export interface DogTransactionParams {
  date: string;
  type: string;
  dog: string;
  description: string;
}
