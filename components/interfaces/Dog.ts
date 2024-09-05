export interface Dog {
  src: string;
  name: string;
}

export interface DogTransactionParams {
  date: string;
  type: string;
  dog: string;
  description: string;
}
