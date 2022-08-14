/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

// 2. Sukurkite funkciją, kuri paverčia žmogaus objektą {married: boolean, hasCar: boolean} objektu.
// Naudojant šią funkciją performuokite visą žmonių masyvą.

export type PersonMarriedHasCar = Pick<Required<Person>, 'married' | 'hasCar'>;

export const showMarriedHasCarPerson = ({
  married,
  hasCar,
}: Person): PersonMarriedHasCar => ({
  married: Boolean(married),
  hasCar: Boolean(hasCar),
});

export const printPersonMarriedHasCar = ({
  married,
  hasCar,
}: PersonMarriedHasCar) => {
  console.log(`\t${married}, ${hasCar}`);
};
