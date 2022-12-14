type PrimitiveType = string | number | boolean;

/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai

  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/

// Helpers
const printTitle = <T>(title: T): void => console.log(`%c\n\t${title}\n`, 'color: #63e6be');
const printResult = <T>(result: T): void => console.table(result);

// Data
const numbersArr = [1, [11, 22, [111, 222, 333]], 3, 4, [5, 55]];
const stringsArr = ['hello', ['wood', 'tree'], 'string', 'red', '777'];

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const getFirstArrEl = <T>(arr: T[]): T | undefined => arr[0];

  printTitle('FIRST item of NUMBERS array:');
  printResult(getFirstArrEl(numbersArr));

  printTitle('FIRST item of STRINGS array:');
  printResult(getFirstArrEl(stringsArr));
}
console.groupEnd();

console.group(
  '2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.',
);
{
  const getLastArrEl = <T>(arr: T[]): T | undefined => arr[arr.length - 1];

  printTitle('LAST item of NUMBERS array:');
  printResult(getLastArrEl(numbersArr));

  printTitle('LAST item of STRINGS array:');
  printResult(getLastArrEl(stringsArr));
}
console.groupEnd();

console.group(
  '3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją',
);
{
  const cloneArr = <T>(arr: T[]): T[] => structuredClone(arr);

  const clonedNumbersArr = cloneArr(numbersArr);
  clonedNumbersArr[0] = 123;
  clonedNumbersArr[1] = 456;
  clonedNumbersArr[2] = 789;

  const clonedStringsArr = cloneArr(stringsArr);
  clonedStringsArr[0] = 'aaa';
  clonedStringsArr[2] = 'bbb';
  clonedStringsArr[3] = 'ccc';

  printTitle('Original NUMBERS array:');
  printResult(numbersArr);

  printTitle('Deep cloned and changed NUMBERS array:');
  printResult(clonedNumbersArr);

  printTitle('Original STRINGS array:');
  printResult(stringsArr);

  printTitle('Deep cloned and changed STRINGS array:');
  printResult(clonedStringsArr);
}
console.groupEnd();

console.group(
  '4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru',
);
{
  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]
  // Sprendimas ir rezultatų spausdinimas

  type RepeatItem = [PrimitiveType | Object, number];

  const repeatItemsArr: RepeatItem[] = [
    [777, 3],
    ['abc', 2],
    [false, 4],
    [[1, 2, [3, 33, 333]], 3],
    [{ name: 'Joe', age: 25 }, 2],
  ];

  const repeatItems = <T>(itemToRepeat: T, numberOfIterations: number): T[] => {
    const newArr: T[] = [];
    for (let i = 1; i <= numberOfIterations; i += 1) {
      newArr.push(itemToRepeat);
    }
    return newArr;
  };

  printTitle(`Original data:\n\n${JSON.stringify(repeatItemsArr)}`);
  repeatItemsArr.forEach((arr) => {
    printResult(repeatItems(arr[0], arr[1]));
  });
}
console.groupEnd();

console.group(
  '5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą',
);
{
  const joinArrays = <T>(...args: T[][]): T[] => args.reduce((acc, arr) => acc.concat(arr));

  const numArr1 = [1, 2, 3, 4];
  const numArr2 = [5, 6];
  const numArr3 = [7, 8, 9];

  printTitle(`Original data:
  \n\t arr1 = [${numArr1}]
  \t arr2 = [${numArr2}]
  \t arr3 = [${numArr3}]`);
  printResult(joinArrays(numArr1, numArr2, numArr3));

  const strArr1 = ['Monday', 'Tuesday'];
  const strArr2 = ['Wednesday', 'Thursday'];
  const strArr3 = ['Friday', 'Saturday'];
  const strArr4 = ['Sunday'];

  printTitle(`Original data:
  \n\t arr1 = [${strArr1}]
  \t arr2 = [${strArr2}]
  \t arr2 = [${strArr3}]
  \t arr3 = [${strArr4}]`);
  printResult(joinArrays(strArr1, strArr2, strArr3, strArr4));
}
console.groupEnd();

