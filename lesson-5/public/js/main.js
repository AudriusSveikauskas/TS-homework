import { people } from './persons-data.js';
import { printPersonNameSurname, showNameSurname } from './task1.js';
import { printPersonMarriedHasCar, showMarriedHasCarPerson } from './task2.js';
import { printPersonNameSurnameMarried, showNameSurnameMarried, } from './task3.js';
import { printPersonGenderIncome, showGenderIncome } from './task4.js';
import { printPersonNameSurnameGender, showNameSurnameGender, } from './task5.js';
import { printMaleGenderPerson, showMaleGender } from './task6.js';
import { printFemaleGenderPerson, showFemaleGender } from './task7.js';
import { printPersonNameSurnameHasCar, showNameSurnameHasCar, } from './task8.js';
import { printPersonMerried, showMarried } from './task9.js';
import { printHasCarByGender, showHasCarByGender, } from './task10.js';
import { printPersonSalary, showPersonSalary } from './task11.js';
import { printPersonWithoutNameSurnameGender, showPersonWithoutNameSurnameGender, } from './task12.js';
import { printPersonFullname, showFullname } from './task13.js';
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
const personNameSurnameGenderArr = people.map((person) => showNameSurnameGender(person));
console.log(`\n**** TASK 5 (print only NAME, SURNAME and GENDER) ****
\n`);
personNameSurnameGenderArr.forEach((person) => printPersonNameSurnameGender(person));
const personMaleGenderArr = showMaleGender(people);
console.log(`\n**** TASK 6 (print only MALE persons) ****
\n`);
personMaleGenderArr.forEach((person) => printMaleGenderPerson(person));
const personFemaleGenderArr = showFemaleGender(people);
console.log(`\n**** TASK 7 (print only FEMALE persons) ****
\n`);
personFemaleGenderArr.forEach((person) => printFemaleGenderPerson(person));
const personNameSurnameHasCarArr = showNameSurnameHasCar(people);
console.log(`\n**** TASK 8 (print only HASCAR persons) ****
\n`);
personNameSurnameHasCarArr.forEach((person) => printPersonNameSurnameHasCar(person));
const personMarried = showMarried(people);
console.log(`\n**** TASK 9 (print only MARRIED persons) ****
\n`);
personMarried.forEach((person) => printPersonMerried(person));
const personHasCarByGender = people.reduce(showHasCarByGender, {});
console.log(`\n**** TASK 10 (print total HASCAR by gender) ****
\n`);
printHasCarByGender(personHasCarByGender);
const personSalaryArr = people.map((person) => showPersonSalary(person));
console.log(`\n**** TASK 11 (print SALARY instead of INCOME) ****
\n`);
printPersonSalary(personSalaryArr);
const personWithoutNameSurnameGender = people.map((person) => showPersonWithoutNameSurnameGender(person));
console.log(`\n**** TASK 12 (print PERSON without NAME, SURNAME and SEX) ****
\n`);
printPersonWithoutNameSurnameGender(personWithoutNameSurnameGender);
const personFullname = people.map((person) => showFullname(person));
console.log(`\n**** TASK 13 (print PERSON FULLNAME instead of NAME and SURNAME) ****
\n`);
printPersonFullname(personFullname);
//# sourceMappingURL=main.js.map