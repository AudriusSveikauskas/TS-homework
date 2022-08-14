/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data';

// 7. Atspausdinkite visas moteris.

export type PersonFemaleGender = Pick<Person, 'name' | 'surname'>;

export const showFemaleGender = (arr: Person[]): PersonFemaleGender[] => arr
  .filter((person) => person.sex === 'female');

export const printFemaleGenderPerson = ({
  name,
  surname,
}: PersonFemaleGender) => {
  console.log(`\t${name} ${surname}`);
};
