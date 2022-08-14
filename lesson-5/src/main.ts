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
// eslint-disable-next-line import/no-unresolved,import/extensions
import { printPersonGenderIncome, showGenderIncome } from './task4.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import {
  printPersonNameSurnameGender,
  showNameSurnameGender,
} from './task5.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { printMaleGenderPerson, showMaleGender } from './task6.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { printFemaleGenderPerson, showFemaleGender } from './task7.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import {
  printPersonNameSurnameHasCar,
  showNameSurnameHasCar,
} from './task8.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { printPersonMerried, showMarried } from './task9.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import {
  PersonHasCarByGender,
  printHasCarByGender,
  showHasCarByGender,
} from './task10.js';

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

// 4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą.

const personGenderIncomArr = people.map((person) => showGenderIncome(person));
console.log(`\n**** TASK 4 (print only GENDER and INCOME) ****
\n`);
personGenderIncomArr.forEach((person) => printPersonGenderIncome(person));

// 5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą.

const personNameSurnameGenderArr = people.map((person) =>
  showNameSurnameGender(person),
);
console.log(`\n**** TASK 5 (print only NAME, SURNAME and GENDER) ****
\n`);
personNameSurnameGenderArr.forEach((person) =>
  printPersonNameSurnameGender(person),
);

// 6. Atspausdinkite visus vyrus.

const personMaleGenderArr = showMaleGender(people);
console.log(`\n**** TASK 6 (print only MALE persons) ****
\n`);
personMaleGenderArr.forEach((person) => printMaleGenderPerson(person));

// 7. Atspausdinkite visas moteris.

const personFemaleGenderArr = showFemaleGender(people);
console.log(`\n**** TASK 7 (print only FEMALE persons) ****
\n`);
personFemaleGenderArr.forEach((person) => printFemaleGenderPerson(person));

// 8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas.

const personNameSurnameHasCarArr = showNameSurnameHasCar(people);
console.log(`\n**** TASK 8 (print only HASCAR persons) ****
\n`);
personNameSurnameHasCarArr.forEach((person) =>
  printPersonNameSurnameHasCar(person),
);

// 9. Atspausdinkite žmones kurie yra susituokę.

const personMarried = showMarried(people);
console.log(`\n**** TASK 9 (print only MARRIED persons) ****
\n`);
personMarried.forEach((person) => printPersonMerried(person));

// 10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį.

const personHasCarByGender: PersonHasCarByGender = people.reduce(
  showHasCarByGender,
  {},
);
console.log(`\n**** TASK 10 (print total HASCAR by gender) ****
\n`);
printHasCarByGender(personHasCarByGender);
