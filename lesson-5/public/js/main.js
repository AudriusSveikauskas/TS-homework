import { people } from './persons-data.js';
import { printPersonNameSurname, showNameSurname } from './task1.js';
const personNameSurnameArr = people.map((person) => showNameSurname(person));
console.log(`\n**** TASK 1 (print only name and surname) ****
\n`);
personNameSurnameArr.forEach((person) => printPersonNameSurname(person));
//# sourceMappingURL=main.js.map