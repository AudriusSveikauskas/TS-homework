/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */

console.group('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');

class Drink {
  name: string;

  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const vodka = new Drink('Vodka', 10);
const gin = new Drink('Gin', 5);
const tequila = new Drink('Tequila', 110);
const water = new Drink('Water', 1);

const drinksArr: Drink[] = [vodka, gin, tequila, water];

const sortedDrinksArr: Drink[] = drinksArr
  .slice()
  .sort((a, b) => (a.price > b.price ? 1 : -1));

console.log('---- Original Array ----');
console.dir(drinksArr);
console.log('---- Sorted Array ----');
console.dir(sortedDrinksArr);

console.groupEnd();

console.group('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');

const addName = (obj: {}, name: string, value: number) => ({
  ...obj,
  [name]: value,
});

console.dir(addName({}, 'Brutus', 300));
console.dir(addName({ piano: 500 }, 'Brutus', 400));
console.dir(addName({ piano: 500, stereo: 300 }, 'Caligula', 440));

console.groupEnd();
