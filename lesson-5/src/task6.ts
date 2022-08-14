/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

// 6. Atspausdinkite visus vyrus.

export type PersonMaleGender = Pick<Person, 'name' | 'surname'>;

export const showMaleGender = (arr: Person[]): PersonMaleGender[] => arr
  .filter((person) => person.sex === 'male');

export const printMaleGenderPerson = ({ name, surname }: PersonMaleGender) => {
  console.log(`\t${name} ${surname}`);
};
