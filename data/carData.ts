interface Car {
  id: number;
  brand: string;
  year: number;
  model: string;
}

let cars: Car[] = [
  {
    id: 1,
    brand: "Audi",
    year: 2005,
    model: "RS5",
  },
  {
    id: 2,
    brand: "Mercedes",
    year: 2010,
    model: "AMG",
  },
  {
    id: 3,
    brand: "Nissan",
    year: 2011,
    model: "Duster",
  },
];

export default cars;
