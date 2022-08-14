/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Person } from './persons-data.js';

// 13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname".

export type PersonFullname = Omit<Person, 'name' | 'surname'> & {
  fullname: Person['name'];
};

export const showFullname = ({
  name,
  surname,
  ...rest
}: Person): PersonFullname => ({ fullname: `${name} ${surname}`, ...rest });

export const printPersonFullname = (arr: PersonFullname[]) => {
  arr.forEach((person, index) => {
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
};
