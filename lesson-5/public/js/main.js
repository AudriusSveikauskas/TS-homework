import { people } from './persons-data.js';
import { printPersonNameSurname, showNameSurname } from './task1.js';
import { printPersonMarriedHasCar, showMarriedHasCarPerson } from './task2.js';
import { printPersonNameSurnameMarried, showNameSurnameMarried, } from './task3.js';
import { printPersonGenderIncome, showGenderIncome } from './task4.js';
const personNameSurnameArr = people.map((person) => showNameSurname(person));
console.log(`\n**** TASK 1 (print only NAME and SURNAME) ****
\n`);
personNameSurnameArr.forEach((person) => printPersonNameSurname(person));
const personMarriedHasCarArr = people.map((person) => showMarriedHasCarPerson(person));
console.log(`\n**** TASK 2 (print only MARRIED and HASCAR) ****
\n`);
personMarriedHasCarArr.forEach((person) => printPersonMarriedHasCar(person));
const personNameSurnameMarriedArr = people.map((person) => showNameSurnameMarried(person));
console.log(`\n**** TASK 3 (print only NAME, SURNAME and MARRIED) ****
\n`);
personNameSurnameMarriedArr.forEach((person) => printPersonNameSurnameMarried(person));
const personGenderIncomArr = people.map((person) => showGenderIncome(person));
console.log(`\n**** TASK 4 (print only GENDER and INCOME) ****
\n`);
personGenderIncomArr.forEach((person) => printPersonGenderIncome(person));
//# sourceMappingURL=main.js.map