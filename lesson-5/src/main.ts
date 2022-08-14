/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { people } from './persons-data.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { printPersonNameSurname, showNameSurname } from './task1.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { printPersonMarriedHasCar, showMarriedHasCarPerson } from './task2.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import {
  printPersonNameSurnameMarried,
  showNameSurnameMarried,
} from './task3.js';

// 1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu.
// Naudojant šią funkciją performuokite visą žmonių masyvą.

const personNameSurnameArr = people.map((person) => showNameSurname(person));
console.log(`\n**** TASK 1 (print only NAME and SURNAME) ****
\n`);
personNameSurnameArr.forEach((person) => printPersonNameSurname(person));

// 2. Sukurkite funkciją, kuri paverčia žmogaus objektą {married: boolean, hasCar: boolean} objektu.
// Naudojant šią funkciją performuokite visą žmonių masyvą.

const personMarriedHasCarArr = people.map((person) =>
  showMarriedHasCarPerson(person),
);
console.log(`\n**** TASK 2 (print only MARRIED and HASCAR) ****
\n`);
personMarriedHasCarArr.forEach((person) => printPersonMarriedHasCar(person));

// 3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais.

const personNameSurnameMarriedArr = people.map((person) =>
  showNameSurnameMarried(person),
);
console.log(`\n**** TASK 3 (print only NAME, SURNAME and MARRIED) ****
\n`);
personNameSurnameMarriedArr.forEach((person) =>
  printPersonNameSurnameMarried(person),
);
