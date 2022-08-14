/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

export type PersonNameSurname = {
  name: Person['name'];
  surname: Person['surname'];
};

export const showNameSurname = ({
  name,
  surname,
}: Person): PersonNameSurname => ({
  name,
  surname,
});

export const printPersonNameSurname = ({
  name,
  surname,
}: PersonNameSurname) => {
  console.log(`\t${name} ${surname}`);
};
