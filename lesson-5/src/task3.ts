/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

// 3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais.

export type PersonNameSurnameMarried = Pick<
  Required<Person>,
  'name' | 'surname' | 'married'
>;

export const showNameSurnameMarried = ({
  name,
  surname,
  married,
}: Person): PersonNameSurnameMarried => ({
  name,
  surname,
  married: Boolean(married),
});

export const printPersonNameSurnameMarried = ({
  name,
  surname,
  married,
}: PersonNameSurnameMarried) => {
  console.log(
    `\t${name} ${surname} ${married ? 'is married.' : 'is not married.'}`,
  );
};
