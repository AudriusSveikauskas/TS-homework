/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

// 11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary".

export type PersonSalary = Omit<Person, 'income'> & {
  salary?: Person['income'];
};

export const showPersonSalary = ({ income, ...rest }: Person): PersonSalary => {
  const personWithSalary: PersonSalary = { ...rest };
  if (income) {
    personWithSalary.salary = income;
  }
  return personWithSalary;
};

export const printPersonSalary = (arr: PersonSalary[]) =>
  arr.forEach((person, index) => {
    console.log(`\n------------ Person ${index} ------------
    \n`);
    for (const personKey in person) {
      console.log(
        `\t${personKey[0].toUpperCase() + personKey.slice(1).toLowerCase()}: ${
          // @ts-ignore
          person[personKey]
        }`,
      );
    }
  });
