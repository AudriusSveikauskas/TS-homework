/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

// 9. Atspausdinkite žmones kurie yra susituokę.

export type PersonMarried = Pick<Person, 'name' | 'surname'>;

export const showMarried = (arr: Person[]): PersonMarried[] => arr
  .filter((person) => person.married);

export const printPersonMerried = ({ name, surname }: PersonMarried) => {
  console.log(`\t${name} ${surname}`);
};
