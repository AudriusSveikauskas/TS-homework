/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */

console.group('Union operators - užduotys');
{
  const container = document.getElementById('container') as HTMLDivElement;

  const taskTitle = document.createElement('h3');
  taskTitle.textContent = 'union-operators.ts';

  container.append(taskTitle);

  const createWrapper = (): HTMLDivElement => {
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');
    return taskWrapper;
  };

  type Accommodation = {
    type: 'House' | 'Flat';
    address: string;
    price: number;
  };

  const accommodation1: Accommodation = {
    type: 'House',
    address: 'Gervėčių g. 11, Vilnius 11350',
    price: 1_211_000,
  };

  const accommodation2: Accommodation = {
    type: 'Flat',
    address: 'Balio g. 18-3, Kaunas 47267',
    price: 137_200,
  };

  const accommodation3: Accommodation = {
    type: 'Flat',
    address: 'Molo g. 27-15, Klaipėda 92277',
    price: 52_300,
  };

  console.group(
    '1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"',
  );
  {
    const unionTask1Label = document.createElement('label');
    unionTask1Label.setAttribute('for', 'union-accommodation-list');
    unionTask1Label.textContent = 'task 1';

    const accommodationsList = document.createElement('ul');
    accommodationsList.setAttribute('id', 'union-accommodation-list');

    const accommodationsArr: Accommodation[] = [
      accommodation1,
      accommodation2,
      accommodation3,
    ];

    const printHumans = (arr: Accommodation[]): void => {
      arr.forEach((accommodation) => {
        const { type, address, price } = accommodation;
        const accommodationsListItem = document.createElement('li');
        accommodationsListItem.textContent = `${type}: ${address} - ${price}€`;
        accommodationsList.append(accommodationsListItem);
        console.log(accommodation);
      });
    };

    const taskWrapper = createWrapper();
    taskWrapper.append(unionTask1Label, accommodationsList);
    container.append(taskWrapper);

    printHumans(accommodationsArr);
  }
  console.groupEnd();

  console.group(
    '2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"',
  );
  {
    // sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();

  console.group(
    '3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu',
  );
  {
    // sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();
}
console.groupEnd();
