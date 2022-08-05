/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */

console.group(
  '1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą',
);
{
  const lastArrayElementIndex = <T>(arr: T[]): number => arr.length - 1;

  console.log('[1, 2, 3, 4] last index:', lastArrayElementIndex([1, 2, 3, 4]));
  console.log(
    '["green", "red", "blue", "pink", "white"] last index:',
    lastArrayElementIndex(['green', 'red', 'blue', 'pink', 'white']),
  );
  console.log(
    '[{name: "Jonas", age: 45}, {name: "Petras", age: 30}] last index:',
    lastArrayElementIndex([
      { name: 'Jonas', age: 45 },
      { name: 'Petras', age: 30 },
    ]),
  );
}

console.groupEnd();

console.group(
  '2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis',
);
{
  const arrayElementIndex = <T>(arr: T[]): void => {
    arr.forEach((_item, index) => {
      console.log(`Indeksas: ${index}`);
    });
  };

  console.log('arrayElementIndex([1, 2, 3, 4])');
  arrayElementIndex([1, 2, 3, 4]);

  console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
  arrayElementIndex(['green', 'red', 'blue', 'pink', 'white']);

  console.log(
    "arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])",
  );
  arrayElementIndex([
    { name: 'Jonas', age: 45 },
    { name: 'Petras', age: 30 },
  ]);
}
console.groupEnd();

console.group(
  '3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis',
);
{
  const arrayElementItem = <T>(arr: T[]): void => {
    arr.forEach((item) => {
      console.log(
        `Reikšmė: ${typeof item === 'object' ? Object.values(item) : item}`,
      );
    });
  };

  console.log('arrayElementIndex([1, 2, 3, 4])');
  arrayElementItem([1, 2, 3, 4]);

  console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
  arrayElementItem(['green', 'red', 'blue', 'pink', 'white']);

  console.log(
    "arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])",
  );
  arrayElementItem([
    { name: 'Jonas', age: 45 },
    { name: 'Petras', age: 30 },
  ]);
}
console.groupEnd();

console.group(
  '4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ',
);
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const arrayElementIndexItem = <T>(arr: T[]): void => {
    arr.forEach((item, index) => {
      console.log(
        `[${index}] => ${
          typeof item === 'object' ? Object.values(item) : item
        }`,
      );
    });
  };

  console.log('arrayElementIndex([1, 2, 3, 4])');
  arrayElementIndexItem([1, 2, 3, 4]);

  console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
  arrayElementIndexItem(['green', 'red', 'blue', 'pink', 'white']);

  console.log(
    "arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])",
  );
  arrayElementIndexItem([
    { name: 'Jonas', age: 45 },
    { name: 'Petras', age: 30 },
  ]);
}
console.groupEnd();

console.group(
  '5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.',
);
{
  const arrayElementIndexItemReverse = <T>(arr: T[]): void => {
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      console.log(
        `[${i}] => ${
          typeof arr[i] === 'object' ? Object.values(arr[i]) : arr[i]
        }`,
      );
    }
  };

  console.log('arrayElementIndex([1, 2, 3, 4])');
  arrayElementIndexItemReverse([1, 2, 3, 4]);

  console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
  arrayElementIndexItemReverse(['green', 'red', 'blue', 'pink', 'white']);

  console.log(
    "arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])",
  );
  arrayElementIndexItemReverse([
    { name: 'Jonas', age: 45 },
    { name: 'Petras', age: 30 },
  ]);
}
console.groupEnd();

console.group(
  '6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...',
);
{
  const arrayElementIndexInRow = <T>(arr: T[]): void => {
    let str = '';
    arr.forEach((_item, index) => {
      str += `${index} `;
    });
    console.log(`Indeksai: ${str}`);
  };

  console.log('arrayElementIndex([1, 2, 3, 4])');
  arrayElementIndexInRow([1, 2, 3, 4]);

  console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
  arrayElementIndexInRow(['green', 'red', 'blue', 'pink', 'white']);

  console.log(
    "arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])",
  );
  arrayElementIndexInRow([
    { name: 'Jonas', age: 45 },
    { name: 'Petras', age: 30 },
  ]);
}
console.groupEnd();

console.group(
  '7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...',
);
{
  const arrayElementItemsInRow = <T>(arr: T[]): void => {
    let str = '';
    arr.forEach((item) => {
      str += `${typeof item === 'object' ? Object.values(item) : item} `;
    });
    console.log(`Reikšmės: ${str}`);
  };

  console.log('arrayElementIndex([1, 2, 3, 4])');
  arrayElementItemsInRow([1, 2, 3, 4]);

  console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
  arrayElementItemsInRow(['green', 'red', 'blue', 'pink', 'white']);

  console.log(
    "arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])",
  );
  arrayElementItemsInRow([
    { name: 'Jonas', age: 45 },
    { name: 'Petras', age: 30 },
  ]);
}
console.groupEnd();

console.group(
  '8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:',
);
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  const arrayElementIndexItemInRow = <T>(arr: T[]): void => {
    let str = '';
    arr.forEach((item, index) => {
      str += `[${index}] => ${
        typeof item === 'object' ? Object.values(item) : item
      }, `;
    });
    console.log(str);
  };

  console.log('arrayElementIndex([1, 2, 3, 4])');
  arrayElementIndexItemInRow([1, 2, 3, 4]);

  console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
  arrayElementIndexItemInRow(['green', 'red', 'blue', 'pink', 'white']);

  console.log(
    "arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])",
  );
  arrayElementIndexItemInRow([
    { name: 'Jonas', age: 45 },
    { name: 'Petras', age: 30 },
  ]);
}
console.groupEnd();

console.group(
  '9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2',
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu',
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos',
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų',
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų',
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų',
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų',
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų',
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();
