/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

// 4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą.

export type PersonGenderIncome = Pick<Required<Person>, 'sex' | 'income'>;

export const showGenderIncome = ({
  sex,
  income,
}: Person): PersonGenderIncome => ({ sex, income: Number(income) });

export const printPersonGenderIncome = ({
  sex,
  income,
}: PersonGenderIncome) => {
  console.log(`\t${sex}, ${income}`);
};
