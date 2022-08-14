/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

// 5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą.

export type PersonNameSurnameGender = Pick<
  Required<Person>,
  'name' | 'surname' | 'sex'
>;

export const showNameSurnameGender = ({
  name,
  surname,
  sex,
}: Person): PersonNameSurnameGender => ({ name, surname, sex });

export const printPersonNameSurnameGender = ({
  name,
  surname,
  sex,
}: PersonNameSurnameGender) => {
  console.log(
    `\t${name} ${surname} ${sex === 'male' ? 'is a man' : 'is a woman'}.`,
  );
};
