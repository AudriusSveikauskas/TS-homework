export type PersonsData = {
  readonly name: string;
  readonly surname: string;
  readonly sex: "male" | "female";
  age: number;
  income?: number;
  married?: boolean;
  hasCar?: boolean;
};

// '1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą'
