/* eslint no-console: ["error", { allow: ["log", "groupEnd", "group", "table"] }] */

type Person = {
  readonly name: string;
  readonly surname: string;
  readonly sex: 'male' | 'female';
  age: number;
  income?: number;
  married?: boolean;
  hasCar?: boolean;
};

const people: Person[] = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    // married: false,
    hasCar: false,
  },
];

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus

  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)

*/
console.group(
  '1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą',
);
{
  // Tipai:
  type Identity = {
    name: Person['name'];
    surname: Person['surname'];
  };

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => ({
    name,
    surname,
  });

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.group(
  '2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.',
);
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.group(
  '3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais',
);
{
  // type TaskProps = Pick<Person, 'name' | 'surname' | 'married'>;
  //
  // const selectTaskProps = ({ name, surname, married }: Person): TaskProps => ({
  //   name,
  //   surname,
  //   married: Boolean(married),
  // });

  type PersonNameSurnameMarried = Pick<Person, 'name' | 'surname'> & {
    isMarried: boolean | string;
  };

  const selectTaskProps = ({
    name,
    surname,
    married,
  }: Person): PersonNameSurnameMarried => {
    let isMarried: string | boolean;
    if (typeof married === 'boolean') {
      isMarried = married;
    } else {
      isMarried = 'no data';
    }
    return { name, surname, isMarried };
  };

  const result: PersonNameSurnameMarried[] = people.map(selectTaskProps);
  console.table(result);
}
console.groupEnd();

console.group(
  '4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą',
);
{
  type PersonGenderIncome = Pick<Person, 'sex' | 'income'>;

  const showPersonGenderIncome = ({
    sex,
    income,
  }: Person): PersonGenderIncome => ({ sex, income: income || 0 });

  const result: PersonGenderIncome[] = people.map(showPersonGenderIncome);
  console.table(result);
}
console.groupEnd();

console.group(
  '5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą',
);
{
  type PersonNameSurnameGender = Pick<Person, 'name' | 'surname' | 'sex'>;

  const showPersonNameSurnameGender = ({
    name,
    surname,
    sex,
  }: Person): PersonNameSurnameGender => ({ name, surname, sex });

  const result: PersonNameSurnameGender[] = people.map(
    showPersonNameSurnameGender,
  );
  console.table(result);
}
console.groupEnd();

console.group('6. Atspausdinkite visus vyrus');
{
  type PersonMale = Omit<Person, 'sex'> & { sex: 'male' };

  const isPersonMale = ({ sex }: Person): Boolean => sex === 'male';

  const result: PersonMale[] = people.filter(isPersonMale) as PersonMale[];
  console.table(result);
}
console.groupEnd();

console.group('7. Atspausdinkite visas moteris');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.group(
  '8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas',
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.group('9. Atspausdinkite žmones kurie yra susituokę');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.group(
  '10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį',
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.group(
  '11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"',
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.group(
  '12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės',
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.group(
  '13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe',
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();
