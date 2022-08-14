/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { people } from './persons-data.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { printPersonNameSurname, showNameSurname } from './task1.js';

// 1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu.
// Naudojant šią funkciją performuokite visą žmonių masyvą.

const personNameSurnameArr = people.map((person) => showNameSurname(person));
console.log(`\n**** TASK 1 (print only name and surname) ****
\n`);
personNameSurnameArr.forEach((person) => printPersonNameSurname(person));
