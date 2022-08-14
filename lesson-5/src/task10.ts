/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
/* eslint no-param-reassign: "error" */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

// 10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį.

// eslint-disable-next-line no-unused-vars
export type PersonHasCarByGender = { [Key in Person['sex']]?: number };

export const showHasCarByGender = (
  counter: PersonHasCarByGender,
  person: Person,
): PersonHasCarByGender => {
  // jei asmuo neturi automobilio nieko nedarom ir grąžinam gautą reikšmę
  if (!person.hasCar) {
    return counter;
  }
  // jei dar nebuvo tokios lyties sukuriam su reikšme 0, nieko negražinam kodas vykdomas toliau
  if (!counter[person.sex]) {
    counter[person.sex] = 0;
  }
  // padidinam skaitliuką 1 pagal asmens lytį
  counter[person.sex]! += 1;
  return counter;
};

export const printHasCarByGender = (list: PersonHasCarByGender) => {
  for (const gender in list) {
    console.log(
      `\t${gender[0].toUpperCase() + gender.slice(1).toLowerCase()}: ${
        // @ts-ignore
        list[gender]
      }.`,
    );
  }
};