console.group(
  '6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.',
);
{
  type SetterGetter<T> = {
    setProp: (newValue: T) => void;
    getProp: () => T;
  };

  const createSetterAndGetter = <T>(initValue: T): SetterGetter<T> => {
    let prop: T = initValue;

    return {
      // eslint-disable-next-line no-return-assign
      setProp: (newValue) => (prop = newValue),
      getProp: () => prop,
    };
  };

  const num = 123;
  const str = 'Summer';
  const arr = [1, 2, 3, 4, 5];
  const obj = { username: 'Ghost777', email: 'ghost777@gmail.com' };

  printTitle(
    'Actions:\n\t\t-> const num = 123;\n\t\t-> const obj1 = createSetterAndGetter(num);\n\t\t-> obj1.getProp();',
  );
  const obj1 = createSetterAndGetter(num);
  printResult(obj1.getProp());

  printTitle('Actions:\n\t\t-> obj1.setProp(321);\n\t\t-> obj1.getProp();');
  obj1.setProp(321);
  printResult(obj1.getProp());

  printTitle(
    "Actions:\n\t\t-> const str = 'Summer';\n\t\t-> const obj2 = createSetterAndGetter(str);\n\t\t-> obj2.getProp();",
  );
  const obj2 = createSetterAndGetter(str);
  printResult(obj2.getProp());

  printTitle(
    "Actions:\n\t\t-> obj2.setProp('Winter');\n\t\t-> obj2.getProp();",
  );
  obj2.setProp('Winter');
  printResult(obj2.getProp());

  printTitle(
    'Actions:\n\t\t-> const arr = [1, 2, 3, 4, 5];\n\t\t-> const obj3 = createSetterAndGetter(arr);\n\t\t-> obj3.getProp();',
  );
  const obj3 = createSetterAndGetter(arr);
  printResult(obj3.getProp());

  printTitle(
    'Actions:\n\t\t-> obj3.setProp([55, 44, 33, 22, 11]);\n\t\t-> obj3.getProp();',
  );
  obj3.setProp([55, 44, 33, 22, 11]);
  printResult(obj3.getProp());

  printTitle(
    "Actions:\n\t\t-> const obj = { username: 'Ghost777', email: 'ghost777@gmail.com' };\n\t\t-> const obj4 = createSetterAndGetter(obj);\n\t\t-> obj4.getProp();",
  );
  const obj4 = createSetterAndGetter(obj);
  printResult(obj4.getProp());

  printTitle(
    "Actions:\n\t\t-> obj4.setProp({ username: '_kraken_', email: 'kraken_@yahoo.com' });\n\t\t-> obj4.getProp();",
  );
  obj4.setProp({ username: '_kraken_', email: 'kraken_@yahoo.com' });
  printResult(obj4.getProp());
}
console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string;
    surname: string;
  };

  type Student = Person & {
    university: string;
    course: number;
  };

  type Worker = Person & {
    avgMonthlyPay: number;
  };

  const isStudent = (person: Person): person is Student => {
    const student = person as Student;
    return !!(student.university && student.course);
  };

  const isWorker = (person: Person): person is Worker => {
    const worker = person as Worker;
    return !!worker.avgMonthlyPay;
  };

  const people: (Person | Student | Worker)[] = [
    {
      name: 'Atstovė',
      surname: 'Galtokaitė',
      university: 'VU',
      course: 2,
    },
    { name: 'Kurpius', surname: 'Medainis' },
    { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
    { name: 'Ferodijus', surname: 'Cilcius' },
    { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
    {
      name: 'Zubrius',
      surname: 'Sulindauskas',
      university: 'VU',
      course: 2,
    },
    { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
    {
      name: 'Užuodauskas',
      surname: 'Perrašimauskas',
      university: 'VGTU',
      course: 1,
    },
  ];

  type GroupedPerson = {
    person: Person[];
    student: Student[];
    worker: Worker[];
  };

  const groupedPersons = people.reduce<GroupedPerson>(
    (prev, person): GroupedPerson => {
      if (isStudent(person)) {
        prev.student.push(person);
        return prev;
      }
      if (isWorker(person)) {
        prev.worker.push(person);
        return prev;
      }
      prev.person.push(person);
      return prev;
    },
    {
      person: [],
      student: [],
      worker: [],
    },
  );

  printTitle('Grouped persons:');
  printResult(groupedPersons.person);

  printTitle('Grouped students:');
  printResult(groupedPersons.student);

  printTitle('Grouped workers:');
  printResult(groupedPersons.worker);
}
