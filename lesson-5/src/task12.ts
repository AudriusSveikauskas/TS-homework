/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

// 12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės.

export type PersonWithoutNameSurnameGender = Omit<
  Person,
  'name' | 'surname' | 'sex'
>;

export const showPersonWithoutNameSurnameGender = ({
  name,
  surname,
  sex,
  ...rest
}: Person): PersonWithoutNameSurnameGender => ({ ...rest });

export const printPersonWithoutNameSurnameGender = (
  arr: PersonWithoutNameSurnameGender[],
) => arr
  .forEach((person, index) => {
    console.log(`\n------------ Person ${index + 1} ------------
    \n`);
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const personKey in person) {
      console.log(
        `\t${personKey[0].toUpperCase() + personKey.slice(1).toLowerCase()}: ${
          // @ts-ignore
          person[personKey]
        }`,
      );
    }
  });
