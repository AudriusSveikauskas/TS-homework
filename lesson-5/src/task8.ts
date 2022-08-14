/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

// 8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas.

export type PersonNameSurnameHasCar = Pick<Person, 'name' | 'surname'>;

export const showNameSurnameHasCar = (
  arr: Person[],
): PersonNameSurnameHasCar[] => arr.filter((person) => person.hasCar);

export const printPersonNameSurnameHasCar = ({
  name,
  surname,
}: PersonNameSurnameHasCar) => {
  console.log(`\t${name} ${surname}`);
};
